# Deploy to GitHub Pages

The site is ready to publish. Run these steps once from this directory:

## 1. Create the repository on GitHub

If it does not exist yet, create a **public** repo named `redefinered.github.io` under the `redefinered` account.

## 2. Push the code

```bash
cd ~/Projects/redefinered.github.io
git remote add origin https://github.com/redefinered/redefinered.github.io.git   # skip if already added
git push -u origin main
```

## 3. Enable GitHub Pages

1. Open **Settings → Pages** on the repo
2. Set **Source** to **GitHub Actions**
3. The workflow in `.github/workflows/deploy.yml` runs on every push to `main`

## 4. Verify

After the workflow completes, the site will be live at:

**https://redefinered.github.io**

## Local preview

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```
