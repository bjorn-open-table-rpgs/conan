# Conan Open Table: strona kampanii

## Dodawanie wpisu do kroniki (telefon lub komputer, bez instalowania czegokolwiek)

1. Otwórz repozytorium na github.com i wejdź do folderu `_sessions`.
2. Kliknij **Add file → Create new file**.
3. Nazwij plik np. `2026-02-07-sesja-4.md`.
4. Na początku wklej poniższy nagłówek, a pod nim napisz relację zwykłym tekstem lub w Markdownie:

   ```
   ---
   title: "Tytuł sesji"
   session: 4
   date: 2026-02-07
   summary: "Jedno zdanie zajawki widoczne na liście."
   ---
   ```
5. Kliknij **Commit changes**. Po około minucie wpis jest na stronie, na górze listy.

Wpis z datą z przyszłości pojawi się dopiero w tym dniu.

## Edycja pozostałych stron
`index.html`, `postaci.md`, `zasady.md`, `wiedza-ogolna.md`, `mapa.md` edytujesz tak samo (ikona ołówka).

## Obrazy
Wgraj do folderu `assets/` i wstaw: `![opis]({{ '/assets/obraz.jpg' | relative_url }})`.

## Publikacja (jednorazowo)
1. Utwórz organizację na GitHubie, a w niej publiczne repozytorium o nazwie `NAZWA-ORGANIZACJI.github.io` i wgraj pliki.
2. Settings → Pages → Source: **Deploy from a branch**, gałąź `main`, folder `/ (root)`.
3. W `_config.yml` ustaw `url` na `https://NAZWA-ORGANIZACJI.github.io`.
