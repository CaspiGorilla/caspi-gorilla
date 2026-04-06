exports.handler = async function (event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  let body;
  try { body = JSON.parse(event.body); }
  catch { return { statusCode: 400, body: JSON.stringify({ error: 'Invalid request body' }) }; }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return { statusCode: 500, body: JSON.stringify({ error: 'API key not configured on server' }) };
  }

  const isPhoto = !!body.photo;
  const SYSTEM = `You are a nutrition expert. Analyze the food and return ONLY a valid JSON array with no markdown, no explanation.
Format: [{"name":"Food name","amount":"portion description","kcal":000,"protein":00,"carbs":00,"fat":00}]
Be realistic. Use standard serving sizes. Always return an array even for a single item.`;

  let userContent;

  if (isPhoto) {
    const mediaType = body.mediaType || 'image/jpeg';
    const contextNote = body.context ? ` Additional context: ${body.context}.` : '';
    userContent = [
      {
        type: 'image',
        source: { type: 'base64', media_type: mediaType, data: body.photo }
      },
      {
        type: 'text',
        text: `Identify all the food items visible in this image and estimate realistic nutrition values for each.${contextNote} Return ONLY the JSON array.`
      }
    ];
  } else {
    if (!body.text) return { statusCode: 400, body: JSON.stringify({ error: 'Missing text or photo' }) };
    userContent = `The user ate: "${body.text}". Parse into individual items and estimate nutrition. Return ONLY the JSON array.`;
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 1000,
        system: SYSTEM,
        messages: [{ role: 'user', content: userContent }]
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      const errMsg = data.error?.message || JSON.stringify(data);
      return { statusCode: 502, body: JSON.stringify({ error: 'Anthropic API error: ' + errMsg }) };
    }

    const raw = (data.content || []).map(b => b.text || '').join('');
    const clean = raw.replace(/```json|```/g, '').trim();
    const items = JSON.parse(clean);

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to analyze: ' + err.message }),
    };
  }
};
