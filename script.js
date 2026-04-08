// ══════════════════════════════════════
// CASPI GORILLA — script.js
// ══════════════════════════════════════

// ── RECIPES ──
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

// ── TAB & DAY SWITCHING ──
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

// ── FOOD LOG ──
let foodLog = [];

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

let currentPhotoBase64 = null;
let currentPhotoMediaType = 'image/jpeg';

function onPhotoSelected(event) {
  const file = event.target.files[0];
  if (!file) return;
  currentPhotoMediaType = file.type || 'image/jpeg';
  const reader = new FileReader();
  reader.onload = (e) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const MAX = 1000;
      let w = img.width, h = img.height;
      if (w > MAX) { h = Math.round(h * MAX / w); w = MAX; }
      canvas.width = w; canvas.height = h;
      canvas.getContext('2d').drawImage(img, 0, 0, w, h);
      const compressed = canvas.toDataURL('image/jpeg', 0.75);
      currentPhotoBase64 = compressed.split(',')[1];
      currentPhotoMediaType = 'image/jpeg';
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

function setStatus(msg, color) {
  const el = document.getElementById('food-ai-status');
  if (!el) return;
  el.style.color = color || 'var(--text-muted)';
  el.innerHTML = msg;
}

async function analyzePhoto() {
  if (!currentPhotoBase64) { setStatus('Please take or upload a photo first.', '#e24b4a'); return; }
  const btn = document.querySelector('[onclick="analyzePhoto()"]');
  btn.textContent = 'Analyzing...'; btn.disabled = true;
  setStatus('<span style="opacity:0.6;">AI is identifying the food in your photo...</span>', 'var(--text-muted)');
  try {
    const response = await fetch('/.netlify/functions/analyze-food', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ photo: currentPhotoBase64, mediaType: currentPhotoMediaType })
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'Function error');
    const items = data.items;
    if (!Array.isArray(items) || items.length === 0) throw new Error('No food detected in image');
    items.forEach(item => { foodLog.push({ id: Date.now() + Math.random(), ...item }); });
    renderLog(); clearPhoto();
    setStatus('✓ ' + items.length + ' item' + (items.length > 1 ? 's' : '') + ' identified and added to log.', 'var(--green)');
  } catch (e) {
    setStatus('✕ ' + (e.message || 'Something went wrong.'), '#e24b4a');
  } finally {
    btn.textContent = 'Analyze Photo with AI →'; btn.disabled = false;
  }
}

async function analyzeFood() {
  const text = document.getElementById('food-text-input').value.trim();
  if (!text) { setStatus('Please describe what you ate first.', '#e24b4a'); return; }
  const btn = document.querySelector('[onclick="analyzeFood()"]');
  btn.textContent = 'Analyzing...'; btn.disabled = true;
  setStatus('<span style="opacity:0.6;">Asking AI to estimate nutrition values...</span>', 'var(--text-muted)');
  try {
    const response = await fetch('/.netlify/functions/analyze-food', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text })
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'Function error');
    const items = data.items;
    if (!Array.isArray(items) || items.length === 0) throw new Error('Empty result');
    items.forEach(item => { foodLog.push({ id: Date.now() + Math.random(), ...item }); });
    renderLog();
    document.getElementById('food-text-input').value = '';
    setStatus('✓ ' + items.length + ' item' + (items.length > 1 ? 's' : '') + ' added to log.', 'var(--green)');
  } catch (e) {
    setStatus('✕ ' + (e.message || 'Unknown error'), '#e24b4a');
  } finally {
    btn.textContent = 'Analyze with AI →'; btn.disabled = false;
  }
}

function addMore() {
  document.getElementById('food-text-input').focus();
  document.getElementById('food-text-input').scrollIntoView({ behavior:'smooth', block:'center' });
}

function removeItem(id) { foodLog = foodLog.filter(i => i.id !== id); renderLog(); }

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
        <button onclick="removeItem(${item.id})" style="font-family:'JetBrains Mono',monospace; font-size:13px; color:var(--text-muted); background:none; border:none; cursor:pointer; padding:4px 8px;" onmouseover="this.style.color='#e24b4a'" onmouseout="this.style.color='var(--text-muted)'">✕</button>
      </td>
    </tr>`).join('');
  document.getElementById('total-kcal').textContent    = foodLog.reduce((s,i)=>s+(i.kcal||0),0) + ' kcal';
  document.getElementById('total-protein').textContent = (Math.round(foodLog.reduce((s,i)=>s+(i.protein||0),0)*10)/10) + 'g';
  document.getElementById('total-carbs').textContent   = (Math.round(foodLog.reduce((s,i)=>s+(i.carbs||0),0)*10)/10) + 'g';
  document.getElementById('total-fat').textContent     = (Math.round(foodLog.reduce((s,i)=>s+(i.fat||0),0)*10)/10) + 'g';
  document.getElementById('food-log-section').style.display = foodLog.length ? 'block' : 'none';
}

function clearLog() { foodLog = []; renderLog(); setStatus('',''); }

// ── CALCULATOR ──
function calculate() {
  const age    = parseFloat(document.getElementById('calc-age').value);
  const weight = parseFloat(document.getElementById('calc-weight').value);
  const height = parseFloat(document.getElementById('calc-height').value);
  const gender = document.getElementById('calc-gender').value;
  const activity = parseFloat(document.querySelector('input[name="activity"]:checked').value);
  const goal   = document.querySelector('input[name="goal"]:checked').value;
  if (!age || !weight || !height || isNaN(age) || isNaN(weight) || isNaN(height)) {
    alert('Please fill in all fields (age, weight, height) before calculating.'); return;
  }
  const bmr = gender === 'male'
    ? 10*weight + 6.25*height - 5*age + 5
    : 10*weight + 6.25*height - 5*age - 161;
  const tdee = bmr * activity;
  let targetKcal, proteinMultiplier, carbPct, fatPct, tipText;
  if (goal === 'lose') {
    targetKcal=tdee-400; proteinMultiplier=2.2; carbPct=40; fatPct=25;
    tipText='For fat loss, you\'re eating ~400 kcal below your TDEE. Protein is set high (2.2g/kg) to protect muscle mass.';
  } else if (goal === 'gain') {
    targetKcal=tdee+300; proteinMultiplier=2.0; carbPct=45; fatPct=25;
    tipText='For muscle gain, you\'re eating ~300 kcal above TDEE (lean bulk). Protein at 2.0g/kg supports hypertrophy.';
  } else {
    targetKcal=tdee; proteinMultiplier=1.8; carbPct=42; fatPct=28;
    tipText='Maintenance mode — eating at your TDEE. Great for body recomposition with consistent training.';
  }
  const proteinG = Math.round(weight * proteinMultiplier);
  const fatG     = Math.round((targetKcal * fatPct / 100) / 9);
  const carbG    = Math.round((targetKcal - proteinG*4 - fatG*9) / 4);
  const total    = proteinG*4 + fatG*9 + carbG*4;
  const pPct = Math.round(proteinG*4/total*100);
  const cPct = Math.round(carbG*4/total*100);
  const fPct = Math.round(fatG*9/total*100);
  document.getElementById('res-bmr').textContent    = Math.round(bmr) + ' kcal';
  document.getElementById('res-tdee').textContent   = Math.round(tdee) + ' kcal';
  document.getElementById('res-target').textContent = Math.round(targetKcal) + ' kcal';
  document.getElementById('res-kcal').textContent   = Math.round(targetKcal);
  document.getElementById('res-protein').textContent = proteinG + 'g';
  document.getElementById('res-carbs').textContent   = carbG + 'g';
  document.getElementById('res-fat').textContent     = fatG + 'g';
  document.getElementById('bar-protein').style.width = pPct + '%';
  document.getElementById('bar-carbs').style.width   = cPct + '%';
  document.getElementById('bar-fat').style.width     = fPct + '%';
  document.getElementById('pct-protein').textContent = pPct + '%';
  document.getElementById('pct-carbs').textContent   = cPct + '%';
  document.getElementById('pct-fat').textContent     = fPct + '%';
  document.getElementById('goal-tip-text').textContent = tipText;
  document.getElementById('per-meal-fields').innerHTML = `
    <div><div class="f-label">Calories / meal</div><div class="f-val">${Math.round(targetKcal/4)} kcal</div></div>
    <div><div class="f-label">Protein / meal</div><div class="f-val">${Math.round(proteinG/4)}g</div></div>
    <div><div class="f-label">Carbs / meal</div><div class="f-val">${Math.round(carbG/4)}g</div></div>
    <div><div class="f-label">Fat / meal</div><div class="f-val">${Math.round(fatG/4)}g</div></div>`;
  document.getElementById('calc-results').classList.add('visible');
  document.getElementById('calc-results').scrollIntoView({ behavior:'smooth', block:'start' });
}

// ══════════════════════════════════════
// LANGUAGE / i18n
// ══════════════════════════════════════
const I18N = {
  en: {
    subtitle:'Wellness · Recipes · Calculator',
    tab_wellness:'Wellness', tab_recipes:'Recipes', tab_calculator:'Calculator',
    dietitian_title:'Dietitian Plan — Gal · March 2026',
    dietitian_body:'Personal meal plan based on your clinical dietitian\'s guidelines. Carb counting protocol active. Max 1 fat serving per meal. Aerobic exercise 2–3×/week recommended.',
    legend_protein:'PROTEIN', legend_carbs:'CARBS', legend_fat:'FAT', legend_veg:'VEGETABLES',
    day_sun:'Sun', day_mon:'Mon', day_tue:'Tue', day_wed:'Wed', day_thu:'Thu', day_fri:'Fri', day_sat:'Sat',
    total_calories:'Total Calories', total_protein:'Protein', total_carbs:'Carbs', total_fat:'Fat',
    kcal_day:'kcal / day', grams:'grams',
    label_protein:'Protein', label_carbs:'Carbs', label_fat:'Fat', label_vegetables:'Vegetables', label_timing:'Timing',
    sun_b_tag:'Breakfast · 07:30', sun_b_title:'Greek Yogurt Bowl', sun_b_kcal:'~380 kcal',
    sun_b_p_val:'Greek yogurt 3%', sun_b_p_port:'1 cup (200ml)', sun_b_c_val:'Oats + banana slices', sun_b_c_port:'3 tbsp oats + ½ banana', sun_b_v_val:'Cherry tomatoes', sun_b_v_port:'Free amount',
    sun_b_note:'Add a drizzle of honey if desired. Keep fat to max 1 serving — skip butter/oil if having yogurt.',
    sun_l_tag:'Lunch · 13:00', sun_l_title:'Grilled Chicken & Rice', sun_l_kcal:'~520 kcal',
    sun_l_p_val:'Grilled chicken breast', sun_l_p_port:'175g', sun_l_c_val:'White rice + green lentils mixed', sun_l_c_port:'5 tbsp cooked', sun_l_v_val:'Cucumber, tomato, parsley salad', sun_l_v_port:'Unlimited',
    sun_l_note:'Mix lentils into the rice — great way to add plant protein and slow the carb release. Season with olive oil (1 tsp only).',
    sun_s_tag:'Snack · 16:30', sun_s_title:'Pre-Workout Fuel', sun_s_kcal:'~200 kcal',
    sun_s_p_val:'White yogurt', sun_s_p_port:'1 cup', sun_s_c_val:'Apple (medium)', sun_s_c_port:'1 whole', sun_s_t_val:'Eat 1.5h before workout',
    sun_s_note:'If craving something sweet: keep the yogurt as your protein base, then add 4 squares of dark chocolate instead of the apple.',
    sun_d_tag:'Dinner · 19:30', sun_d_title:'Egg & Tuna Plate', sun_d_kcal:'~380 kcal',
    sun_d_p_val:'2 eggs scrambled + ½ tin tuna in water', sun_d_p_port:'2 eggs + 60g tuna', sun_d_c_val:'Whole wheat pita', sun_d_c_port:'1 small (½ pita)', sun_d_v_val:'Sliced cucumbers, radish, green onion', sun_d_v_port:'Free amount',
    sun_d_note:'Add ½ cup cottage 5% on the side if still hungry. Max 1 fat serving — use a little olive oil for eggs only.',
    mon_b_tag:'Breakfast · 07:30', mon_b_title:'Omelette & Whole Bread', mon_b_kcal:'~360 kcal',
    mon_b_p_val:'2-egg omelette', mon_b_p_port:'2 large eggs', mon_b_c_val:'Whole wheat bread', mon_b_c_port:'1 slice (30g)', mon_b_v_val:'Tomato, cucumber, herbs', mon_b_v_port:'Free amount',
    mon_b_note:'Cook the omelette with ½ tsp olive oil only. You can add a slice of white cheese inside the omelette for extra protein.',
    mon_l_tag:'Lunch · 13:00', mon_l_title:'Turkey Patties & Bulgur', mon_l_kcal:'~510 kcal',
    mon_l_p_val:'Turkey patties (homemade)', mon_l_p_port:'175g', mon_l_c_val:'Bulgur + chickpeas mixed', mon_l_c_port:'5 tbsp cooked', mon_l_v_val:'Roasted zucchini & eggplant', mon_l_v_port:'Unlimited',
    mon_l_note:'Mixing chickpeas into bulgur adds fiber and protein. Season with cumin and lemon.',
    mon_s_tag:'Snack · 16:30', mon_s_title:'Bread & Spread', mon_s_kcal:'~190 kcal',
    mon_s_c_val:'Whole wheat bread', mon_s_c_port:'1 slice', mon_s_pf_val:'Cottage 5% or peanut butter + honey', mon_s_pf_port:'2 tbsp cottage or 1 tsp PB', mon_s_t_val:'1.5h before workout',
    mon_s_note:'Peanut butter counts as your fat serving. Don\'t add extra fat elsewhere in this snack.',
    mon_d_tag:'Dinner · 19:30', mon_d_title:'Cottage & Vegetable Plate', mon_d_kcal:'~350 kcal',
    mon_d_p_val:'Cottage 5% + 1 egg soft boiled', mon_d_p_port:'½ cup + 1 egg', mon_d_c_val:'2 whole grain crackers (large)', mon_d_c_port:'2 crackers', mon_d_v_val:'Large mixed salad', mon_d_v_port:'Free amount',
    mon_d_note:'Light dinner. Add 5 natural walnuts as your fat serving if still hungry after the salad.',
    tue_b_tag:'Breakfast · 07:30', tue_b_title:'Cottage Bowl with Granola', tue_b_kcal:'~370 kcal',
    tue_b_p_val:'Cottage 5%', tue_b_p_port:'½ cup (100g)', tue_b_c_val:'Homemade granola', tue_b_c_port:'3 tbsp', tue_b_vf_val:'Cucumber + seasonal berries', tue_b_vf_port:'Free veg + ½ cup berries',
    tue_b_note:'Prefer homemade granola — store-bought often has hidden sugar and fat.',
    tue_l_tag:'Lunch · 13:00', tue_l_title:'Salmon & Quinoa', tue_l_kcal:'~540 kcal',
    tue_l_p_val:'Baked salmon fillet', tue_l_p_port:'175g', tue_l_c_val:'Quinoa + edamame', tue_l_c_port:'5 tbsp cooked quinoa', tue_l_v_val:'Steamed broccoli & cherry tomatoes', tue_l_v_port:'Unlimited',
    tue_l_note:'Salmon already has healthy fat — skip extra olive oil.',
    tue_s_tag:'Snack · 16:30', tue_s_title:'Fruit & Nuts', tue_s_kcal:'~180 kcal',
    tue_s_cf_val:'Pear or peach', tue_s_cf_port:'1 medium', tue_s_f_val:'Natural almonds', tue_s_f_port:'5 units', tue_s_t_val:'1.5h before workout',
    tue_s_note:'Simple and clean. Perfect pre-workout combo.',
    tue_d_tag:'Dinner · 19:30', tue_d_title:'Shakshuka Light', tue_d_kcal:'~360 kcal',
    tue_d_p_val:'2 eggs in tomato sauce', tue_d_p_port:'2 large eggs', tue_d_c_val:'Whole wheat pita', tue_d_c_port:'½ pita (small)', tue_d_v_val:'Tomato base + peppers + spinach', tue_d_v_port:'Unlimited in sauce',
    tue_d_note:'Make the sauce with minimal oil (½ tsp). Add ½ cup cottage on the side.',
    wed_b_tag:'Breakfast · 07:30', wed_b_title:'Oats & White Cheese Bowl', wed_b_kcal:'~360 kcal',
    wed_b_p_val:'White cheese (labneh style)', wed_b_p_port:'½ cup', wed_b_c_val:'Rolled oats (cooked)', wed_b_c_port:'3 tbsp dry = 6 tbsp cooked', wed_b_v_val:'Radish, mint, cucumber', wed_b_v_port:'Free amount',
    wed_b_note:'Savory oat bowl — unusual but very satisfying. Add za\'atar and olive oil (1 tsp).',
    wed_l_tag:'Lunch · 13:00', wed_l_title:'Beef Meatballs & Pasta', wed_l_kcal:'~530 kcal',
    wed_l_p_val:'Lean beef meatballs (baked)', wed_l_p_port:'175g', wed_l_c_val:'Whole wheat pasta + red lentils', wed_l_c_port:'5 tbsp cooked pasta', wed_l_v_val:'Tomato sauce + green salad', wed_l_v_port:'Unlimited',
    wed_l_note:'Bake meatballs — no frying. Mix a handful of cooked lentils into the pasta.',
    wed_s_tag:'Snack · 16:30', wed_s_title:'Yogurt + Fruit', wed_s_kcal:'~195 kcal',
    wed_s_p_val:'White yogurt (plain)', wed_s_p_port:'1 cup', wed_s_c_val:'Mango slices', wed_s_c_port:'½ cup (100g)', wed_s_t_val:'1.5h before workout',
    wed_s_note:'Mango is slightly higher sugar — perfect for pre-workout energy.',
    wed_d_tag:'Dinner · 19:30', wed_d_title:'Tuna Stuffed Pita', wed_d_kcal:'~370 kcal',
    wed_d_p_val:'Tuna in water + 1 egg hard boiled', wed_d_p_port:'½ tin tuna + 1 egg', wed_d_c_val:'Small whole wheat pita', wed_d_c_port:'1 small pita', wed_d_v_val:'Lettuce, tomato, cucumber, corn', wed_d_v_port:'Free amount',
    wed_d_note:'Mix tuna with ¼ avocado as your fat serving (skip the oil).',
    thu_b_tag:'Breakfast · 07:30', thu_b_title:'Yogurt Parfait', thu_b_kcal:'~375 kcal',
    thu_b_p_val:'Yogurt 3% (plain)', thu_b_p_port:'1 cup', thu_b_c_val:'Granola (homemade preferred)', thu_b_c_port:'3 tbsp', thu_b_fv_val:'Strawberries + cucumber sticks', thu_b_fv_port:'½ cup berries + free veg',
    thu_b_note:'Layer yogurt → granola → berries for texture.',
    thu_l_tag:'Lunch · 13:00', thu_l_title:'Chicken Schnitzel & Sweet Potato', thu_l_kcal:'~520 kcal',
    thu_l_p_val:'Baked chicken schnitzel', thu_l_p_port:'175g', thu_l_c_val:'Baked sweet potato + peas', thu_l_c_port:'1 medium potato', thu_l_v_val:'Israeli salad (tomato, cucumber, parsley)', thu_l_v_port:'Unlimited',
    thu_l_note:'Bake schnitzel — not fry. Coat in oat flour + spices.',
    thu_s_tag:'Snack · 16:30', thu_s_title:'Crackers & Spread', thu_s_kcal:'~185 kcal',
    thu_s_c_val:'Whole grain rice cakes or crackers', thu_s_c_port:'2 large crackers', thu_s_pf_val:'White cheese 5% + cucumber', thu_s_pf_port:'2 tbsp cheese', thu_s_t_val:'1.5h before workout',
    thu_s_note:'Simple and portable. Great to prep the night before.',
    thu_d_tag:'Dinner · 19:30', thu_d_title:'Eggs & Legume Bowl', thu_d_kcal:'~390 kcal',
    thu_d_p_val:'2 eggs (any style) + ½ cup cottage', thu_d_p_port:'2 eggs + 100g cottage', thu_d_c_val:'Hummus + pita', thu_d_c_port:'3 tbsp hummus + ½ pita', thu_d_v_val:'Roasted peppers, onion, tomato', thu_d_v_port:'Free amount',
    thu_d_note:'Hummus counts as your legume AND fat serving here.',
    fri_b_tag:'Breakfast · 08:00', fri_b_title:'Shabbat Brunch Plate', fri_b_kcal:'~400 kcal',
    fri_b_p_val:'2 soft-boiled eggs + white cheese', fri_b_p_port:'2 eggs + 2 tbsp cheese', fri_b_c_val:'Whole wheat challah slice', fri_b_c_port:'1 slice (30g)', fri_b_v_val:'Full Israeli spread', fri_b_v_port:'Free amount',
    fri_b_note:'Max 1 fat: choose between ¼ avocado, 1 tsp olive oil, or 5 olives. Pick one only.',
    fri_l_tag:'Lunch · 13:30', fri_l_title:'Fish Fillet & Couscous', fri_l_kcal:'~510 kcal',
    fri_l_p_val:'Baked sea bass or sea bream', fri_l_p_port:'175–200g', fri_l_c_val:'Whole wheat couscous + chickpeas', fri_l_c_port:'5 tbsp couscous', fri_l_v_val:'Grilled vegetables (zucchini, peppers, onion)', fri_l_v_port:'Unlimited',
    fri_l_note:'Lemon + herbs on the fish — no heavy sauce needed.',
    fri_s_tag:'Snack · 16:30', fri_s_title:'Light Fruit Snack', fri_s_kcal:'~140 kcal',
    fri_s_c_val:'Watermelon / melon', fri_s_c_port:'200g', fri_s_f_val:'5 almonds', fri_s_f_port:'5 units', fri_s_h_val:'Water / sparkling water with mint', fri_s_h_port:'2+ glasses',
    fri_s_note:'Light Friday afternoon snack. Focus on hydration.',
    fri_d_tag:'Dinner · 20:00', fri_d_title:'Shabbat Dinner (Lighter Version)', fri_d_kcal:'~420 kcal',
    fri_d_p_val:'Chicken breast / roast chicken (no skin)', fri_d_p_port:'175g', fri_d_c_val:'Rice or pita (1 carb serving)', fri_d_c_port:'4 tbsp rice or ½ pita', fri_d_v_val:'Roasted seasonal vegetables', fri_d_v_port:'Unlimited',
    fri_d_note:'Enjoy Shabbat dinner. Remove skin from chicken. Fill half the plate with vegetables first.',
    sat_b_tag:'Breakfast · 09:00', sat_b_title:'Lazy Shabbat Breakfast', sat_b_kcal:'~390 kcal',
    sat_b_p_val:'Yogurt 3% + cottage 5%', sat_b_p_port:'½ cup each', sat_b_c_val:'Oats + seasonal fruit', sat_b_c_port:'3 tbsp oats + 1 fruit', sat_b_v_val:'Sliced veggies on the side', sat_b_v_port:'Free amount',
    sat_b_note:'Saturday morning — slow and relaxed. Eat mindfully, no screens at the table.',
    sat_l_tag:'Lunch · 14:00', sat_l_title:'BBQ / Family Lunch', sat_l_kcal:'~530 kcal',
    sat_l_p_val:'Grilled meat / chicken skewers', sat_l_p_port:'175g', sat_l_c_val:'Pita or corn on the cob', sat_l_c_port:'1 small pita or 1 ear corn', sat_l_v_val:'Grilled / raw vegetables, salads', sat_l_v_port:'Unlimited',
    sat_l_note:'Social eating day — enjoy it. Fill up on salads first, then the rest.',
    sat_s_tag:'Snack · 17:00', sat_s_title:'Fruit + Natural Nuts', sat_s_kcal:'~175 kcal',
    sat_s_c_val:'Nectarine or plum', sat_s_c_port:'2–3 small fruits', sat_s_f_val:'Natural walnuts or almonds', sat_s_f_port:'5 units', sat_s_h_val:'Cold water / herbal tea', sat_s_h_port:'2+ glasses',
    sat_s_note:'Keep it light on Saturday afternoon — the lunch was likely bigger.',
    sat_d_tag:'Dinner · 20:00', sat_d_title:'Light Egg Dinner', sat_d_kcal:'~340 kcal',
    sat_d_p_val:'2 eggs + ½ cup cottage', sat_d_p_port:'2 eggs + 100g', sat_d_c_val:'1–2 whole grain crackers', sat_d_c_port:'2 crackers', sat_d_v_val:'Whatever is in the fridge', sat_d_v_port:'Free amount',
    sat_d_note:'End of the week — keep dinner light and simple. Hydrate well.',
    recipe_creami:'Ninja Creami — Healthy Ice Cream', recipe_passover:'Passover Recipes',
    food_placeholder:'e.g. 1 hamburger, 200g fries and 1 coke zero 500ml',
    footer_text:'Wellness · Recipes · Calculator · © 2026',
  },
  he: {
    subtitle:'בריאות · מתכונים · מחשבון',
    tab_wellness:'בריאות', tab_recipes:'מתכונים', tab_calculator:'מחשבון',
    dietitian_title:'תפריט דיאטנית — גל · מרץ 2026',
    dietitian_body:'תפריט אישי על בסיס הנחיות הדיאטנית הקלינית שלך. ספירת פחמימות פעילה. מקסימום מנת שומן אחת לארוחה. פעילות אירובית 2–3 פעמים בשבוע מומלצת.',
    legend_protein:'חלבון', legend_carbs:'פחמימות', legend_fat:'שומן', legend_veg:'ירקות',
    day_sun:'ראשון', day_mon:'שני', day_tue:'שלישי', day_wed:'רביעי', day_thu:'חמישי', day_fri:'שישי', day_sat:'שבת',
    total_calories:'סה״כ קלוריות', total_protein:'חלבון', total_carbs:'פחמימות', total_fat:'שומן',
    kcal_day:'קק״ל / יום', grams:'גרם',
    label_protein:'חלבון', label_carbs:'פחמימות', label_fat:'שומן', label_vegetables:'ירקות', label_timing:'תזמון',
    sun_b_tag:'ארוחת בוקר · 07:30', sun_b_title:'קערת יוגורט יווני', sun_b_kcal:'~380 קק״ל',
    sun_b_p_val:'יוגורט יווני 3%', sun_b_p_port:'כוס אחת (200 מ״ל)', sun_b_c_val:'שיבולת שועל + פרוסות בננה', sun_b_c_port:'3 כפות שיבולת + חצי בננה', sun_b_v_val:'עגבניות שרי', sun_b_v_port:'כמות חופשית',
    sun_b_note:'ניתן להוסיף מעט דבש. מקסימום מנת שומן אחת — דלג על חמאה/שמן אם אוכל יוגורט.',
    sun_l_tag:'ארוחת צהריים · 13:00', sun_l_title:'עוף צלוי עם אורז', sun_l_kcal:'~520 קק״ל',
    sun_l_p_val:'חזה עוף על הגריל', sun_l_p_port:'175 גרם', sun_l_c_val:'אורז לבן + עדשים ירוקות', sun_l_c_port:'5 כפות מבושל', sun_l_v_val:'סלט מלפפון, עגבנייה ופטרוזיליה', sun_l_v_port:'ללא הגבלה',
    sun_l_note:'ערבב עדשים לתוך האורז. שמן זית (כפית אחת בלבד).',
    sun_s_tag:'ביניים · 16:30', sun_s_title:'דלק לפני אימון', sun_s_kcal:'~200 קק״ל',
    sun_s_p_val:'יוגורט לבן', sun_s_p_port:'כוס אחת', sun_s_c_val:'תפוח (בינוני)', sun_s_c_port:'שלם אחד', sun_s_t_val:'לאכול שעה וחצי לפני אימון',
    sun_s_note:'אם מתחשק מתוק: שמור על היוגורט, הוסף 4 קוביות שוקולד מריר במקום התפוח.',
    sun_d_tag:'ארוחת ערב · 19:30', sun_d_title:'צלחת ביצה וטונה', sun_d_kcal:'~380 קק״ל',
    sun_d_p_val:'2 ביצים מקושקשות + חצי פחית טונה', sun_d_p_port:'2 ביצים + 60 גרם טונה', sun_d_c_val:'פיתה מחיטה מלאה', sun_d_c_port:'קטנה (חצי פיתה)', sun_d_v_val:'מלפפון, צנונית, בצל ירוק', sun_d_v_port:'כמות חופשית',
    sun_d_note:'הוסף חצי גביע קוטג׳ 5% אם עדיין רעב. שמן זית לביצים בלבד.',
    mon_b_tag:'ארוחת בוקר · 07:30', mon_b_title:'חביתה עם לחם מלא', mon_b_kcal:'~360 קק״ל',
    mon_b_p_val:'חביתת 2 ביצים', mon_b_p_port:'2 ביצים גדולות', mon_b_c_val:'לחם חיטה מלאה', mon_b_c_port:'פרוסה אחת (30 גרם)', mon_b_v_val:'עגבנייה, מלפפון, עשבי תיבול', mon_b_v_port:'כמות חופשית',
    mon_b_note:'חצי כפית שמן זית בלבד. ניתן להוסיף גבינה לבנה לחביתה לחלבון נוסף.',
    mon_l_tag:'ארוחת צהריים · 13:00', mon_l_title:'קציצות הודו עם בורגול', mon_l_kcal:'~510 קק״ל',
    mon_l_p_val:'קציצות הודו (ביתיות)', mon_l_p_port:'175 גרם', mon_l_c_val:'בורגול + חומוס מעורב', mon_l_c_port:'5 כפות מבושל', mon_l_v_val:'קישואים וחציל צלויים', mon_l_v_port:'ללא הגבלה',
    mon_l_note:'ערבוב חומוס לבורגול מוסיף סיבים וחלבון. תבל עם כמון ולימון.',
    mon_s_tag:'ביניים · 16:30', mon_s_title:'לחם עם ממרח', mon_s_kcal:'~190 קק״ל',
    mon_s_c_val:'לחם חיטה מלאה', mon_s_c_port:'פרוסה אחת', mon_s_pf_val:'קוטג׳ 5% או חמאת בוטנים + דבש', mon_s_pf_port:'2 כפות קוטג׳ או כפית חמאת בוטנים', mon_s_t_val:'שעה וחצי לפני אימון',
    mon_s_note:'חמאת בוטנים = מנת שומן. אל תוסיף שומן נוסף בנשנוש.',
    mon_d_tag:'ארוחת ערב · 19:30', mon_d_title:'קוטג׳ עם ירקות', mon_d_kcal:'~350 קק״ל',
    mon_d_p_val:'קוטג׳ 5% + ביצה קשה', mon_d_p_port:'חצי גביע + ביצה', mon_d_c_val:'2 קרקרים גדולים מדגן מלא', mon_d_c_port:'2 קרקרים', mon_d_v_val:'סלט מעורב גדול', mon_d_v_port:'כמות חופשית',
    mon_d_note:'ארוחה קלה. הוסף 5 אגוזים טבעיים כמנת שומן אם עדיין רעב אחרי הסלט.',
    tue_b_tag:'ארוחת בוקר · 07:30', tue_b_title:'קערת קוטג׳ עם גרנולה', tue_b_kcal:'~370 קק״ל',
    tue_b_p_val:'קוטג׳ 5%', tue_b_p_port:'חצי גביע (100 גרם)', tue_b_c_val:'גרנולה ביתית', tue_b_c_port:'3 כפות', tue_b_vf_val:'מלפפון + פירות יער עונתיים', tue_b_vf_port:'ירק חופשי + חצי כוס פירות יער',
    tue_b_note:'עדיף גרנולה ביתית — קנויה לרוב עם סוכר ושומן נסתרים.',
    tue_l_tag:'ארוחת צהריים · 13:00', tue_l_title:'סלמון עם קינואה', tue_l_kcal:'~540 קק״ל',
    tue_l_p_val:'פילה סלמון בתנור', tue_l_p_port:'175 גרם', tue_l_c_val:'קינואה + אדממה', tue_l_c_port:'5 כפות קינואה מבושלת', tue_l_v_val:'ברוקולי מאודה + עגבניות שרי', tue_l_v_port:'ללא הגבלה',
    tue_l_note:'לסלמון יש שומן בריא — דלג על שמן זית נוסף.',
    tue_s_tag:'ביניים · 16:30', tue_s_title:'פרי ואגוזים', tue_s_kcal:'~180 קק״ל',
    tue_s_cf_val:'אגס או אפרסק', tue_s_cf_port:'בינוני אחד', tue_s_f_val:'שקדים טבעיים', tue_s_f_port:'5 יחידות', tue_s_t_val:'שעה וחצי לפני אימון',
    tue_s_note:'פשוט ונקי. שילוב מעולה לפני אימון.',
    tue_d_tag:'ארוחת ערב · 19:30', tue_d_title:'שקשוקה קלה', tue_d_kcal:'~360 קק״ל',
    tue_d_p_val:'2 ביצים ברוטב עגבניות', tue_d_p_port:'2 ביצים גדולות', tue_d_c_val:'פיתה מחיטה מלאה', tue_d_c_port:'חצי פיתה (קטנה)', tue_d_v_val:'בסיס עגבניות + פלפלים + תרד', tue_d_v_port:'ללא הגבלה ברוטב',
    tue_d_note:'הכן את הרוטב עם מינימום שמן (חצי כפית). הוסף חצי גביע קוטג׳ בצד.',
    wed_b_tag:'ארוחת בוקר · 07:30', wed_b_title:'קערת שיבולת שועל עם גבינה לבנה', wed_b_kcal:'~360 קק״ל',
    wed_b_p_val:'גבינה לבנה', wed_b_p_port:'חצי גביע', wed_b_c_val:'שיבולת שועל מבושלת', wed_b_c_port:'3 כפות יבש = 6 כפות מבושל', wed_b_v_val:'צנונית, נענע, מלפפון', wed_b_v_port:'כמות חופשית',
    wed_b_note:'קערת שיבולת שועל מלוחה — יוצאת דופן אך משביעה מאוד. הוסף זעתר ושמן זית (כפית).',
    wed_l_tag:'ארוחת צהריים · 13:00', wed_l_title:'קציצות בקר עם פסטה', wed_l_kcal:'~530 קק״ל',
    wed_l_p_val:'קציצות בקר רזה (בתנור)', wed_l_p_port:'175 גרם', wed_l_c_val:'פסטה מחיטה מלאה + עדשים אדומות', wed_l_c_port:'5 כפות פסטה מבושלת', wed_l_v_val:'רוטב עגבניות + סלט ירוק', wed_l_v_port:'ללא הגבלה',
    wed_l_note:'קציצות בתנור — לא לטגן. ערבב עדשים מבושלות לתוך הפסטה.',
    wed_s_tag:'ביניים · 16:30', wed_s_title:'יוגורט + פרי', wed_s_kcal:'~195 קק״ל',
    wed_s_p_val:'יוגורט לבן (פשוט)', wed_s_p_port:'כוס אחת', wed_s_c_val:'פרוסות מנגו', wed_s_c_port:'חצי כוס (100 גרם)', wed_s_t_val:'שעה וחצי לפני אימון',
    wed_s_note:'מנגו עם סוכר מעט גבוה — מעולה לאנרגיה לפני אימון.',
    wed_d_tag:'ארוחת ערב · 19:30', wed_d_title:'פיתה ממולאת טונה', wed_d_kcal:'~370 קק״ל',
    wed_d_p_val:'טונה במים + ביצה קשה', wed_d_p_port:'חצי פחית טונה + ביצה', wed_d_c_val:'פיתה קטנה מחיטה מלאה', wed_d_c_port:'פיתה קטנה אחת', wed_d_v_val:'חסה, עגבנייה, מלפפון, תירס', wed_d_v_port:'כמות חופשית',
    wed_d_note:'ערבב טונה עם רבע אבוקדו כמנת שומן. תבל עם לימון, מלח ופלפל שחור.',
    thu_b_tag:'ארוחת בוקר · 07:30', thu_b_title:'פרפה יוגורט', thu_b_kcal:'~375 קק״ל',
    thu_b_p_val:'יוגורט 3% (פשוט)', thu_b_p_port:'כוס אחת', thu_b_c_val:'גרנולה (עדיף ביתית)', thu_b_c_port:'3 כפות', thu_b_fv_val:'תות + מקלות מלפפון', thu_b_fv_port:'חצי כוס פירות יער + ירק חופשי',
    thu_b_note:'שכב: יוגורט → גרנולה → פירות יער לטקסטורה מעולה.',
    thu_l_tag:'ארוחת צהריים · 13:00', thu_l_title:'שניצל עוף עם בטטה', thu_l_kcal:'~520 קק״ל',
    thu_l_p_val:'שניצל עוף בתנור', thu_l_p_port:'175 גרם', thu_l_c_val:'בטטה בתנור + אפונה', thu_l_c_port:'בטטה בינונית', thu_l_v_val:'סלט ישראלי (עגבנייה, מלפפון, פטרוזיליה)', thu_l_v_port:'ללא הגבלה',
    thu_l_note:'שניצל בתנור — לא לטגן. ציפוי בקמח שיבולת שועל + תבלינים.',
    thu_s_tag:'ביניים · 16:30', thu_s_title:'קרקרים עם ממרח', thu_s_kcal:'~185 קק״ל',
    thu_s_c_val:'קרקרים מאורז/דגן מלא', thu_s_c_port:'2 קרקרים גדולים', thu_s_pf_val:'גבינה לבנה 5% + מלפפון', thu_s_pf_port:'2 כפות גבינה', thu_s_t_val:'שעה וחצי לפני אימון',
    thu_s_note:'פשוט ונייד. מצוין להכין ערב לפני.',
    thu_d_tag:'ארוחת ערב · 19:30', thu_d_title:'ביצים עם קטניות', thu_d_kcal:'~390 קק״ל',
    thu_d_p_val:'2 ביצים + חצי גביע קוטג׳', thu_d_p_port:'2 ביצים + 100 גרם קוטג׳', thu_d_c_val:'חומוס + פיתה', thu_d_c_port:'3 כפות חומוס + חצי פיתה', thu_d_v_val:'פלפלים, בצל, עגבנייה צלויים', thu_d_v_port:'כמות חופשית',
    thu_d_note:'החומוס = קטנייה וגם מנת שומן. אל תוסיף שמן/טחינה מעל.',
    fri_b_tag:'ארוחת בוקר · 08:00', fri_b_title:'צלחת בראנץ׳ שבתי', fri_b_kcal:'~400 קק״ל',
    fri_b_p_val:'2 ביצים רכות + גבינה לבנה', fri_b_p_port:'2 ביצים + 2 כפות גבינה', fri_b_c_val:'פרוסת חלה מחיטה מלאה', fri_b_c_port:'פרוסה (30 גרם)', fri_b_v_val:'מגוון ישראלי', fri_b_v_port:'כמות חופשית',
    fri_b_note:'מקסימום שומן אחד: רבע אבוקדו, כפית שמן זית, או 5 זיתים. בחר אחד בלבד.',
    fri_l_tag:'ארוחת צהריים · 13:30', fri_l_title:'פילה דג עם קוסקוס', fri_l_kcal:'~510 קק״ל',
    fri_l_p_val:'לברק או דנית בתנור', fri_l_p_port:'175–200 גרם', fri_l_c_val:'קוסקוס מחיטה מלאה + חומוס', fri_l_c_port:'5 כפות קוסקוס', fri_l_v_val:'ירקות על האש (קישוא, פלפל, בצל)', fri_l_v_port:'ללא הגבלה',
    fri_l_note:'לימון + עשבי תיבול על הדג — לא צריך רוטב כבד.',
    fri_s_tag:'ביניים · 16:30', fri_s_title:'נשנוש פרי קל', fri_s_kcal:'~140 קק״ל',
    fri_s_c_val:'אבטיח / מלון', fri_s_c_port:'200 גרם', fri_s_f_val:'5 שקדים', fri_s_f_port:'5 יחידות', fri_s_h_val:'מים / מים קלים עם נענע', fri_s_h_port:'2+ כוסות',
    fri_s_note:'נשנוש קל אחר הצהריים. יום מנוחה — תמקד בהידרציה.',
    fri_d_tag:'ארוחת ערב · 20:00', fri_d_title:'ארוחת שבת (גרסה קלה)', fri_d_kcal:'~420 קק״ל',
    fri_d_p_val:'חזה עוף / עוף בתנור (ללא עור)', fri_d_p_port:'175 גרם', fri_d_c_val:'אורז או פיתה (מנת פחמימה אחת)', fri_d_c_port:'4 כפות אורז או חצי פיתה', fri_d_v_val:'ירקות עונתיים צלויים', fri_d_v_port:'ללא הגבלה',
    fri_d_note:'תהנה מארוחת שבת. הסר עור מהעוף. מלא חצי הצלחת בירקות קודם.',
    sat_b_tag:'ארוחת בוקר · 09:00', sat_b_title:'בוקר שבת עצלן', sat_b_kcal:'~390 קק״ל',
    sat_b_p_val:'יוגורט 3% + קוטג׳ 5%', sat_b_p_port:'חצי גביע מכל אחד', sat_b_c_val:'שיבולת שועל + פרי עונתי', sat_b_c_port:'3 כפות שיבולת + פרי', sat_b_v_val:'ירקות פרוסים בצד', sat_b_v_port:'כמות חופשית',
    sat_b_note:'בוקר שבת — איטי ורגוע. אוכלים בכיף, בלי מסכים על השולחן.',
    sat_l_tag:'ארוחת צהריים · 14:00', sat_l_title:'ברביקיו / ארוחת משפחה', sat_l_kcal:'~530 קק״ל',
    sat_l_p_val:'בשר צלוי / שיפודי עוף', sat_l_p_port:'175 גרם', sat_l_c_val:'פיתה או תירס', sat_l_c_port:'פיתה קטנה או קלח תירס', sat_l_v_val:'ירקות על האש / חיים, סלטים', sat_l_v_port:'ללא הגבלה',
    sat_l_note:'יום אכילה חברתי — תהנה. מלא את הצלחת בסלטים קודם.',
    sat_s_tag:'ביניים · 17:00', sat_s_title:'פרי + אגוזים טבעיים', sat_s_kcal:'~175 קק״ל',
    sat_s_c_val:'נקטרינה או שזיף', sat_s_c_port:'2–3 פירות קטנים', sat_s_f_val:'אגוזים טבעיים או שקדים', sat_s_f_port:'5 יחידות', sat_s_h_val:'מים קרים / תה צמחים', sat_s_h_port:'2+ כוסות',
    sat_s_note:'שמור על קלות אחר הצהריים — ארוחת הצהריים הייתה כנראה גדולה יותר.',
    sat_d_tag:'ארוחת ערב · 20:00', sat_d_title:'ארוחת ערב קלה עם ביצים', sat_d_kcal:'~340 קק״ל',
    sat_d_p_val:'2 ביצים + חצי גביע קוטג׳', sat_d_p_port:'2 ביצים + 100 גרם', sat_d_c_val:'1–2 קרקרים מדגן מלא', sat_d_c_port:'2 קרקרים', sat_d_v_val:'מה שיש במקרר', sat_d_v_port:'כמות חופשית',
    sat_d_note:'סוף השבוע — ארוחת ערב קלה ופשוטה. שתה הרבה מים.',
    recipe_creami:'Ninja Creami — גלידה בריאה', recipe_passover:'מתכוני פסח',
    food_placeholder:'למשל: המבורגר אחד, 200 גרם צ׳יפס וקולה זירו 500 מ״ל',
    footer_text:'בריאות · מתכונים · מחשבון · © 2026',
  }
};

// ── APPLY LANGUAGE ──
let currentLang = 'en';

function applyLang(lang) {
  currentLang = lang;
  try { localStorage.setItem('cg_lang', lang); } catch(e) {}

  const T = I18N[lang];
  const isHe = lang === 'he';

  document.documentElement.lang = lang;
  document.documentElement.dir  = isHe ? 'rtl' : 'ltr';
  document.body.style.fontFamily = isHe
    ? "'Heebo','IBM Plex Sans',sans-serif"
    : "'IBM Plex Sans',sans-serif";

  // Translate all [data-i18n] elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if (T[k] !== undefined) el.textContent = T[k];
  });

  // Lang button text
  const btn = document.getElementById('lang-btn');
  if (btn) btn.textContent = isHe ? 'EN' : 'עב';

  // Food log textarea placeholder
  const ta = document.getElementById('food-text-input');
  if (ta) ta.placeholder = T.food_placeholder;

  // Recipe section labels (no data-i18n, use class)
  const rLabels = document.querySelectorAll('.recipe-section-label');
  if (rLabels[0]) rLabels[0].textContent = T.recipe_creami;
  if (rLabels[1]) rLabels[1].textContent = T.recipe_passover;

  // Footer
  const footer = document.querySelector('footer span[data-i18n="footer_text"]');
  if (footer) footer.textContent = T.footer_text;
}

function toggleLang() {
  applyLang(currentLang === 'en' ? 'he' : 'en');
}

// Init on load
(function init() {
  let saved = 'en';
  try { saved = localStorage.getItem('cg_lang') || 'en'; } catch(e) {}
  applyLang(saved);
})();
