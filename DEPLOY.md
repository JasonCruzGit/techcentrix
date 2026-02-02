# Deploy TechCentrix to GitHub and Vercel

## 1. Deploy to GitHub

### Option A: Create repo on GitHub, then push

1. **Create a new repository** on [GitHub](https://github.com/new):
   - Name: `techcentrix` (or your choice)
   - Visibility: Public or Private
   - **Do not** initialize with README, .gitignore, or license (repo should be empty)

2. **Add remote and push** (replace `YOUR_USERNAME` and `YOUR_REPO` with your GitHub username and repo name):

   ```bash
   cd l:\techcentrix
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git branch -M main
   git push -u origin main
   ```

### Option B: Using GitHub CLI (if installed)

```bash
cd l:\techcentrix
gh repo create techcentrix --public --source=. --remote=origin --push
```

---

## 2. Deploy to Vercel (CLI)

1. **Log in to Vercel** (required once):

   ```bash
   vercel login
   ```

   Follow the browser prompt to authenticate.

2. **Install Vercel CLI** (if not already):

   ```bash
   npm i -g vercel
   ```

3. **Deploy** from the project folder:

   ```bash
   cd l:\techcentrix
   vercel
   ```

   - First time: you’ll be prompted to log in and link the project.
   - Accept defaults (or set a project name); Vercel will detect the static site and deploy.
   - You’ll get a live URL (e.g. `https://techcentrix-xxx.vercel.app`).

3. **Production deploy**:

   ```bash
   vercel --prod
   ```

### Connect GitHub to Vercel (optional)

- In [Vercel Dashboard](https://vercel.com/dashboard) → **Add New Project** → **Import** your GitHub repo.
- Future pushes to `main` will trigger automatic deployments.

---

## Git identity (optional)

To use your own name/email for commits:

```bash
git config user.name "Your Name"
git config user.email "your@email.com"
```
