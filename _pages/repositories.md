---
permalink: /repositories/
title: Code
eyebrow: Open source
heading: Code & data
description: Open-source code behind my papers and datasets. Everything here is public on GitHub.
---

{% assign gh = site.data.repositories.github_user %}
{% for g in site.data.repositories.groups %}

<section class="repo-group">
  <h2 class="group-title">{{ g.title }}</h2>
  <div class="repo-grid">
    {% for r in g.repos %}
      <article class="repo-card reveal" data-repo="{{ gh }}/{{ r.name }}">
        <a class="repo-main" href="https://github.com/{{ gh }}/{{ r.name }}">
          <span class="repo-owner">{% include icon.liquid name="github" %}{{ gh }} /</span>
          <h3 class="repo-name">{{ r.title | default: r.name }}</h3>
          <p class="repo-desc">{{ r.description }}</p>
        </a>
        <footer class="repo-meta">
          <span class="repo-lang"><span class="lang-dot" data-lang="{{ r.language | slugify }}"></span>{{ r.language }}</span>
          <span class="repo-stars" data-stars hidden>{% include icon.liquid name="star" %}<span></span></span>
          <span class="repo-updated" data-updated hidden></span>
          {% if r.project %}
            <a class="repo-project" href="{{ r.project | relative_url }}">Project {% include icon.liquid name="arrow-right" %}</a>
          {% endif %}
        </footer>
      </article>
    {% endfor %}
  </div>
</section>
{% endfor %}

<a class="github-cta reveal" href="https://github.com/{{ gh }}">
  {% include icon.liquid name="github" %}
  <span><strong>More on GitHub</strong><span>Explore all repositories at github.com/{{ gh }}</span></span>
  {% include icon.liquid name="external" %}
</a>
