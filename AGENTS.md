# Agent Guidelines

Personal academic website of Muhammad Talha, built with Jekyll and a **custom theme that lives in this repo**. It no longer uses the al-folio theme or its plugin gems.

## Layout of the repo

- `_layouts/`: `default` (shell), `home` (landing page), `page`, `project`, `bib` (one publication entry, used by jekyll-scholar)
- `_includes/`: header, footer, `icon` (inline SVG icons), project card, lists
- `assets/css/site.css`: all styles; plain CSS with custom properties, light/dark themes, no build step
- `assets/js/site.js`: theme toggle, menu, reveal-on-scroll, publication filters, BibTeX copy, live GitHub stats
- `assets/img/research/`: project images (public-domain NASA Earth Observatory imagery, credited on each project page), visual-inspection notebook outputs, and the home-page background map (from the Basin2Vec repo)
- Content: `_pages/`, `_projects/` (front matter drives cards: `image`, optional `card_image`, `image_alt`, `image_credit`, `figures`, `status`, `tags`, `links`, `publications`, `featured`), `_news/`, `_bibliography/papers.bib`
- Data: `_data/cv.yml` (CV page), `_data/research.yml` (home themes and pipeline), `_data/repositories.yml` (Code page), `_data/socials.yml`, `_data/citations.yml` (updated by the citations workflow)

## Commands

```bash
bundle install
bundle exec jekyll serve          # http://localhost:4000
bundle exec jekyll build
npm ci && npm run lint:prettier
```

## Notes

- Files from the old al-folio starter (`_posts/`, `test/`, `docs/`, Docker files, several workflows) are still in the repo but excluded from the build in `_config.yml`.
- Keep colors in the CSS custom properties at the top of `site.css`. The hero map is a white-on-black figure; `--map-filter`/`--map-blend` invert it for the light theme.
