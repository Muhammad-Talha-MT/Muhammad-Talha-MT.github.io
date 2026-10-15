---
permalink: /beyond/
title: Beyond research
eyebrow: Off the clock
description: Poetry, songs, and films I keep coming back to.
urdu: true
---

{% assign fav = site.data.favorites %}

{% if fav.poetry.size > 0 %}

<section class="fav-section" id="poetry" aria-labelledby="poetry-title">
  <h2 class="group-title" id="poetry-title">Poetry</h2>
  <div class="poem-list">
    {% for p in fav.poetry %}
      <article class="poem reveal">
        <div class="poem-urdu" lang="ur" dir="rtl">
          {% for l in p.lines_ur %}<p>{{ l }}</p>{% endfor %}
        </div>
        <div class="poem-side">
          <p class="poem-roman">
            {% for l in p.lines_roman %}{{ l }}{% unless forloop.last %}<br>{% endunless %}{% endfor %}
          </p>
          {% if p.translation %}<p class="poem-translation">{{ p.translation }}</p>{% endif %}
          {% if p.note %}<p class="poem-note">{{ p.note }}</p>{% endif %}
          <p class="poem-credit">
            <strong>{{ p.poet }}</strong> · {{ p.form }}
            {% if p.url %}· <a href="{{ p.url }}">{{ p.url_label | default: 'Read on Rekhta' }} {% include icon.liquid name="external" %}</a>{% endif %}
          </p>
        </div>
      </article>
    {% endfor %}
  </div>
  <p class="fav-footnote">Faiz's work is still under copyright, so only a couplet or the opening line is shown. Rekhta has the full texts. Transliterations and translations are my own.</p>
</section>
{% endif %}

{% if fav.songs.size > 0 %}

<section class="fav-section" id="songs" aria-labelledby="songs-title">
  <h2 class="group-title" id="songs-title">Songs</h2>
  <div class="fav-grid">
    {% for s in fav.songs %}
      <article class="fav-card reveal">
        <h3 class="fav-title">{{ s.title }}</h3>
        <p class="fav-meta">{{ s.artist }}{% if s.from %} · {{ s.from }}{% endif %}</p>
        {% if s.note %}<p class="fav-note">{{ s.note }}</p>{% endif %}
        {% if s.url %}<p class="fav-link"><a href="{{ s.url }}">Listen on YouTube {% include icon.liquid name="external" %}</a></p>{% endif %}
      </article>
    {% endfor %}
  </div>
</section>
{% endif %}

{% if fav.movies.size > 0 %}

<section class="fav-section" id="movies" aria-labelledby="movies-title">
  <h2 class="group-title" id="movies-title">Movies</h2>
  <div class="fav-grid">
    {% for m in fav.movies %}
      <article class="fav-card reveal">
        <h3 class="fav-title">{{ m.title }}</h3>
        <p class="fav-meta">{{ m.year }}{% if m.director %} · {{ m.director }}{% endif %}</p>
        {% if m.note %}<p class="fav-note">{{ m.note }}</p>{% endif %}
        {% if m.url %}<p class="fav-link"><a href="{{ m.url }}">More {% include icon.liquid name="external" %}</a></p>{% endif %}
      </article>
    {% endfor %}
  </div>
</section>
{% endif %}
