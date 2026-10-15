# CLAUDE.md

@AGENTS.md

## Adding content

- **Publication:** add a BibTeX entry to `_bibliography/papers.bib`. Site-only fields: `abbr` (badge), `selected = {true}` (home page), `code`, `html`, `pdf`, `google_scholar_id` (citation count). Put "Under review, <venue>" in `note` for manuscripts under review. These fields are stripped from the BibTeX export via `scholar.bibtex_skip_fields`.
- **Project:** add `_projects/<n>_<slug>.md` with `title`, `description`, `org`, `period`, `category` (`ornl`, `dissertation`, `other`), `importance`, `image` (a real figure in `assets/img/research/`, plus `image_alt` and `image_credit`), optional `card_image` (a crop that suits the 16:10 card), `figures` (extra captioned figures), optional `status`, `tags`, `links`, `publications` (BibTeX keys), and `featured` (order on the home page).
- **News:** add `_news/<date>-<slug>.md` with a `date` and a one-paragraph body.
