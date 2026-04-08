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

  const { day } = body;

  const prompt = `You are a clinical dietitian creating a daily meal plan. Generate a completely fresh and varied meal plan for ${day}.

STRICT RULES from the patient's dietitian (Gal):
- Breakfast: protein source (yogurt 3% / cottage 5% / eggs / omelette) + carb (oats 3 tbsp / 1 slice whole wheat bread / granola) + vegetables (free)
- Lunch: 150-200g protein (chicken / turkey / fish / beef / eggs) + 5-6 tbsp cooked carbs (rice / pasta / bulgur / couscous / quinoa / legumes) + unlimited vegetables. Mix legumes into carbs.
- Snack: eaten 1.5h before workout. Yogurt + fruit OR bread + spread (cottage/peanut butter) OR fruit + 5 nuts
- Dinner: light — 2 eggs or egg+tuna + 1-2 carb servings (pita/crackers) + vegetables + optional cottage
- Max 1 fat serving per meal (1 tsp olive oil / ¼ avocado / 5 nuts / 1 tsp tahini)
- No frying — bake/grill/steam only
- Total day: ~1,400-1,500 kcal, ~110-130g protein, ~130-150g carbs, ~35-45g fat
- Make meals varied, interesting and realistic. Use Israeli/Mediterranean ingredients where fitting.
- Do NOT repeat meals already common in the default plan (Greek yogurt bowl, grilled chicken rice, egg tuna plate)

Return ONLY valid JSON, no markdown, no explanation:
{
  "totals": { "kcal": 1450, "protein": 118, "carbs": 140, "fat": 38 },
  "meals": [
    {
      "type": "breakfast",
      "time": "07:30",
      "title": "Meal Name",
      "kcal": "~380 kcal",
      "components": [
        { "label": "Protein", "value": "food item", "portion": "amount" },
        { "label": "Carbs", "value": "food item", "portion": "amount" },
        { "label": "Vegetables", "value": "food item", "portion": "Free amount" }
      ],
      "note": "One short practical tip about this meal."
    },
    {
      "type": "lunch",
      "time": "13:00",
      "title": "Meal Name",
      "kcal": "~520 kcal",
      "components": [
        { "label": "Protein", "value": "food item", "portion": "amount" },
        { "label": "Carbs", "value": "food item", "portion": "amount" },
        { "label": "Vegetables", "value": "food item", "portion": "Unlimited" }
      ],
      "note": "One short practical tip."
    },
    {
      "type": "snack",
      "time": "16:30",
      "title": "Meal Name",
      "kcal": "~190 kcal",
      "components": [
        { "label": "Protein", "value": "food item", "portion": "amount" },
        { "label": "Carbs", "value": "food item", "portion": "amount" },
        { "label": "Timing", "value": "1.5h before workout", "portion": "—" }
      ],
      "note": "One short practical tip."
    },
    {
      "type": "dinner",
      "time": "19:30",
      "title": "Meal Name",
      "kcal": "~360 kcal",
      "components": [
        { "label": "Protein", "value": "food item", "portion": "amount" },
        { "label": "Carbs", "value": "food item", "portion": "amount" },
        { "label": "Vegetables", "value": "food item", "portion": "Free amount" }
      ],
      "note": "One short practical tip."
    }
  ]
}`;

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
        max_tokens: 1500,
        messages: [{ role: 'user', content: prompt }]
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      return { statusCode: 502, body: JSON.stringify({ error: 'API error: ' + (data.error?.message || JSON.stringify(data)) }) };
    }

    const raw = (data.content || []).map(b => b.text || '').join('');
    const clean = raw.replace(/```json|```/g, '').trim();
    const result = JSON.parse(clean);

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(result),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed: ' + err.message }),
    };
  }
};
