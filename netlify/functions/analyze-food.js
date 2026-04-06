exports.handler = async function (event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  let text;
  try {
    ({ text } = JSON.parse(event.body));
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid request body' }) };
  }

  if (!text || typeof text !== 'string') {
    return { statusCode: 400, body: JSON.stringify({ error: 'Missing text field' }) };
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return { statusCode: 500, body: JSON.stringify({ error: 'API key not configured' }) };
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
        messages: [{
          role: 'user',
          content: `You are a nutrition expert. The user ate: "${text}"

Parse this into individual food items and estimate realistic nutrition values.
Return ONLY a valid JSON array, no markdown, no explanation, nothing else.
Format:
[
  { "name": "Hamburger", "amount": "1 burger (~200g)", "kcal": 540, "protein": 28, "carbs": 42, "fat": 26 },
  { "name": "French Fries", "amount": "200g", "kcal": 510, "protein": 6, "carbs": 66, "fat": 24 },
  { "name": "Coke Zero", "amount": "500ml", "kcal": 2, "protein": 0, "carbs": 0, "fat": 0 }
]
Be realistic with portion sizes. Use common restaurant/fast food values. Always return an array even for single items.`
        }]
      }),
    });

    const data = await response.json();
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
      body: JSON.stringify({ error: 'Failed to analyze food: ' + err.message }),
    };
  }
};
