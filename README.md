# ctrlsuite.github.io

Source of [ctrlsuite.github.io](https://ctrlsuite.github.io/), the presentation page for
[CTRLSuite](https://github.com/ctrlsuite/ctrlsuite-downloads). Plain HTML/CSS/JS, no build step: GitHub Pages
serves the repository root as is (see `.nojekyll`).

- `index.html` / `styles.css` / `script.js` — the page. Colors are CTRLSuite's own **Neon** built-in theme
  (`#07080d` / `#00ffff` / `#ff00ff`), not its softer default theme.
- `assets/screens/*.png` — real screenshots of the app (a fresh, isolated instance, a simulated DualSense, the
  Neon theme selected, and a seeded "Rocket League" profile), not mockups. The LED lights screenshot is the one
  exception: its card is built from the same markup `leds-view.js` produces, filled with example values, because
  showing it populated needs a real WebHID permission grant a screenshot script can't get on its own.
- `assets/logo.svg` / `assets/favicon.png` — copied from the app (`src/renderer/assets/logo.svg`, `build/icon.png`).

To refresh the screenshots after a UI change in the app, rebuild them from a similar script and drop the PNGs in
`assets/screens/` under the same names; nothing else needs to change.

Publishing: push to `main` — GitHub Pages serves it from there with no separate build.
