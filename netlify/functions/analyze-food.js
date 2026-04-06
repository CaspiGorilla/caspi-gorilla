exports.handler = async function (event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  let body;
  try { body = JSON.parse(event.body); }
  catch { return { statusCode: 400, body: JSON.stringify({ error: 'Invalid request body' }) }; }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return { statusCode: 500, body: JSON.stringify({ error: 'API key not configured' }) };
  }

  const isPhoto = !!body.photo;
  let userContent;

  if (isPhoto) {
    userContent = [
      {
        type: 'image',
        source: { type: 'base64', media_type: body.mediaType || 'image/jpeg', data: body.photo }
      },
      {
        type: 'text',
        text: 'Identify all the food items visible in this image and estimate realistic nutrition values for each item. Return ONLY a valid JSON array, no markdown, no explanation. Format: [{"name":"Grilled Chicken","amount":"~150g","kcal":248,"protein":46,"carbs":0,"fat":5},{"name":"White Rice","amount":"~200g","kcal":260,"protein":5,"carbs":57,"fat":0}]'
      }
    ];
  } else {
    if (!body.text) return { statusCode: 400, body: JSON.stringify({ error: 'Missing text or photo' }) };
    userContent = `The user ate: "${body.text}". Parse into individual food items and estimate realistic nutrition values. Return ONLY a valid JSON array, no markdown, no explanation. Format: [{"name":"Hamburger","amount":"1 burger (~200g)","kcal":540,"protein":28,"carbs":42,"fat":26}]`;
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
        messages: [{ role: 'user', content: userContent }]
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return { statusCode: 502, body: JSON.stringify({ error: 'API error: ' + (data.error?.message || JSON.stringify(data)) }) };
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
      body: JSON.stringify({ error: 'Failed: ' + err.message }),
    };
  }
};
