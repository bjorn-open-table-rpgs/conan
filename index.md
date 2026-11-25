---
layout: default
title: Strona główna
hero: true
---
# CONAN OPEN TABLE

Rusza drugi sezon kampanii w konwencji Conana, w formule **OPEN TABLE**: bez stałej drużyny, gracze dołączają wtedy, gdy mają czas.

## Sezon 2: W cieniu Maga

Bohaterowie są więźniami tajemniczego Maga. Utrzymuje ich w ryzach za pomocą *Pożywki*, przeklętej zupy, którą muszą jeść, by przeżyć. Każda miska jest nagrodą za wykonane zadanie.

Więźniowie zdobyli przepis na odtrutkę. Muszą zdecydować: być posłuszni Magowi czy uciekać. Obiecał im wolność i udział w swoim dziele, jeśli plan się powiedzie, ale mu nie ufają.

## Zasady gry

- Jedna sesja to jedna wyprawa. Do końca gry drużyna musi bezpiecznie wrócić do obozu.
- Jeśli nie zdąży wrócić przed końcem sesji, postacie uciekają, a w następnej sesji zaczynają z Wytrzymałością zmniejszoną o wynik rzutu k6.
- System: *Barbarzyńcy i Czarownice*. Zasady tłumaczymy 10 minut przed grą, więc nie trzeba nic czytać.
- Przed sesją potwierdź w [liście postaci](postaci/), które postacie są gotowe.

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
