# Conan Open Table: strona kampanii

Strona działa pod adresem https://bjorn-open-table-rpgs.github.io/conan/

## Jak dodać raport z sesji

Każdy raport to **jeden plik tekstowy** w folderze `_sessions`. Plik `.md` (Markdown) to zwykły tekst z kilkoma prostymi znaczkami. Po zapisaniu strona sama się przebudowuje i raport pojawia się na liście.

Da się to zrobić w przeglądarce, także na telefonie. Nie trzeba instalować niczego.

1. Wejdź na https://github.com/bjorn-open-table-rpgs/conan i otwórz folder `_sessions`.
2. Najłatwiej: otwórz ostatni raport, kliknij ikonę **Copy raw file**, potem wróć do folderu `_sessions`.
   Albo skopiuj szablon z `_szablony/szablon-sesji.md` (patrz niżej).
3. Kliknij **Add file → Create new file**.
4. Nazwa pliku: `RRRR-MM-DD-sezon-2-sesja-N.md`, np. `2026-11-06-sezon-2-sesja-4.md`.
5. Wklej szablon i uzupełnij go (opis poniżej).
6. Kliknij **Commit changes…**, zostaw zaznaczone *Commit directly to the main branch* i zatwierdź.
7. Po ok. minucie raport jest na stronie, na górze listy.

## Szablon raportu

Skopiuj w całości. Wartości po dwukropku zmień, linie `---` zostaw.

```
---
title: "Tytuł sesji"
label: "Sezon 2 · Sesja 4 · 06.11.2026"
session: 4
date: 2026-11-06
summary: "Jedno zdanie zajawki widoczne na liście i na stronie głównej."
---
- Pierwszy punkt.
- Drugi punkt.
- Trzeci punkt.

## Uczestnicy

Gracz (Postać), Gracz (Postać), Gracz (Postać).
```

### Co oznaczają pola

| Pole | Co wpisać |
|------|-----------|
| `title` | Tytuł raportu, zawsze w cudzysłowie. |
| `label` | Napis nad tytułem, np. `Sezon 2 · Sesja 4 · 06.11.2026`. Zmieniasz numer i datę. |
| `session` | Sam numer sesji. |
| `date` | Data sesji: `RRRR-MM-DD`. Według niej raporty układają się na liście (najnowszy na górze). |
| `summary` | Jedno zdanie zajawki. |

Pod drugą linią `---` piszesz treść. Każdy punkt zaczyna się od `- ` (myślnik i spacja).
Pogrubienie: `**tekst**`. Nowa sekcja: `## Nazwa`. Cytat: linia zaczynająca się od `> `.

## Pisanie w Obsidianie (wygodniej na komputerze)

Ten folder jest gotowy do otwarcia jako vault w Obsidianie. Ustawienia są w `.obsidian`.

**Jednorazowo**
1. Obsidian → **Open folder as vault** → wskaż ten folder.
2. Settings → Community plugins → włącz wtyczki → zainstaluj **Obsidian Git** i włącz ją. Potrzebny jest zainstalowany Git.
3. Settings → Hotkeys: przypisz skróty do poleceń *Obsidian Git: Commit-and-sync* oraz *Templates: Insert template*. Obsidian ostrzeże o konflikcie, jeśli skrót jest zajęty (np. Ctrl+T otwiera nową kartę).
4. Przy pierwszym pushu zaloguj się do GitHuba, jeśli Git o to poprosi.
5. W ustawieniach Obsidian Git zostaw wyłączone automatyczne commity: repozytorium jest publiczne, a niedokończone raporty nie powinny wychodzić na stronę.

**Nowy raport**
1. Nowa notatka (trafia do `_sessions`), nazwa np. `2026-11-06-sezon-2-sesja-4`.
2. Skrót *Insert template*: wstawia nagłówek z dzisiejszą datą. Zmień `N`, tytuł i zajawkę.
3. Napisz raport.
4. Skrót *Commit-and-sync*: commit i push. Po około minucie raport jest na stronie.

## Edycja i usuwanie raportu

- **Poprawka:** otwórz plik w `_sessions`, kliknij ikonę ołówka, zmień tekst, **Commit changes**.
- **Usunięcie:** otwórz plik, menu `…` w prawym górnym rogu, **Delete file**, zatwierdź.

## Obrazy

Wgraj obraz do folderu `assets` (**Add file → Upload files**), a w raporcie wstaw:

```
![krótki opis]({{ '/assets/nazwa-obrazu.jpg' | relative_url }})
```

W Obsidianie wystarczy wkleić obraz do notatki (Ctrl+V). Trafi do `assets`, a link wstawi się sam.

Zmniejsz zdjęcia przed wgraniem (najlepiej do ok. 1000 px szerokości), bo duże spowalniają stronę na telefonie.

## Najczęstsze problemy

- **Raport się nie pojawił.** Poczekaj 2–3 minuty. Potem sprawdź zakładkę **Actions** w repozytorium. Czerwony krzyżyk oznacza błąd, a kliknięcie pokaże jego treść.
- **Cały raport widać jako goły tekst z `---`.** Brakuje linii `---` na początku albo na końcu nagłówka.
- **Tytuł z dwukropkiem psuje stronę.** Tytuł musi być w cudzysłowie: `title: "Coś: coś"`.
- **Raport jest, ale nie na górze listy.** Sprawdź `date`. Lista układa się po dacie, nie po numerze sesji.
- **Raport z datą z przyszłości nie pokazuje się,** dopóki ta data nie nadejdzie.
- **Nazwa pliku musi być unikalna,** inaczej GitHub nie pozwoli zapisać.

## Inne strony

`postaci.md`, `zasady.md`, `wiedza-ogolna.md`, `mapa.md` i `index.html` edytujesz tak samo, ikoną ołówka. Zostaw nagłówek między `---` na początku pliku.
