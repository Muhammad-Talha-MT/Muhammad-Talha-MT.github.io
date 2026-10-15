---
permalink: /publications/
title: Publications
eyebrow: Publications
description: >-
  Journal articles, conference papers, and manuscripts under review on machine learning for hydrology and
  environmental systems. My name is in bold.
---

<div class="pub-toolbar" role="group" aria-label="Filter publications">
  <button class="filter is-active" type="button" data-filter="all" aria-pressed="true">All</button>
  <button class="filter" type="button" data-filter="journal" aria-pressed="false">Journal</button>
  <button class="filter" type="button" data-filter="conference" aria-pressed="false">Conference</button>
  <button class="filter" type="button" data-filter="review" aria-pressed="false">Under review</button>
  <a class="filter filter--link" href="https://scholar.google.com/citations?user={{ site.data.socials.scholar_userid }}">
    {%- include icon.liquid name="scholar" -%}
    Google Scholar
  </a>
</div>

<div class="pubs pubs--full" data-pubs>
{% bibliography %}
</div>
