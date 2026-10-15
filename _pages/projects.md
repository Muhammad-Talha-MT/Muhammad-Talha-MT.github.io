---
permalink: /projects/
title: Research
heading: Research projects
eyebrow: Research
description: >-
  Foundation models, graph neural networks, and spatiotemporal deep learning for predicting streamflow across
  space and time, from my current work at Oak Ridge National Laboratory to my doctoral research at Michigan State.
groups:
  - id: ornl
    title: At Oak Ridge National Laboratory
    note: Research Intern, Graduate Research Opportunity Program · 2026 – present
  - id: dissertation
    title: Doctoral research
    note: Michigan State University · 2023 – present
  - id: other
    title: Earlier and applied work
    note: Optimization, computer vision, and industry machine learning
---

{% for g in page.groups %}
{% assign items = site.projects | where: 'category', g.id | sort: 'importance' %}

<section class="project-group" id="{{ g.id }}" aria-labelledby="group-{{ g.id }}">
  <header class="group-head">
    <h2 class="group-title" id="group-{{ g.id }}">{{ g.title }}</h2>
    <p class="group-note">{{ g.note }}</p>
  </header>
  <div class="project-grid">
    {% for p in items %}
      {% include project-card.liquid project=p %}
    {% endfor %}
  </div>
</section>
{% endfor %}
