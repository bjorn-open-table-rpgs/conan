# CONAN OPEN TABLE – strona kampanii

Strona na GitHub Pages (Jekyll, bez Actions). Edytujesz notatki w Obsidianie, jeden skrót wysyła je na stronę.

## Jednorazowa konfiguracja

1. Utwórz na GitHubie **publiczne** repo (np. `conan-open-table`) i wgraj do niego zawartość tego folderu.
   Wpisz nazwę repo w `_config.yml` → `baseurl`.
2. GitHub → repo → Settings → Pages → *Deploy from a branch* → `main` / `/ (root)`.
3. Otwórz ten folder jako vault w Obsidianie.
4. Obsidian → Settings:
   - **Files and links**: wyłącz *Use [[Wikilinks]]*; *New link format* = *Relative path to file*;
     *Default location for new attachments* = *In the folder specified below* → `assets/img`.
   - **Core plugins**: włącz *Templates*, w jego ustawieniach *Template folder location* = `szablony`.
   - **Community plugins**: zainstaluj **Obsidian Git** (wymaga zainstalowanego Gita i zalogowania do GitHuba).
   - **Hotkeys**: przypisz skrót do *Obsidian Git: Commit-and-sync* oraz do *Templates: Insert template*.

## Nowy raport z sesji

1. Nowa notatka w folderze `_kronika`, nazwa np. `sesja-02` (trafia do adresu strony; bez polskich znaków i spacji będzie ładniej).
2. Skrót *Insert template* → `sesja` (wstawia nagłówek z dzisiejszą datą).
3. Zmień `title`, napisz raport, wklej obrazki (Ctrl+V).
4. Skrót *Commit-and-sync*. Po ok. minucie raport jest na stronie.

## Dobrze wiedzieć

- Każdy plik `.md` musi zaczynać się od bloku `--- title: … ---`, inaczej strona go nie wyświetli.
- Nowa zakładka w menu: dopisz linię w `_data/menu.yml` i utwórz plik `.md` o tej nazwie.
- Obrazki trzymaj w `assets/img/`. Kliknięcie obrazka na stronie otwiera go na pełnym ekranie.
- Wygląd: `assets/style.css` (kolory na samej górze pliku).
- Repo jest publiczne – nie trzymaj tu notatek MG z sekretami. Strona ma `noindex`, ale to nie jest zabezpieczenie.

## Linki między stronami

W Obsidianie linkuj zwykłym linkiem markdown do pliku, np. `[Zasady](zasady.md)` albo z raportu `[Postaci](../postaci.md)`.
Wtyczka `jekyll-relative-links` (włączona w `_config.yml`) zamieni to na adres działający na stronie.
