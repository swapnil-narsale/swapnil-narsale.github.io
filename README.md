# Swapnil Narsale — Analytics Portfolio

A responsive, static portfolio prepared for **https://swapnil-narsale.github.io/**. It includes all 10 visible workbooks from Swapnil's Tableau Public profile as retrieved on October 5, 2026, local preview images, experience, skills, education, awards, and contact links.

## Preview before publishing

Open `preview.html` in your browser for a self-contained preview. Use `index.html` as the live website entry point.

## Publish with GitHub Pages

1. Sign in to https://github.com/swapnil-narsale.
2. Create a **public** repository named exactly `swapnil-narsale.github.io`. If it already exists, review its existing files before replacing anything.
3. Extract this ZIP. Upload the contents of the `portfolio` folder to the repository root: `index.html`, `styles.css`, `script.js`, `projects.json`, `.nojekyll`, and the `assets` folder. Do not upload the ZIP itself or nest the website in another folder.
4. Commit the files to `main`.
5. Open the repository's **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch**, then `main` and `/ (root)`, and save.
6. Wait for the Pages deployment to complete, then open https://swapnil-narsale.github.io/.

The expected address is not live until the GitHub Pages deployment succeeds.

## Customize

- Edit `index.html` to update the text, experience, and links.
- Edit `styles.css` to change the layout, colors, and typography.
- Dashboard thumbnails are stored locally in `assets/`. Refresh them when a workbook changes. The site does not automatically sync with Tableau Public.
- `projects.json` records the Tableau Public workbook metadata used to prepare this version. Only visible public workbooks were retrieved.
- The resume button opens an email request. To offer a downloadable resume, add a reviewed PDF and change the link to that file.

## Content decisions

- Central Arizona College is shown as **August 2021–Present**, as Swapnil confirmed for this portfolio.
- Education names and other employment dates follow the supplied Apple resume.
- Public dashboards are described as portfolio and practice work; they are not represented as employer projects or as evidence of clinical results.
- Employer work is summarized without exposing employer data or private dashboards.
- This package contains no credentials, application forms, analytics trackers, or third-party JavaScript dependencies.

## Local preview

From this folder, run `python3 -m http.server 8000` and open http://localhost:8000.
