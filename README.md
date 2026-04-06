# Caspi Gorilla 🦍

Personal wellness, padel, tennis & recipe site.

## Project Structure

```
caspi-gorilla/
├── index.html                        ← Main site
├── style.css                         ← All styles
├── script.js                         ← All JS (tabs, calculator, recipes)
├── netlify.toml                      ← Netlify config
├── netlify/
│   └── functions/
│       └── analyze-food.js           ← Serverless function (AI food log)
└── README.md
```

---

## Deploy to Netlify (one time setup)

### Step 1 — Create GitHub repo
1. Go to github.com → New repository
2. Name it `caspi-gorilla`, set to Public
3. Upload all these files (maintain the folder structure)

### Step 2 — Connect to Netlify
1. Go to app.netlify.com → Add new site → Import from Git
2. Choose GitHub → select `caspi-gorilla`
3. Build settings are auto-detected from `netlify.toml`
4. Click **Deploy**

### Step 3 — Add your Anthropic API Key (for Food Log AI)
1. Get a free API key at console.anthropic.com
2. In Netlify: Site Settings → Environment Variables
3. Add variable:
   - Key:   `ANTHROPIC_API_KEY`
   - Value: `sk-ant-...your key...`
4. Redeploy the site (Deploys → Trigger deploy)

---

## Updating the site

Every time you update files with Claude:
1. Download the new file(s)
2. Go to your GitHub repo
3. Upload/replace the file(s)
4. Netlify auto-deploys in ~30 seconds ✓

---

## Cost

| Service         | Cost          |
|-----------------|---------------|
| GitHub          | Free          |
| Netlify hosting | Free          |
| Netlify functions | Free (125k calls/month) |
| Custom domain   | ~$10/year (optional) |
| Anthropic API   | ~$0.01 per food log query |
