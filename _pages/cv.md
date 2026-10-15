---
permalink: /cv/
title: CV
eyebrow: Curriculum vitae
heading: Muhammad Talha
description: Ph.D. candidate in Computer Science and Biosystems & Agricultural Engineering at Michigan State University · Research Intern at Oak Ridge National Laboratory.
---

{% assign cv = site.data.cv.cv %}
{% assign sec = cv.sections %}

<div class="btn-row cv-actions">
  <a class="btn btn-primary" href="{{ site.author.cv_pdf | relative_url }}">{% include icon.liquid name="download" %}Download PDF</a>
  <a class="btn btn-ghost" href="mailto:{{ cv.email }}">{% include icon.liquid name="mail" %}{{ cv.email }}</a>
</div>

<div class="cv-layout">
  <nav class="cv-toc" aria-label="CV sections">
    <ul>
      <li><a href="#profile">Profile</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#education">Education</a></li>
      <li><a href="#publications">Publications</a></li>
      <li><a href="#projects">Additional research</a></li>
      <li><a href="#awards">Awards</a></li>
      <li><a href="#skills">Skills</a></li>
    </ul>
  </nav>

  <div class="cv-main">
    <section class="cv-section" id="profile">
      <h2 class="section-label">Profile</h2>
      <p class="cv-summary">{{ cv.summary }}</p>
    </section>

    <section class="cv-section" id="experience">
      <h2 class="section-label">Experience</h2>
      <ol class="timeline">
        {% for e in sec.Experience %}
          <li class="tl-item">
            <p class="tl-date">{% include cv-date.liquid d=e.start_date %} – {% include cv-date.liquid d=e.end_date %}</p>
            <div class="tl-body">
              <h3 class="tl-title">{{ e.position }}</h3>
              <p class="tl-org">{{ e.company }}{% if e.location %} · {{ e.location }}{% endif %}</p>
              {% if e.summary %}<p class="tl-note">{{ e.summary | markdownify | remove: '<p>' | remove: '</p>' }}</p>{% endif %}
              {% if e.highlights %}
                <ul>
                  {% for h in e.highlights %}<li>{{ h | markdownify | remove: '<p>' | remove: '</p>' }}</li>{% endfor %}
                </ul>
              {% endif %}
            </div>
          </li>
        {% endfor %}
      </ol>
    </section>

    <section class="cv-section" id="education">
      <h2 class="section-label">Education</h2>
      <ol class="timeline">
        {% for e in sec.Education %}
          <li class="tl-item">
            <p class="tl-date">{% include cv-date.liquid d=e.start_date %} – {% include cv-date.liquid d=e.end_date %}</p>
            <div class="tl-body">
              <h3 class="tl-title">{{ e.studyType }}, {{ e.area }}</h3>
              <p class="tl-org">{{ e.institution }}{% if e.location %} · {{ e.location }}{% endif %}</p>
              {% if e.highlights %}
                <ul>
                  {% for h in e.highlights %}<li>{{ h | markdownify | remove: '<p>' | remove: '</p>' }}</li>{% endfor %}
                </ul>
              {% endif %}
            </div>
          </li>
        {% endfor %}
      </ol>
    </section>

    <section class="cv-section" id="publications">
      <h2 class="section-label">Publications</h2>
      <ol class="cv-pubs">
        {% for p in sec.Publications %}
          <li>
            <span class="cv-pub-title">{% if p.url %}<a href="{{ p.url }}">{{ p.title }}</a>{% else %}{{ p.title }}{% endif %}</span>
            <span class="cv-pub-authors">
              {%- for a in p.authors -%}
                {%- if a == 'Muhammad Talha' -%}<strong>{{ a }}</strong>{%- else -%}{{ a }}{%- endif -%}
                {%- unless forloop.last %}, {% endunless -%}
              {%- endfor -%}
            </span>
            <span class="cv-pub-venue"><em>{{ p.publisher }}</em>{% if p.releaseDate %}, {{ p.releaseDate | date: '%Y' }}{% endif %}</span>
          </li>
        {% endfor %}
      </ol>
      <p><a class="more-link" href="{{ '/publications/' | relative_url }}">Full list, including manuscripts under review {% include icon.liquid name="arrow-right" %}</a></p>
    </section>

    <section class="cv-section" id="projects">
      <h2 class="section-label">Additional research</h2>
      <ol class="timeline">
        {% for e in sec.Projects %}
          <li class="tl-item">
            <p class="tl-date">{% include cv-date.liquid d=e.start_date %} – {% include cv-date.liquid d=e.end_date %}</p>
            <div class="tl-body">
              <h3 class="tl-title">{{ e.name }}</h3>
              <p class="tl-note">{{ e.summary }}</p>
            </div>
          </li>
        {% endfor %}
      </ol>
    </section>

    <section class="cv-section" id="awards">
      <h2 class="section-label">Awards and fellowships</h2>
      <ul class="award-list">
        {% for a in sec.Awards %}
          <li>
            <span class="award-year">{{ a.date }}</span>
            <span><strong>{{ a.title }}</strong> · {{ a.awarder }}</span>
          </li>
        {% endfor %}
      </ul>
    </section>

    <section class="cv-section" id="skills">
      <h2 class="section-label">Technical expertise</h2>
      <div class="skill-grid">
        {% for s in sec.Skills %}
          <div class="skill">
            <h3 class="skill-title">{{ s.name }}</h3>
            <ul class="tag-list">
              {% assign kws = s.keywords | split: ', ' %}
              {% for k in kws %}<li>{{ k }}</li>{% endfor %}
            </ul>
          </div>
        {% endfor %}
      </div>
    </section>

  </div>
</div>
