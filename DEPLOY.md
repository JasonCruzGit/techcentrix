# Deploy TechCentrix to GitHub and Vercel

## Quick status

- **GitHub**: Code is pushed to **https://github.com/JasonCruzGit/techcentrix**
- **GitHub Pages**: Pushes to `main` trigger the workflow (`.github/workflows/deploy.yml`). Site will be at `https://<username>.github.io/techcentrix/`.
- **Vercel**: Connect the repo at [vercel.com](https://vercel.com) for automatic deploys (see below).

---

## 1. GitHub (already done)

Repo: **https://github.com/JasonCruzGit/techcentrix**

To push future changes:

```bash
cd l:\techcentrix1
git add -A
git commit -m "Your message"
git push origin main
```

---

## 2. Deploy to Vercel

### Option A: Connect GitHub (recommended)

1. Go to [vercel.com](https://vercel.com) and sign in (e.g. with GitHub).
2. Click **Add New** → **Project**.
3. **Import** the repo `JasonCruzGit/techcentrix`.
4. Leave build settings as default (Vercel detects Next.js).
5. For **Root Directory** leave as `.`
6. **Environment variables**: Leave empty unless you add env vars later.
7. Click **Deploy**. Each push to `main` will auto-deploy.

### Option B: Vercel CLI

1. Install and log in (once):

   ```bash
   npm i -g vercel
   vercel login
   ```

2. Deploy from the project folder:

   ```bash
   cd l:\techcentrix1
   vercel
   ```

   First run: link the project and accept defaults. You’ll get a preview URL.

3. Production deploy:

   ```bash
   vercel --prod
   ```

---

## Notes

- This app uses **static export** (`output: 'export'`). Vercel and GitHub Actions both build with `npm run build` and serve the `dist` output.
- GitHub Pages uses base path `/techcentrix`; Vercel uses the root, so the site works at the Vercel URL without a path prefix.
