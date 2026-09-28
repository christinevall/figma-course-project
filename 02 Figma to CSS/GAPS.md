# Gaps, open points and uncertainties

Built 2026-09-24 from scratch, from Figma file `6ylAi69lIdG1UPKuc2YqjU`
(*Project Step 3 – Auto Layout*). Files: `index.html`, `style.css`, `images/`. Updated the same day after the Figma fixes below.
Open by double-clicking `index.html`. The font needs an internet connection (Google Fonts).

## How the values were read

- **Variables:** read with the Figma plugin API (`use_figma`, read only). That gives every
  collection, every mode and every alias, including dark mode and the primitive → semantic chain.
- **Layout:** `get_design_context` on the Desktop (`1:2`) and Mobile (`8:1403`) frames,
  plus variables and a screenshot of Tablet (`8:1169`).
- **Images:** downloaded from Figma into `images/`.

## Fixed in Figma on 2026-09-24 (via the Figma MCP) and carried over to the code

No named version was saved first: the MCP can't do it. Figma's automatic version history holds
the earlier state.

- **Frame names** now match the modes: `Desktop · lg (>1280)`, `Tablet · md (>800)`, `Mobile · sm (<800)`.
- **Skills mobile** variant (`2:698`) now has the text mode set to *sm* (the headline is 32, not 48).
- **"Front End" → "Skills"** as the Skills headline on mobile *and* tablet (both instances had it).
- **Duplicate footer** on mobile deleted (the tablet footer instance `8:1411`).
- **ProjectCard mobile** variant (`2:163`): removed the extra `surface/raised` fill that made every
  card grey. Now only every second card is grey, same as desktop and tablet.
- **Fixed numbers that equal a variable are now variables** (29 places): Hero, ProjectCard,
  Skills, SkillItem and Footer gaps, About content gap, About mobile left/right padding, tablet
  nav gap. In the CSS these now use `var(--space-…)` too.
- **`text/accent`** scope now includes text colour, so it shows in the text colour picker.
- **`action/secondary/border`** deleted. Nothing used it; the secondary button border stays
  `action/primary/default` (dark), as before.
- **Nav button "contact" → "Contact"** on desktop and tablet (a text override in lower case).
- **Burger icon:** in Figma its lines were already bound to `border/strong`. The bug was in the
  code: the exported SVG file had the colour baked in. The icon's SVG code now sits in `index.html`,
  with its colour set by the CSS, so it turns light in dark mode. `images/menu.svg` removed.

## Still open in Figma (not fixed: they change the look, your call)

1. **Raw numbers that don't match a variable** (kept as they are in the CSS, marked "raw in Figma"):
   desktop nav gap 54 · desktop ProjectCard content gap 19 · SkillItem gap 20 (not visible) ·
   About desktop padding 66 / 52 / 53 and gap 95 · About tablet 56 / 41 / 40 · About mobile
   padding top/bottom 39 and gap 27. Also raw on purpose: container max-width 1200, button
   border 3px, logo 48 × 48, skill border 1px.
2. **A variable from another library:** `padding-left-right`, `padding XL` and `Screen size` come
   from a remote library. They're used on About desktop and Skills mobile. Values seen: 64
   desktop, 24 mobile. **Tablet value not checked.** Note the naming: `padding XL` has a space
   and a capital, unlike every other variable.
3. **Names:** the hero says "James Jones", the About text says "I'm Kim".
4. **Footer desktop variant** (`2:512`) is empty; the desktop page uses a different footer.
   Not checked further.

## Correction to the first version of this file

- *"The Button only has state = default"* was **wrong**. The Button component has default,
  hover, active and focused variants for primary and secondary, and they use the hover and
  pressed variables. The CSS `:hover` / `:active` rules match that.

## Not in the design, so I added it (my choices)

- **Mobile open menu:** Figma shows only the burger icon. The dropdown (a white box with the links)
  is mine, built with `<details>`, so no JavaScript.
- **Focus outline** for keyboard users (`border/focus`, 2px).
- **Dark mode switch:** add `data-theme="dark"` to the `<html>` tag. There is no toggle button, so
  there's no JavaScript.

## Known issues in the code

- **The logo** has its orange (`#FF6330`) baked into the SVG file. It's the same in both modes,
  so it's fine. It isn't linked to `color/brand/500`.
- **Dark mode images:** the project screenshots stay light. Expected, not a bug.
- **px, not rem:** px so beginners can compare with Figma 1:1. For real projects, font sizes in
  rem respect the browser's text-size setting.

## Copy changed (neutral demo content)

- The project descriptions in Figma all say "I run moonlearning.io…". I wrote one neutral line per
  project. Project names and screenshots are still as in Figma.
- Footer: "© 2026 Your Name" (as in the tablet footer), `example.com` email, `#` for Imprint.
  The Figma links pointed to other Figma files.

## Checked / not checked

- **Checked in the browser** (Chromium) at 1280, 800 and 375px: font sizes per mode (80/64/48 hero,
  40/32/32 project titles, 48/40/32 About), grey cards, no sideways scroll, mobile menu opens,
  dark mode colours. The desktop page is 3088px tall; the Figma frame is 3097px.
- **Not checked:** Safari, Firefox, opening by double-click (tested over a local server because the
  browser pane can't load local CSS), and a side-by-side pixel comparison with Figma.
- **Old version:** the earlier three-CSS-file build is in `../_backup/01-three-css-files-2026-09-24/`
  (HTML and CSS only; its images folder was already gone from this folder).
