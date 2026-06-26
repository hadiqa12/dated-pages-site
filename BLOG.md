# Blog workflow (Eleventy)

## Add a new post

1. Copy `src/posts/_post-template.md` to `src/posts/your-slug.md`
2. Fill in the frontmatter at the top (title, date, excerpt, etc.)
3. Write the essay in Markdown below the `---` line
4. Build and deploy:

```powershell
npm run build
git add .
git commit -m "Add blog post: your title"
git push origin main
vercel --prod
```

The blog index at `/blog` updates automatically — no manual card editing.

## Local preview

```powershell
npm run dev
```

Open http://localhost:8080

## Project layout

```
src/
  index.html          ← home page (static)
  styles.css          ← site styles
  privacy/            ← legal pages (static)
  terms/
  blog.njk            ← blog index template
  posts/*.md          ← blog posts (Markdown)
  _includes/          ← layouts & partials
```

Build output goes to `_site/` (do not edit by hand).
