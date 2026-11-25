---
layout: default
title: Strona główna
hero: true
---
# CONAN OPEN TABLE

⚔️ Odpalamy drugi sezon kampanii w świecie Conana w systemie OPEN TABLE – nie ma stałego składu, grasz wtedy, kiedy masz czas!

## Sezon 2: W cieniu Maga

Wcielacie się w **jeńców tajemniczego Maga,** który trzyma was na smyczy *Pożywki* - przeklętej zupy, którą musicie jeść, by przeżyć. Kolejna miska *Pożywki* czeka na was, **pod warunkiem wypełnienia kolejnego zadania dla Maga**. Nie ufacie mu, ale obiecał wam, że **gdy jego plan się ziści, zwolni was ze służby i da wam udział w jego dziele**.

Na szczęście, udało wam się zdobyć *receptę na antidotum przeciw Pożywce*. 

**To wy zdecydujecie**, czy posłusznie poddacie się woli Maga, czy potajemnie zerwiecie się z niewoli.

## jak gramy

- 🗺️ 1 sesja = 1 wyprawa. Wasz oddział rusza na misję i na koniec gry MUSI bezpiecznie wrócić do obozu.
- ⏳ Czas goni: Jeśli nie wrócicie do obozu przed końcem sesji, postacie salwują się ucieczką i następną sesję zaczną z Wytrzymałością pomniejszoną o k6.
- 🎲 Mechanika: System BARBARZYŃCY I CZAROWNICY. Zasady wytłumaczę w 10 minut przed grą, nie musicie nic czytać!

{% comment %} Poniżej automatyczny blok z ostatnim wpisem kroniki. Nie edytuj. {% endcomment %}
{% assign sorted = site.sessions | sort: "date" | reverse %}
{% if sorted.size > 0 %}
{% assign latest = sorted.first %}
<h2>Ostatni wpis w kronice</h2>
<ul class="session-list">
  <li>
    <a href="{{ latest.url | relative_url }}">
      <span class="meta">{% if latest.label %}{{ latest.label }}{% else %}Sesja {{ latest.session }} · {{ latest.date | date: "%d.%m.%Y" }}{% endif %}</span><br>
      <strong>{{ latest.title }}</strong>
      {% if latest.summary %}<p class="summary">{{ latest.summary }}</p>{% endif %}
    </a>
  </li>
</ul>
{% endif %}
