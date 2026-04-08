const RECIPES = {
  creami1: { cat:'Ninja Creami — Healthy Ice Cream', title:'Blueberry Protein Ice Cream', meta:[{label:'Prep',val:'5 min'},{label:'Freeze',val:'24 hrs'},{label:'Serves',val:'1'},{label:'Protein',val:'~35g'},{label:'Calories',val:'~280 kcal'},{label:'Diet',val:'Gluten-Free'}], ingredients:['1 cup (240ml) unsweetened almond milk','1 scoop vanilla protein powder (~30g)','½ cup (75g) fresh or frozen blueberries','2 tbsp Greek yogurt (0% fat)','1 tsp honey or maple syrup','½ tsp vanilla extract','Pinch of salt'], steps:['Add all ingredients to a blender and blend until completely smooth.','Pour the mixture into your Ninja Creami pint container, filling to the max fill line.','Place the lid on and freeze for a full 24 hours — no shortcuts here.','Remove from freezer, let sit at room temperature for 5 minutes.','Process on the LITE ICE CREAM setting.','If texture is crumbly after the first spin, add 1 tablespoon of almond milk and re-spin.','Serve immediately, topped with a few fresh blueberries if desired.'], tip:'Swap blueberries for strawberries or raspberries — any berry works beautifully. For extra creaminess, use 2% Greek yogurt instead of 0%.'},
  creami2: { cat:'Ninja Creami — Healthy Ice Cream', title:'Dark Chocolate Peanut Butter Gelato', meta:[{label:'Prep',val:'5 min'},{label:'Freeze',val:'24 hrs'},{label:'Serves',val:'1'},{label:'Protein',val:'~30g'},{label:'Calories',val:'~320 kcal'},{label:'Diet',val:'Gluten-Free'}], ingredients:['1 cup (240ml) unsweetened oat milk','1 scoop chocolate protein powder (~30g)','1 tbsp natural peanut butter (no added sugar)','1 tbsp unsweetened cocoa powder','1 tsp honey','½ tsp vanilla extract','Pinch of salt'], steps:['Whisk together oat milk, protein powder, cocoa powder, honey, vanilla, and salt until fully combined.','Add peanut butter and whisk again — small streaks are fine, they create a marble effect.','Pour into Ninja Creami pint container up to the max fill line.','Freeze for 24 hours with the lid on.','Rest at room temperature for 5 minutes before processing.','Process on the GELATO setting for a denser, creamier texture.','If needed, add 1 tbsp oat milk and re-spin once.'], tip:'For a mix-in, after the first spin create a hole in the center, add 1 tbsp of dark chocolate chips, and use the MIX-IN setting.'},
  creami3: { cat:'Ninja Creami — Healthy Ice Cream', title:'Mango Coconut Sorbet', meta:[{label:'Prep',val:'5 min'},{label:'Freeze',val:'24 hrs'},{label:'Serves',val:'1'},{label:'Protein',val:'~2g'},{label:'Calories',val:'~180 kcal'},{label:'Diet',val:'Vegan · GF'}], ingredients:['1 cup (200g) frozen mango chunks','½ cup (120ml) full-fat coconut milk','1 tbsp lime juice (fresh)','1 tsp honey or agave','Zest of ½ lime','Pinch of salt'], steps:['Let mango chunks thaw slightly (5 minutes) then blend with coconut milk, lime juice, honey, and salt.','Blend until silky smooth — no chunks.','Stir in lime zest and pour into Ninja Creami pint container.','Freeze for 24 hours.','Rest 5 minutes at room temperature before processing.','Process on the SORBET setting.','Re-spin once if texture is not smooth enough. Serve immediately.'], tip:'Use ripe, sweet mango for best results. Alphonso or Ataulfo mangoes are ideal. A pinch of chili powder on top at serving adds a beautiful kick.'},
  passover1: { cat:'Passover — Main Course', title:'Slow-Braised Lamb Shoulder with Herbs', meta:[{label:'Prep',val:'20 min'},{label:'Cook',val:'4 hours'},{label:'Serves',val:'6–8'},{label:'Calories',val:'~420 kcal'},{label:'Diet',val:'GF · Pesach'},{label:'Difficulty',val:'Medium'}], ingredients:['1.8 kg bone-in lamb shoulder','6 garlic cloves, peeled and halved','2 sprigs fresh rosemary','4 sprigs fresh thyme','2 medium onions, roughly chopped','3 carrots, cut into chunks','400ml dry white wine (or chicken stock)','400ml chicken or vegetable stock','2 tbsp olive oil','Salt and black pepper','Juice of 1 lemon'], steps:['Preheat oven to 160°C (320°F). Pat the lamb dry with paper towels and season generously with salt and pepper.','Cut small slits all over the lamb and push in garlic halves and small rosemary sprigs.','Heat olive oil in a large Dutch oven over high heat. Sear lamb on all sides until deep golden brown, about 3–4 minutes per side.','Remove lamb. In the same pot, sauté onions and carrots for 5 minutes until softened.','Add wine and let it bubble for 2 minutes, scraping up any browned bits.','Add stock, remaining thyme and rosemary. Return lamb to pot — it should be halfway submerged.','Cover tightly and braise in the oven for 3.5 to 4 hours, until the meat falls off the bone.','Remove lamb, rest for 15 minutes. Strain braising liquid and reduce on the stovetop for a simple sauce.','Finish with lemon juice. Serve lamb pulled or sliced, with the sauce poured over.'], tip:'This is even better the next day — braise it the night before, refrigerate, and reheat covered at 150°C for 45 minutes before serving.'},
  passover2: { cat:'Passover — Side Dish', title:'Roasted Root Vegetables with Honey & Thyme', meta:[{label:'Prep',val:'15 min'},{label:'Cook',val:'40 min'},{label:'Serves',val:'4–6'},{label:'Calories',val:'~160 kcal'},{label:'Diet',val:'Vegan · GF · Pesach'},{label:'Difficulty',val:'Easy'}], ingredients:['2 medium sweet potatoes, cut into 3cm cubes','3 medium carrots, cut into thick rounds','2 medium parsnips, cut into chunks','1 medium beetroot, cut into wedges','3 tbsp olive oil','2 tbsp honey (or maple syrup for vegan)','1 tbsp balsamic vinegar','4 sprigs fresh thyme','4 garlic cloves, unpeeled','Salt and black pepper','Fresh parsley to serve'], steps:['Preheat oven to 200°C (400°F). Line a large baking tray with parchment.','Combine olive oil, honey, and balsamic vinegar in a large bowl.','Add all vegetables and garlic, season generously with salt and pepper. Toss to coat evenly.','Spread in a single layer on the baking tray — do not crowd them or they will steam instead of roast.','Scatter thyme sprigs over the top.','Roast for 40 minutes, turning once halfway through, until golden and caramelized at the edges.','Squeeze the roasted garlic out of their skins and mix through the vegetables.','Scatter with fresh parsley and serve warm.'], tip:'Keep beetroot separate until the last 10 minutes of roasting if you want to prevent it from staining the other vegetables.'},
  passover3: { cat:'Passover — Dessert', title:'Flourless Lemon Almond Cake', meta:[{label:'Prep',val:'15 min'},{label:'Bake',val:'35 min'},{label:'Serves',val:'10'},{label:'Calories',val:'~240 kcal'},{label:'Diet',val:'GF · Pesach'},{label:'Difficulty',val:'Easy'}], ingredients:['250g ground almonds (almond flour)','3 large eggs, separated','150g caster sugar','Zest of 2 lemons','Juice of 1 lemon','½ tsp vanilla extract','Pinch of salt','Icing sugar to dust (optional)'], steps:['Preheat oven to 170°C (340°F). Grease and line a 22cm round cake tin.','In a large bowl, whisk egg yolks and sugar together until pale and thick, about 2 minutes.','Stir in lemon zest, lemon juice, and vanilla extract.','Fold in the ground almonds until fully combined — the batter will be thick.','In a separate clean bowl, whisk egg whites with a pinch of salt until stiff peaks form.','Gently fold egg whites into the almond mixture in three additions, keeping as much air as possible.','Pour into prepared tin and bake for 33–35 minutes, until golden and a skewer comes out clean.','Cool completely in the tin before turning out. Dust with icing sugar before serving.'], tip:'This cake gets better with time — make it the day before your Seder. It keeps well wrapped at room temperature for 3 days. Serve with fresh berries or a dollop of whipped cream.'},
};

function openRecipe(id) {
  const r = RECIPES[id]; if (!r) return;
  document.getElementById('modal-cat').textContent = r.cat;
  document.getElementById('modal-title').textContent = r.title;
  document.getElementById('modal-meta').innerHTML = r.meta.map(m=>`<div class="modal-meta-item"><div class="modal-meta-label">${m.label}</div><div class="modal-meta-val">${m.val}</div></div>`).join('');
  document.getElementById('modal-body').innerHTML = `<div class="modal-section-title">Ingredients</div><ul class="ingredients-list">${r.ingredients.map(i=>`<li>${i}</li>`).join('')}</ul><div class="modal-section-title">Method</div><ol class="steps-list">${r.steps.map((s,i)=>`<li><span class="step-num">${String(i+1).padStart(2,'0')}</span><span>${s}</span></li>`).join('')}</ol><div class="modal-tip"><strong>Tip</strong>${r.tip}</div>`;
  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeRecipe() { document.getElementById('modal-overlay').classList.remove('open'); document.body.style.overflow=''; }
function closeModalOnBg(e) { if(e.target===document.getElementById('modal-overlay')) closeRecipe(); }

// ══════════════════════════════════════
// LANGUAGE / i18n SYSTEM
// ══════════════════════════════════════
let currentLang = 'en';

const TRANSLATIONS = {
  en: {
    // Header
    subtitle: 'Wellness · Recipes · Calculator',
    // Tabs
    tab_wellness: 'Wellness', tab_recipes: 'Recipes', tab_calculator: 'Calculator',
    // Dietitian note
    dietitian_title: 'Dietitian Plan — Gal · March 2026',
    dietitian_body: 'Personal meal plan based on your clinical dietitian\'s guidelines. Carb counting protocol active. Max 1 fat serving per meal. Aerobic exercise 2–3×/week recommended.',
    // Legend
    leg_protein: 'PROTEIN', leg_carbs: 'CARBS', leg_fat: 'FAT', leg_veg: 'VEGETABLES',
    // Days
    day_sun: 'Sun', day_mon: 'Mon', day_tue: 'Tue', day_wed: 'Wed', day_thu: 'Thu', day_fri: 'Fri', day_sat: 'Sat',
    // Meal labels
    total_calories: 'Total Calories', protein: 'Protein', carbs: 'Carbs', fat: 'Fat',
    kcal_day: 'kcal / day', grams: 'grams',
    label_protein: 'Protein', label_carbs: 'Carbs', label_fat: 'Fat', label_veg: 'Vegetables', label_timing: 'Timing',
    // Sunday meals
    sun_b_tag: 'Breakfast · 07:30', sun_b_title: 'Greek Yogurt Bowl', sun_b_kcal: '~380 kcal',
    sun_b_p: 'Greek yogurt 3%', sun_b_p_amt: '1 cup (200ml)', sun_b_c: 'Oats + banana slices', sun_b_c_amt: '3 tbsp oats + ½ banana', sun_b_v: 'Cherry tomatoes', sun_b_v_amt: 'Free amount',
    sun_b_note: 'Add a drizzle of honey if desired. Keep fat to max 1 serving — skip butter/oil if having yogurt.',
    sun_l_tag: 'Lunch · 13:00', sun_l_title: 'Grilled Chicken & Rice', sun_l_kcal: '~520 kcal',
    sun_l_p: 'Grilled chicken breast', sun_l_p_amt: '175g', sun_l_c: 'White rice + green lentils mixed', sun_l_c_amt: '5 tbsp cooked', sun_l_v: 'Cucumber, tomato, parsley salad', sun_l_v_amt: 'Unlimited',
    sun_l_note: 'Mix lentils into the rice — great way to add plant protein and slow the carb release. Season with olive oil (1 tsp only).',
    sun_s_tag: 'Snack · 16:30', sun_s_title: 'Pre-Workout Fuel', sun_s_kcal: '~200 kcal',
    sun_s_p: 'White yogurt', sun_s_p_amt: '1 cup', sun_s_c: 'Apple (medium)', sun_s_c_amt: '1 whole', sun_s_t: 'Eat 1.5h before workout',
    sun_s_note: 'If craving something sweet: keep the yogurt as your protein base, then add 4 squares of dark chocolate instead of the apple.',
    sun_d_tag: 'Dinner · 19:30', sun_d_title: 'Egg & Tuna Plate', sun_d_kcal: '~380 kcal',
    sun_d_p: '2 eggs scrambled + ½ tin tuna in water', sun_d_p_amt: '2 eggs + 60g tuna', sun_d_c: 'Whole wheat pita', sun_d_c_amt: '1 small (½ pita)', sun_d_v: 'Sliced cucumbers, radish, green onion', sun_d_v_amt: 'Free amount',
    sun_d_note: 'Add ½ cup cottage 5% on the side if still hungry. Max 1 fat serving — use a little olive oil for eggs only.',
    // Calculator
    calc_title: 'Nutrition Calculator', calc_personal: 'Personal Info', calc_age: 'Age (years)', calc_weight: 'Weight (kg)', calc_height: 'Height (cm)', calc_gender: 'Gender',
    calc_male: 'Male', calc_female: 'Female', calc_activity: 'Activity Level',
    act_sed: 'Sedentary', act_light: 'Light (1–2×/wk)', act_mod: 'Moderate (3–5×/wk)', act_active: 'Active (6–7×/wk)', act_very: 'Very Active',
    calc_goal: 'Goal', goal_lose: 'Lose Weight', goal_maintain: 'Maintain', goal_gain: 'Gain Muscle',
    calc_btn: 'Calculate My Macros →',
    bmr_label: 'BMR (Base)', tdee_label: 'TDEE (Maintenance)', target_label: 'Target Calories',
    res_kcal: 'Calories', res_protein: 'Protein', res_carbs: 'Carbs', res_fat: 'Fat',
    kcal_day2: 'kcal / day', g_day: 'grams / day',
    macro_split: 'Macro Split', per_meal: 'Per-Meal Breakdown', four_meals: '4 MEALS / DAY',
    cal_meal: 'Calories / meal', prot_meal: 'Protein / meal', carb_meal: 'Carbs / meal', fat_meal: 'Fat / meal',
    // Food log
    food_log_title: 'Food Log', food_log_badge: 'AI-POWERED',
    food_mode_type: '— TYPE', food_mode_photo: '📷 PHOTO',
    food_desc_title: 'Describe what you ate',
    food_desc_sub: 'Just write naturally — amounts, units, anything. The AI will parse it and estimate the macros.',
    food_placeholder: 'e.g. 1 hamburger, 200g fries and 1 coke zero 500ml',
    food_shortcut: 'Ctrl+Enter to submit', food_analyze_btn: 'Analyze with AI →',
    food_photo_title: 'Take or upload a photo',
    food_photo_sub: 'The AI will identify the food in the image and estimate the nutrition values automatically.',
    food_tap: 'Tap to upload a photo', food_formats: 'JPG, PNG, HEIC supported',
    food_camera: '📸 Camera', food_gallery: '🖼 Gallery',
    food_analyze_photo: 'Analyze Photo with AI →',
    food_item: 'Food Item', food_amount: 'Amount', food_kcal_col: 'Kcal',
    food_total: 'TOTAL', food_clear: 'Clear All', food_add_more: '+ Add More',
    // Footer
    footer: 'Wellness · Recipes · Calculator',
  },
  he: {
    subtitle: 'בריאות · מתכונים · מחשבון',
    tab_wellness: 'בריאות', tab_recipes: 'מתכונים', tab_calculator: 'מחשבון',
    dietitian_title: 'תפריט דיאטנית — גל · מרץ 2026',
    dietitian_body: 'תפריט אישי על פי הנחיות הדיאטנית הקלינית שלך. פרוטוקול ספירת פחמימות פעיל. מקסימום מנת שומן אחת בכל ארוחה. מומלץ פעילות אירובית 2–3 פעמים בשבוע.',
    leg_protein: 'חלבון', leg_carbs: 'פחמימות', leg_fat: 'שומן', leg_veg: 'ירקות',
    day_sun: 'ראשון', day_mon: 'שני', day_tue: 'שלישי', day_wed: 'רביעי', day_thu: 'חמישי', day_fri: 'שישי', day_sat: 'שבת',
    total_calories: 'סה״כ קלוריות', protein: 'חלבון', carbs: 'פחמימות', fat: 'שומן',
    kcal_day: 'קק״ל / יום', grams: 'גרם',
    label_protein: 'חלבון', label_carbs: 'פחמימות', label_fat: 'שומן', label_veg: 'ירקות', label_timing: 'תזמון',
    sun_b_tag: 'בוקר · 07:30', sun_b_title: 'קערת יוגורט יווני', sun_b_kcal: '~380 קק״ל',
    sun_b_p: 'יוגורט יווני 3%', sun_b_p_amt: 'כוס אחת (200 מ"ל)', sun_b_c: 'שיבולת שועל + פרוסות בננה', sun_b_c_amt: '3 כפות שיבולת + ½ בננה', sun_b_v: 'עגבניות שרי', sun_b_v_amt: 'כמות חופשית',
    sun_b_note: 'אפשר להוסיף מעט דבש. מקסימום מנת שומן אחת — אל תוסיף חמאה/שמן אם אוכל יוגורט.',
    sun_l_tag: 'צהריים · 13:00', sun_l_title: 'חזה עוף על האש עם אורז', sun_l_kcal: '~520 קק״ל',
    sun_l_p: 'חזה עוף על האש', sun_l_p_amt: '175 גרם', sun_l_c: 'אורז לבן + עדשים ירוקות מעורבב', sun_l_c_amt: '5 כפות מבושל', sun_l_v: 'סלט מלפפון, עגבניה ופטרוזיליה', sun_l_v_amt: 'ללא הגבלה',
    sun_l_note: 'ערבב עדשים לתוך האורז — דרך מצוינת להוסיף חלבון צמחי ולהאט את ספיגת הפחמימות. תבל בשמן זית (כפית בלבד).',
    sun_s_tag: 'ביניים · 16:30', sun_s_title: 'דלק לאימון', sun_s_kcal: '~200 קק״ל',
    sun_s_p: 'יוגורט לבן', sun_s_p_amt: 'כוס אחת', sun_s_c: 'תפוח (בינוני)', sun_s_c_amt: '1 שלם', sun_s_t: 'לאכול שעה וחצי לפני האימון',
    sun_s_note: 'אם חושק במשהו מתוק: שמור את היוגורט כבסיס החלבוני, והוסף 4 קוביות שוקולד מריר במקום התפוח.',
    sun_d_tag: 'ערב · 19:30', sun_d_title: 'צלחת ביצים וטונה', sun_d_kcal: '~380 קק״ל',
    sun_d_p: '2 ביצים מקושקשות + ½ פחית טונה במים', sun_d_p_amt: '2 ביצים + 60 גרם טונה', sun_d_c: 'פיתה מחיטה מלאה', sun_d_c_amt: '1 קטנה (½ פיתה)', sun_d_v: 'מלפפון פרוס, צנון, בצל ירוק', sun_d_v_amt: 'כמות חופשית',
    sun_d_note: 'הוסף ½ כוס קוטג׳ 5% בצד אם עדיין רעב. מקסימום מנת שומן אחת — שמן זית קצת בלבד לביצים.',
    calc_title: 'מחשבון תזונה', calc_personal: 'פרטים אישיים', calc_age: 'גיל (שנים)', calc_weight: 'משקל (ק"ג)', calc_height: 'גובה (ס"מ)', calc_gender: 'מין',
    calc_male: 'זכר', calc_female: 'נקבה', calc_activity: 'רמת פעילות',
    act_sed: 'יושבני', act_light: 'קלה (1–2×/שבוע)', act_mod: 'בינונית (3–5×/שבוע)', act_active: 'פעיל (6–7×/שבוע)', act_very: 'פעיל מאוד',
    calc_goal: 'מטרה', goal_lose: 'ירידה במשקל', goal_maintain: 'שמירה', goal_gain: 'עלייה בשריר',
    calc_btn: 'חשב את המקרו שלי →',
    bmr_label: 'BMR (בסיסי)', tdee_label: 'TDEE (תחזוקה)', target_label: 'קלוריות מטרה',
    res_kcal: 'קלוריות', res_protein: 'חלבון', res_carbs: 'פחמימות', res_fat: 'שומן',
    kcal_day2: 'קק״ל / יום', g_day: 'גרם / יום',
    macro_split: 'פיצול מקרו', per_meal: 'פירוט לפי ארוחה', four_meals: '4 ארוחות / יום',
    cal_meal: 'קלוריות / ארוחה', prot_meal: 'חלבון / ארוחה', carb_meal: 'פחמימות / ארוחה', fat_meal: 'שומן / ארוחה',
    food_log_title: 'יומן אכילה', food_log_badge: 'מבוסס AI',
    food_mode_type: '— הקלד', food_mode_photo: '📷 תמונה',
    food_desc_title: 'תאר מה אכלת',
    food_desc_sub: 'כתוב בחופשיות — כמויות, יחידות, הכל. ה-AI יפרש ויחשב את הערכים.',
    food_placeholder: 'לדוגמה: המבורגר אחד, 200 גרם צ׳יפס וקולה זירו 500 מ"ל',
    food_shortcut: 'Ctrl+Enter לשליחה', food_analyze_btn: 'ניתוח עם AI →',
    food_photo_title: 'צלם או העלה תמונה',
    food_photo_sub: 'ה-AI יזהה את המזון בתמונה ויחשב את הערכים התזונתיים אוטומטית.',
    food_tap: 'לחץ להעלאת תמונה', food_formats: 'JPG, PNG, HEIC נתמכים',
    food_camera: '📸 מצלמה', food_gallery: '🖼 גלריה',
    food_analyze_photo: 'ניתוח תמונה עם AI →',
    food_item: 'מזון', food_amount: 'כמות', food_kcal_col: 'קק״ל',
    food_total: 'סה״כ', food_clear: 'נקה הכל', food_add_more: '+ הוסף עוד',
    footer: 'בריאות · מתכונים · מחשבון',
  }
};

function toggleLang() {
  currentLang = currentLang === 'en' ? 'he' : 'en';
  const html = document.documentElement;
  html.lang = currentLang;
  html.dir = currentLang === 'he' ? 'rtl' : 'ltr';
  document.getElementById('lang-btn').textContent = currentLang === 'he' ? 'EN / עב' : 'עב / EN';
  applyTranslations();
}

function t(key) {
  return TRANSLATIONS[currentLang][key] || TRANSLATIONS['en'][key] || key;
}

function applyTranslations() {
  const L = currentLang;
  // Header subtitle
  document.querySelector('[data-en="Wellness · Recipes · Calculator"]').textContent = t('subtitle');
  // Tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    const key = 'tab_' + btn.getAttribute('onclick').match(/'(\w+)'/)[1];
    btn.textContent = t(key);
  });
  // Dietitian note
  const dn = document.querySelector('.dn-text');
  if (dn) {
    dn.innerHTML = `<strong>${t('dietitian_title')}</strong>${t('dietitian_body')}`;
  }
  // Legend
  const legends = document.querySelectorAll('.legend-item');
  const legKeys = ['leg_protein','leg_carbs','leg_fat','leg_veg'];
  legends.forEach((el, i) => {
    const dot = el.querySelector('.legend-dot');
    el.textContent = t(legKeys[i]);
    el.prepend(dot);
  });
  // Day buttons
  const days = ['sun','mon','tue','wed','thu','fri','sat'];
  document.querySelectorAll('.day-btn').forEach((btn, i) => {
    btn.textContent = t('day_' + days[i]);
  });
  // Day totals labels
  document.querySelectorAll('.dt-label').forEach(el => {
    const txt = el.textContent.trim();
    if (txt === 'Total Calories' || txt === 'סה״כ קלוריות') el.textContent = t('total_calories');
    if (txt === 'Protein' || txt === 'חלבון') el.textContent = t('protein');
    if (txt === 'Carbs' || txt === 'פחמימות') el.textContent = t('carbs');
    if (txt === 'Fat' || txt === 'שומן') el.textContent = t('fat');
  });
  document.querySelectorAll('.dt-unit').forEach(el => {
    if (el.textContent.includes('kcal') || el.textContent.includes('קק')) el.textContent = t('kcal_day');
    if (el.textContent === 'grams' || el.textContent === 'גרם') el.textContent = t('grams');
  });
  // Meal component labels
  document.querySelectorAll('.mc-label').forEach(el => {
    const txt = el.textContent.trim();
    if (txt === 'Protein' || txt === 'חלבון') el.textContent = t('label_protein');
    else if (txt === 'Carbs' || txt === 'פחמימות') el.textContent = t('label_carbs');
    else if (txt === 'Fat' || txt === 'שומן') el.textContent = t('label_fat');
    else if (txt === 'Vegetables' || txt === 'ירקות') el.textContent = t('label_veg');
    else if (txt === 'Timing' || txt === 'תזמון') el.textContent = t('label_timing');
  });
  // Sunday meals specifically
  const sunKeys = [
    ['sun_b_tag','sun_b_title','sun_b_kcal','sun_b_p','sun_b_p_amt','sun_b_c','sun_b_c_amt','sun_b_v','sun_b_v_amt','sun_b_note'],
    ['sun_l_tag','sun_l_title','sun_l_kcal','sun_l_p','sun_l_p_amt','sun_l_c','sun_l_c_amt','sun_l_v','sun_l_v_amt','sun_l_note'],
    ['sun_s_tag','sun_s_title','sun_s_kcal','sun_s_p','sun_s_p_amt','sun_s_c','sun_s_c_amt','sun_s_t','—','sun_s_note'],
    ['sun_d_tag','sun_d_title','sun_d_kcal','sun_d_p','sun_d_p_amt','sun_d_c','sun_d_c_amt','sun_d_v','sun_d_v_amt','sun_d_note'],
  ];
  const sunPanel = document.getElementById('day-sun');
  if (sunPanel) {
    const blocks = sunPanel.querySelectorAll('.meal-block');
    blocks.forEach((block, bi) => {
      const keys = sunKeys[bi];
      const tag = block.querySelector('.meal-time-tag'); if (tag) tag.textContent = t(keys[0]);
      const title = block.querySelector('.meal-title'); if (title) title.textContent = t(keys[1]);
      const kcal = block.querySelector('.meal-kcal'); if (kcal) kcal.textContent = t(keys[2]);
      const comps = block.querySelectorAll('.meal-component');
      if (comps[0]) { comps[0].querySelector('.mc-value').textContent = t(keys[3]); comps[0].querySelector('.mc-portion').textContent = t(keys[4]); }
      if (comps[1]) { comps[1].querySelector('.mc-value').textContent = t(keys[5]); comps[1].querySelector('.mc-portion').textContent = t(keys[6]); }
      if (comps[2]) { comps[2].querySelector('.mc-value').textContent = t(keys[7]); comps[2].querySelector('.mc-portion').textContent = t(keys[8]); }
      const note = block.querySelector('.meal-note'); if (note) note.textContent = t(keys[9]);
    });
  }
  // Calculator
  translateEl('[data-i18n="calc_title"]', 'calc_title');
  // Food log
  translateEl('[data-i18n="food_log_title"]', 'food_log_title');
  translateEl('[data-i18n="food_log_badge"]', 'food_log_badge');
  translateEl('[data-i18n="food_desc_title"]', 'food_desc_title');
  translateEl('[data-i18n="food_desc_sub"]', 'food_desc_sub');
  translateAttr('[data-i18n-ph="food_placeholder"]', 'placeholder', 'food_placeholder');
  translateEl('[data-i18n="food_shortcut"]', 'food_shortcut');
  translateEl('[data-i18n="food_analyze_btn"]', 'food_analyze_btn');
  translateEl('[data-i18n="food_photo_title"]', 'food_photo_title');
  translateEl('[data-i18n="food_photo_sub"]', 'food_photo_sub');
  translateEl('[data-i18n="food_tap"]', 'food_tap');
  translateEl('[data-i18n="food_formats"]', 'food_formats');
  translateEl('[data-i18n="food_camera"]', 'food_camera');
  translateEl('[data-i18n="food_gallery"]', 'food_gallery');
  translateEl('[data-i18n="food_analyze_photo"]', 'food_analyze_photo');
  translateEl('[data-i18n="food_total"]', 'food_total');
  translateEl('[data-i18n="food_clear"]', 'food_clear');
  translateEl('[data-i18n="food_add_more"]', 'food_add_more');
  // Footer
  const footer = document.querySelector('footer');
  if (footer) footer.innerHTML = `<span>CASPI GORILLA</span> — ${t('footer')} · © 2026`;
}

function translateEl(selector, key) {
  const el = document.querySelector(selector);
  if (el) el.textContent = t(key);
}

function translateAttr(selector, attr, key) {
  const el = document.querySelector(selector);
  if (el) el[attr] = t(key);
}

// ── FOOD LOG STATE ──
let foodLog = [];

// ── FOOD LOG MODE TOGGLE ──
function setMode(mode) {
  const isPhoto = mode === 'photo';
  document.getElementById('mode-text').style.display = isPhoto ? 'none' : 'block';
  document.getElementById('mode-photo').style.display = isPhoto ? 'block' : 'none';
  document.getElementById('mode-text-btn').style.background = isPhoto ? 'none' : 'var(--navy)';
  document.getElementById('mode-text-btn').style.color = isPhoto ? 'var(--text-muted)' : 'var(--green)';
  document.getElementById('mode-photo-btn').style.background = isPhoto ? 'var(--navy)' : 'none';
  document.getElementById('mode-photo-btn').style.color = isPhoto ? 'var(--green)' : 'var(--text-muted)';
  setStatus('', '');
}

// ── PHOTO HANDLING ──
let currentPhotoBase64 = null;
let currentPhotoMediaType = 'image/jpeg';

function onPhotoSelected(event) {
  const file = event.target.files[0];
  if (!file) return;

  // Detect media type
  currentPhotoMediaType = file.type || 'image/jpeg';

  // Compress image via canvas before sending (max 1000px wide, quality 0.75)
  const reader = new FileReader();
  reader.onload = (e) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const MAX = 1000;
      let w = img.width, h = img.height;
      if (w > MAX) { h = Math.round(h * MAX / w); w = MAX; }
      canvas.width = w; canvas.height = h;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, w, h);
      const compressed = canvas.toDataURL('image/jpeg', 0.75);
      currentPhotoBase64 = compressed.split(',')[1];
      currentPhotoMediaType = 'image/jpeg'; // canvas always outputs JPEG
      document.getElementById('photo-preview').src = compressed;
      document.getElementById('photo-preview-wrap').style.display = 'block';
      document.getElementById('photo-drop-area').style.display = 'none';
      setStatus('✓ Photo ready — click Analyze to estimate nutrition.', 'var(--green)');
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

function clearPhoto() {
  currentPhotoBase64 = null;
  document.getElementById('photo-preview-wrap').style.display = 'none';
  document.getElementById('photo-drop-area').style.display = 'block';
  document.getElementById('photo-file-input').value = '';
  document.getElementById('photo-camera-input').value = '';
  setStatus('', '');
}

async function analyzePhoto() {
  if (!currentPhotoBase64) {
    setStatus('Please take or upload a photo first.', '#e24b4a');
    return;
  }
  const btn = document.querySelector('[onclick="analyzePhoto()"]');
  btn.textContent = 'Analyzing...';
  btn.disabled = true;
  setStatus('<span style="opacity:0.6;">AI is identifying the food in your photo...</span>', 'var(--text-muted)');

  try {
    const response = await fetch('/.netlify/functions/analyze-food', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ photo: currentPhotoBase64, mediaType: currentPhotoMediaType })
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'Function error');
    const items = data.items;
    if (!Array.isArray(items) || items.length === 0) throw new Error('No food detected in image');

    items.forEach(item => { foodLog.push({ id: Date.now() + Math.random(), ...item }); });
    renderLog();
    clearPhoto();
    setStatus('✓ ' + items.length + ' item' + (items.length > 1 ? 's' : '') + ' identified and added to log.', 'var(--green)');
  } catch (e) {
    setStatus('✕ ' + (e.message || 'Something went wrong. Try again.'), '#e24b4a');
    console.error(e);
  } finally {
    btn.textContent = 'Analyze Photo with AI →';
    btn.disabled = false;
  }
}



function setStatus(msg, color) {
  const el = document.getElementById('food-ai-status');
  el.style.color = color || 'var(--text-muted)';
  el.innerHTML = msg;
}

async function analyzeFood() {
  const text = document.getElementById('food-text-input').value.trim();
  if (!text) { setStatus('Please describe what you ate first.', '#e24b4a'); return; }

  const btn = document.querySelector('[onclick="analyzeFood()"]');
  btn.textContent = 'Analyzing...';
  btn.disabled = true;
  setStatus('<span style="opacity:0.6;">Asking AI to estimate nutrition values...</span>', 'var(--text-muted)');

  try {
    const response = await fetch('/.netlify/functions/analyze-food', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text })
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'Function error');
    const items = data.items;

    if (!Array.isArray(items) || items.length === 0) throw new Error('Empty result');

    items.forEach(item => {
      foodLog.push({ id: Date.now() + Math.random(), ...item });
    });

    renderLog();
    document.getElementById('food-text-input').value = '';
    setStatus('✓ ' + items.length + ' item' + (items.length > 1 ? 's' : '') + ' added to log.', 'var(--green)');

  } catch (e) {
    setStatus('✕ Error: ' + (e.message || 'Unknown error'), '#e24b4a');
    console.error(e);
  } finally {
    btn.textContent = 'Analyze with AI →';
    btn.disabled = false;
  }
}

function addMore() {
  document.getElementById('food-text-input').focus();
  document.getElementById('food-text-input').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function removeItem(id) {
  foodLog = foodLog.filter(i => i.id !== id);
  renderLog();
}

function renderLog() {
  const tbody = document.getElementById('food-table-body');
  tbody.innerHTML = foodLog.map(item => `
    <tr style="border-bottom:1px solid var(--card-border);">
      <td style="padding:11px 20px; font-weight:500; color:var(--text);">${item.name}</td>
      <td class="food-col-amount" style="text-align:right; padding:11px 14px; font-family:'JetBrains Mono',monospace; font-size:11px; color:var(--text-muted); white-space:nowrap;">${item.amount}</td>
      <td style="text-align:right; padding:11px 14px; font-family:'JetBrains Mono',monospace; font-size:13px; font-weight:500; color:var(--text);">${item.kcal}</td>
      <td style="text-align:right; padding:11px 14px; font-family:'JetBrains Mono',monospace; font-size:13px; color:var(--text);">${item.protein}g</td>
      <td class="food-col-carbs" style="text-align:right; padding:11px 14px; font-family:'JetBrains Mono',monospace; font-size:13px; color:var(--text);">${item.carbs}g</td>
      <td class="food-col-fat" style="text-align:right; padding:11px 14px; font-family:'JetBrains Mono',monospace; font-size:13px; color:var(--text);">${item.fat}g</td>
      <td style="padding:11px 10px; text-align:center;">
        <button onclick="removeItem(${item.id})" style="font-family:'JetBrains Mono',monospace; font-size:13px; color:var(--text-muted); background:none; border:none; cursor:pointer; padding:4px 8px; border-radius:2px; min-width:32px; min-height:32px;" onmouseover="this.style.color='#e24b4a'" onmouseout="this.style.color='var(--text-muted)'">✕</button>
      </td>
    </tr>
  `).join('');

  const totKcal  = foodLog.reduce((s,i) => s + (i.kcal || 0), 0);
  const totProt  = Math.round(foodLog.reduce((s,i) => s + (i.protein || 0), 0) * 10) / 10;
  const totCarbs = Math.round(foodLog.reduce((s,i) => s + (i.carbs   || 0), 0) * 10) / 10;
  const totFat   = Math.round(foodLog.reduce((s,i) => s + (i.fat     || 0), 0) * 10) / 10;

  document.getElementById('total-kcal').textContent    = totKcal + ' kcal';
  document.getElementById('total-protein').textContent = totProt + 'g';
  document.getElementById('total-carbs').textContent   = totCarbs + 'g';
  document.getElementById('total-fat').textContent     = totFat + 'g';

  document.getElementById('food-log-section').style.display = foodLog.length ? 'block' : 'none';
}

function clearLog() {
  foodLog = [];
  renderLog();
  setStatus('', '');
}

function calculate() {
  const age    = parseFloat(document.getElementById('calc-age').value);
  const weight = parseFloat(document.getElementById('calc-weight').value);
  const height = parseFloat(document.getElementById('calc-height').value);
  const gender = document.getElementById('calc-gender').value;
  const activity = parseFloat(document.querySelector('input[name="activity"]:checked').value);
  const goal   = document.querySelector('input[name="goal"]:checked').value;

  if (!age || !weight || !height || isNaN(age) || isNaN(weight) || isNaN(height)) {
    alert('Please fill in all fields (age, weight, height) before calculating.');
    return;
  }

  // Mifflin-St Jeor BMR
  let bmr;
  if (gender === 'male') {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }

  const tdee = bmr * activity;

  // Adjust for goal
  let targetKcal;
  let proteinMultiplier;
  let carbPct, fatPct, proteinPct;
  let tipText;

  if (goal === 'lose') {
    targetKcal = tdee - 400;
    proteinMultiplier = 2.2; // higher protein to preserve muscle
    proteinPct = 35; carbPct = 40; fatPct = 25;
    tipText = 'For fat loss, you\'re eating ~400 kcal below your TDEE. Protein is set high (2.2g/kg) to protect muscle mass. Keep carbs around workouts and stay consistent with your deficit.';
  } else if (goal === 'gain') {
    targetKcal = tdee + 300;
    proteinMultiplier = 2.0;
    proteinPct = 30; carbPct = 45; fatPct = 25;
    tipText = 'For muscle gain, you\'re eating ~300 kcal above TDEE (lean bulk). Protein at 2.0g/kg supports hypertrophy. Prioritize carbs around your training sessions for optimal performance.';
  } else {
    targetKcal = tdee;
    proteinMultiplier = 1.8;
    proteinPct = 30; carbPct = 42; fatPct = 28;
    tipText = 'Maintenance mode — eating at your TDEE. Great for body recomposition with consistent training. This balance supports energy, recovery, and overall health.';
  }

  const proteinG = Math.round(weight * proteinMultiplier);
  const proteinKcal = proteinG * 4;
  const fatKcal = (targetKcal * fatPct) / 100;
  const fatG = Math.round(fatKcal / 9);
  const carbKcal = targetKcal - proteinKcal - fatKcal;
  const carbG = Math.round(carbKcal / 4);

  const totalMacroKcal = proteinG * 4 + fatG * 9 + carbG * 4;
  const realProteinPct = Math.round((proteinG * 4 / totalMacroKcal) * 100);
  const realCarbPct    = Math.round((carbG * 4 / totalMacroKcal) * 100);
  const realFatPct     = Math.round((fatG * 9 / totalMacroKcal) * 100);

  // Render
  document.getElementById('res-bmr').textContent    = Math.round(bmr) + ' kcal';
  document.getElementById('res-tdee').textContent   = Math.round(tdee) + ' kcal';
  document.getElementById('res-target').textContent = Math.round(targetKcal) + ' kcal';
  document.getElementById('res-kcal').textContent   = Math.round(targetKcal);
  document.getElementById('res-protein').textContent = proteinG + 'g';
  document.getElementById('res-carbs').textContent   = carbG + 'g';
  document.getElementById('res-fat').textContent     = fatG + 'g';

  document.getElementById('bar-protein').style.width = realProteinPct + '%';
  document.getElementById('bar-carbs').style.width   = realCarbPct + '%';
  document.getElementById('bar-fat').style.width     = realFatPct + '%';
  document.getElementById('pct-protein').textContent = realProteinPct + '%';
  document.getElementById('pct-carbs').textContent   = realCarbPct + '%';
  document.getElementById('pct-fat').textContent     = realFatPct + '%';

  document.getElementById('goal-tip-text').textContent = tipText;

  const meals = 4;
  document.getElementById('per-meal-fields').innerHTML = `
    <div><div class="f-label">Calories / meal</div><div class="f-val">${Math.round(targetKcal / meals)} kcal</div></div>
    <div><div class="f-label">Protein / meal</div><div class="f-val">${Math.round(proteinG / meals)}g</div></div>
    <div><div class="f-label">Carbs / meal</div><div class="f-val">${Math.round(carbG / meals)}g</div></div>
    <div><div class="f-label">Fat / meal</div><div class="f-val">${Math.round(fatG / meals)}g</div></div>
  `;

  document.getElementById('calc-results').classList.add('visible');
  document.getElementById('calc-results').scrollIntoView({ behavior:'smooth', block:'start' });
}

function switchTab(name, btn) {
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
  document.querySelectorAll('.tab-panel').forEach(p=>p.classList.remove('active'));
  document.getElementById('tab-'+name).classList.add('active');
  btn.classList.add('active');
}

function switchDay(name, btn) {
  document.querySelectorAll('.day-btn').forEach(b=>b.classList.remove('active'));
  document.querySelectorAll('.day-panel').forEach(p=>p.classList.remove('active'));
  document.getElementById('day-'+name).classList.add('active');
  btn.classList.add('active');
}

document.addEventListener('keydown', e=>{ if(e.key==='Escape') closeRecipe(); });

// ── LANGUAGE / i18n ──
let currentLang = localStorage.getItem('cg_lang') || 'en';

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('cg_lang', lang);

  const t = TRANSLATIONS[lang];
  const isHe = lang === 'he';

  // Update html dir + lang
  document.documentElement.lang = lang;
  document.documentElement.dir = isHe ? 'rtl' : 'ltr';

  // Update body font for Hebrew
  document.body.style.fontFamily = isHe
    ? "'Heebo', 'IBM Plex Sans', sans-serif"
    : "'IBM Plex Sans', sans-serif";

  // Translate all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // Update lang button
  const btn = document.getElementById('lang-btn');
  if (btn) btn.textContent = isHe ? 'EN' : 'עב';

  // Update placeholder on food textarea
  const ta = document.getElementById('food-text-input');
  if (ta && t.food_placeholder) ta.placeholder = t.food_placeholder;

  // Update recipe section labels (they use class, not data-i18n)
  const labels = document.querySelectorAll('.recipe-section-label');
  if (labels[0] && t.recipe_section_creami) labels[0].textContent = t.recipe_section_creami;
  if (labels[1] && t.recipe_section_passover) labels[1].textContent = t.recipe_section_passover;
}

function toggleLang() {
  applyLang(currentLang === 'en' ? 'he' : 'en');
}

// Apply on load
applyLang(currentLang);

