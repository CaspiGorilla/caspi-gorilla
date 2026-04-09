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

// ── TABS & DAYS ──
let activeDay = 'sun';

const DAY_NAMES = { sun:'Sunday', mon:'Monday', tue:'Tuesday', wed:'Wednesday', thu:'Thursday', fri:'Friday', sat:'Saturday' };

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
  activeDay = name;
}

async function regenerateDay() {
  const btn = document.getElementById('regen-btn');
  const icon = document.getElementById('regen-icon');
  const panel = document.getElementById('day-' + activeDay);
  if (!panel) return;

  // Spin icon + disable button
  btn.disabled = true;
  btn.style.opacity = '0.6';
  let spinning = true;
  let deg = 0;
  const spinInterval = setInterval(() => {
    deg += 20;
    icon.style.transform = `rotate(${deg}deg)`;
  }, 40);

  // Overlay the panel with a loading state
  const mealBlocks = panel.querySelectorAll('.meal-block');
  mealBlocks.forEach(b => { b.style.opacity = '0.35'; b.style.pointerEvents = 'none'; });

  try {
    const response = await fetch('/.netlify/functions/generate-meal', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ day: DAY_NAMES[activeDay] })
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'Function error');

    const { totals, meals } = data;
    if (!meals || meals.length === 0) throw new Error('No meals returned');

    // Update totals bar
    const totalsEl = panel.querySelector('.day-totals');
    if (totalsEl && totals) {
      totalsEl.innerHTML = `
        <div class="dt-card dt-kcal"><div class="dt-label">Total Calories</div><div class="dt-value">${totals.kcal}</div><div class="dt-unit">kcal / day</div></div>
        <div class="dt-card dt-protein"><div class="dt-label">Protein</div><div class="dt-value">${totals.protein}g</div><div class="dt-unit">grams</div></div>
        <div class="dt-card dt-carbs"><div class="dt-label">Carbs</div><div class="dt-value">${totals.carbs}g</div><div class="dt-unit">grams</div></div>
        <div class="dt-card dt-fat"><div class="dt-label">Fat</div><div class="dt-value">${totals.fat}g</div><div class="dt-unit">grams</div></div>`;
    }

    // Replace meal blocks
    const mealTypes = { breakfast:'', lunch:'', snack:'snack', dinner:'' };
    mealBlocks.forEach(b => b.remove());

    meals.forEach(meal => {
      const isSnack = meal.type === 'snack';
      const tagClass = isSnack ? 'meal-time-tag snack' : 'meal-time-tag';
      const componentsHTML = (meal.components || []).map(c => `
        <div class="meal-component">
          <div class="mc-label">${c.label}</div>
          <div class="mc-value">${c.value}</div>
          <div class="mc-portion">${c.portion}</div>
        </div>`).join('');

      const block = document.createElement('div');
      block.className = 'meal-block';
      block.style.animation = 'fadeInMeal 0.4s ease both';
      block.innerHTML = `
        <div class="meal-header">
          <span class="${tagClass}">${meal.type.charAt(0).toUpperCase()+meal.type.slice(1)} · ${meal.time}</span>
          <span class="meal-title">${meal.title}</span>
          <span class="meal-kcal">${meal.kcal}</span>
        </div>
        <div class="meal-body">
          ${componentsHTML}
          <div class="meal-note">${meal.note}</div>
        </div>`;
      panel.appendChild(block);
    });

  } catch (e) {
    // Restore on error
    mealBlocks.forEach(b => { b.style.opacity = '1'; b.style.pointerEvents = ''; });
    alert('Could not generate new meals. Please try again.');
    console.error(e);
  } finally {
    clearInterval(spinInterval);
    icon.style.transform = 'rotate(0deg)';
    btn.disabled = false;
    btn.style.opacity = '1';
  }
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
    tipText='For fat loss, you\'re eating ~400 kcal below your TDEE. Protein is set high (2.2g/kg) to protect muscle mass. Keep carbs around workouts and stay consistent with your deficit.';
  } else if (goal === 'gain') {
    targetKcal=tdee+300; proteinMultiplier=2.0; carbPct=45; fatPct=25;
    tipText='For muscle gain, you\'re eating ~300 kcal above TDEE (lean bulk). Protein at 2.0g/kg supports hypertrophy. Prioritize carbs around your training sessions for optimal performance.';
  } else {
    targetKcal=tdee; proteinMultiplier=1.8; carbPct=42; fatPct=28;
    tipText='Maintenance mode — eating at your TDEE. Great for body recomposition with consistent training. This balance supports energy, recovery, and overall health.';
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

// ── CHAWZI ──
let selectedGroups = 2;
const GROUP_COLORS = ['#4caf7d','#378add','#c89650','#e24b4a','#9b59b6'];
const GROUP_LABELS = ['Group 1','Group 2','Group 3','Group 4','Group 5'];

function selectGroups(n, btn) {
  selectedGroups = n;
  document.querySelectorAll('.group-num-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function addNameField() {
  const container = document.getElementById('names-inputs');
  const rows = container.querySelectorAll('.name-row');
  if (rows.length >= 10) return;
  const idx = rows.length + 1;
  const div = document.createElement('div');
  div.className = 'name-row';
  div.style.cssText = 'display:flex; gap:8px; align-items:center;';
  div.innerHTML = `<input class="calc-input name-input" type="text" placeholder="Name ${idx}" maxlength="30" style="flex:1;" onkeydown="handleNameKey(event,this)">`;
  container.appendChild(div);
  div.querySelector('input').focus();
}

function handleNameKey(e, input) {
  if (e.key === 'Enter') {
    const container = document.getElementById('names-inputs');
    const rows = container.querySelectorAll('.name-row');
    const inputs = container.querySelectorAll('.name-input');
    const idx = Array.from(inputs).indexOf(input);
    if (idx === inputs.length - 1 && rows.length < 10) {
      addNameField();
    } else if (idx < inputs.length - 1) {
      inputs[idx + 1].focus();
    }
  }
}

function splitGroups() {
  const inputs = document.querySelectorAll('.name-input');
  const names = Array.from(inputs).map(i => i.value.trim()).filter(n => n.length > 0);

  if (names.length < 2) {
    alert('Please enter at least 2 names.');
    return;
  }

  if (selectedGroups > names.length) {
    alert(`You have ${names.length} names but requested ${selectedGroups} groups. Please add more names or choose fewer groups.`);
    return;
  }

  // Shuffle names randomly
  const shuffled = [...names].sort(() => Math.random() - 0.5);

  // Split into groups
  const groups = Array.from({ length: selectedGroups }, () => []);
  shuffled.forEach((name, i) => groups[i % selectedGroups].push(name));

  // Render results
  const results = document.getElementById('chawzi-results');
  results.style.display = 'block';
  results.innerHTML = `
    <div class="card" style="margin-bottom:0;">
      <div class="card-title" style="margin-bottom:16px;">
        Result <span class="badge">${names.length} PLAYERS · ${selectedGroups} GROUPS</span>
      </div>
      <div class="chawzi-grid">
        ${groups.map((group, gi) => `
          <div class="group-card" style="animation-delay:${gi * 0.08}s; border-top: 3px solid ${GROUP_COLORS[gi]};">
            <div class="group-card-title" style="color:${GROUP_COLORS[gi]};">${GROUP_LABELS[gi]}</div>
            ${group.map(name => `<div class="group-name" style="border-left-color:${GROUP_COLORS[gi]};">${name}</div>`).join('')}
          </div>`).join('')}
      </div>
      <button onclick="splitGroups()" style="margin-top:14px; font-family:'JetBrains Mono',monospace; font-size:11px; font-weight:600; letter-spacing:0.1em; text-transform:uppercase; padding:9px 18px; background:none; color:var(--text-muted); border:1px solid var(--card-border); border-radius:3px; cursor:pointer; transition:all 0.15s; width:100%;" onmouseover="this.style.borderColor='var(--green-border)'; this.style.color='var(--green)'" onmouseout="this.style.borderColor='var(--card-border)'; this.style.color='var(--text-muted)'">↻ Shuffle Again</button>
    </div>`;
  results.scrollIntoView({ behavior:'smooth', block:'start' });
}

// ── CHAWZI MODE TOGGLE ──
function setChawziMode(mode) {
  const isTouch = mode === 'touch';
  document.getElementById('chawzi-names-mode').style.display = isTouch ? 'none' : 'block';
  document.getElementById('chawzi-touch-mode').style.display = isTouch ? 'block' : 'none';
  document.getElementById('mode-names-btn').style.background = isTouch ? 'none' : 'var(--navy)';
  document.getElementById('mode-names-btn').style.color = isTouch ? 'var(--text-muted)' : 'var(--green)';
  document.getElementById('mode-touch-btn').style.background = isTouch ? 'var(--navy)' : 'none';
  document.getElementById('mode-touch-btn').style.color = isTouch ? 'var(--green)' : 'var(--text-muted)';
}

// ── TOUCH SPLITTER ──
const TOUCH_COLORS = ['#4caf7d','#378add','#e24b4a','#f0a500','#9b59b6'];
const TOUCH_NAMES  = ['Group 1','Group 2','Group 3','Group 4','Group 5'];

let touchGroups   = 2;
let activeTouches = {}; // id -> { x, y, el, assigned }
let countdownTimer = null;
let countdownValue = 3;
let countdownInterval = null;
let splitDone = false;

function selectTouchGroups(n, btn) {
  touchGroups = n;
  document.querySelectorAll('#chawzi-touch-mode .group-num-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  resetTouchpad();
}

function resetTouchpad() {
  clearCountdown();
  activeTouches = {};
  splitDone = false;
  document.getElementById('touch-svg').innerHTML = '';
  document.getElementById('touch-instruction').style.display = 'flex';
  document.getElementById('touch-countdown').style.display = 'none';
  document.getElementById('touch-reset-btn').style.display = 'none';
}

// ── TOUCH EVENTS ──
function touchStart(e) {
  e.preventDefault();
  if (splitDone) return;
  for (const t of e.changedTouches) {
    addFinger(t.identifier, t.clientX, t.clientY, e.currentTarget);
  }
  resetCountdown();
}

function touchEnd(e) {
  e.preventDefault();
  if (splitDone) return;
  // Don't remove fingers on touchend — they stay until split
  // Restart countdown only if fingers remain
  if (Object.keys(activeTouches).length > 0) {
    resetCountdown();
  } else {
    clearCountdown();
  }
}

// Desktop mouse support (one finger at a time for testing)
function mouseDown(e) {
  if (splitDone) return;
  const id = 'mouse';
  if (activeTouches[id]) return;
  addFinger(id, e.clientX, e.clientY, e.currentTarget);
  resetCountdown();
  const up = () => { document.removeEventListener('mouseup', up); };
  document.addEventListener('mouseup', up);
}

function getRelativePos(clientX, clientY, el) {
  const rect = el.getBoundingClientRect();
  return { x: clientX - rect.left, y: clientY - rect.top };
}

function addFinger(id, clientX, clientY, padEl) {
  const svg = document.getElementById('touch-svg');
  const { x, y } = getRelativePos(clientX, clientY, padEl);

  // Hide instruction after first touch
  document.getElementById('touch-instruction').style.display = 'none';

  // Create circle
  const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');

  const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  circle.setAttribute('cx', x);
  circle.setAttribute('cy', y);
  circle.setAttribute('r', '36');
  circle.setAttribute('fill', 'rgba(255,255,255,0.15)');
  circle.setAttribute('stroke', 'rgba(255,255,255,0.6)');
  circle.setAttribute('stroke-width', '2');
  circle.style.transition = 'all 0.4s ease';

  // Pulse ring
  const pulse = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  pulse.setAttribute('cx', x);
  pulse.setAttribute('cy', y);
  pulse.setAttribute('r', '36');
  pulse.setAttribute('fill', 'none');
  pulse.setAttribute('stroke', 'rgba(255,255,255,0.3)');
  pulse.setAttribute('stroke-width', '2');
  pulse.style.animation = 'touchPulse 1.2s ease-out infinite';

  g.appendChild(pulse);
  g.appendChild(circle);
  svg.appendChild(g);

  activeTouches[id] = { x, y, g, circle, pulse };
}

function resetCountdown() {
  clearCountdown();
  if (Object.keys(activeTouches).length === 0) return;
  countdownValue = 3;
  countdownTimer = setTimeout(() => startCountdown(), 3000);
}

function clearCountdown() {
  if (countdownTimer) { clearTimeout(countdownTimer); countdownTimer = null; }
  if (countdownInterval) { clearInterval(countdownInterval); countdownInterval = null; }
  document.getElementById('touch-countdown').style.display = 'none';
}

function startCountdown() {
  const fingers = Object.keys(activeTouches).length;
  if (fingers === 0) return;

  countdownValue = 3;
  const cdEl = document.getElementById('touch-countdown');
  const numEl = document.getElementById('countdown-num');
  cdEl.style.display = 'flex';
  numEl.textContent = countdownValue;

  countdownInterval = setInterval(() => {
    countdownValue--;
    if (countdownValue <= 0) {
      clearInterval(countdownInterval);
      cdEl.style.display = 'none';
      revealGroups();
    } else {
      numEl.textContent = countdownValue;
    }
  }, 1000);
}

function revealGroups() {
  splitDone = true;
  const ids = Object.keys(activeTouches);
  const shuffled = [...ids].sort(() => Math.random() - 0.5);

  // Assign groups
  const groupAssignments = {};
  shuffled.forEach((id, i) => {
    groupAssignments[id] = i % touchGroups;
  });

  // Animate circles to group colors
  ids.forEach(id => {
    const touch = activeTouches[id];
    const groupIdx = groupAssignments[id];
    const color = TOUCH_COLORS[groupIdx];
    const label = TOUCH_NAMES[groupIdx];

    // Color the circle
    touch.circle.style.transition = 'all 0.5s ease';
    touch.circle.setAttribute('fill', color);
    touch.circle.setAttribute('stroke', color);
    touch.circle.setAttribute('r', '48');
    touch.pulse.style.display = 'none';

    // Add group label text
    const svg = document.getElementById('touch-svg');
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', touch.x);
    text.setAttribute('y', touch.y + 6);
    text.setAttribute('text-anchor', 'middle');
    text.setAttribute('fill', 'white');
    text.setAttribute('font-size', '13');
    text.setAttribute('font-weight', '700');
    text.setAttribute('font-family', 'JetBrains Mono, monospace');
    text.style.pointerEvents = 'none';
    text.style.animation = 'fadeInText 0.4s ease 0.3s both';
    text.textContent = label;
    svg.appendChild(text);
  });

  // Show reset button
  setTimeout(() => {
    document.getElementById('touch-reset-btn').style.display = 'block';
  }, 600);
}
