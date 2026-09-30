# Gaps & notes

Source: Figma file **showcase** → frame **Homepage** (node `1:36`, 1200 × 800 px)
Built: `index.html` + `styles.css` (plain HTML/CSS, no JavaScript)

---

## ✅ What matches the design

- Every element was measured in the browser at 1200 × 800 and sits on the **same pixel position and size** as in Figma (nav, logo, links, Sign up button, headline, subline, all three cards and their contents).
- All colours, font sizes and weights come straight from the Figma file.
- Font is **Inter**, loaded from Google Fonts.

---

## ⚠️ Things I wasn't sure about

| # | What | What I did |
|---|------|------------|
| 1 | **Subline wording**: "…but you can play with to get started." — looks like a word is missing ("play with **it**"?) | Copied it exactly as in Figma. Fix the text in `index.html` if it's a typo. |
| 2 | **No variables in Figma**, so the colours have no official names | I invented names (`--color-orange`, `--color-muted`…) at the top of `styles.css`. Rename freely. |
| 3 | **Orange button text** is `#1e1e1e`, while other dark text is `#1e1e2a` — almost identical | Kept both, as in Figma. Probably meant to be the same colour. |
| 4 | **Featured card** in Figma has no border; the white cards do | I gave it a border in the same colour as its background, so it looks borderless but stays exactly the same size as the others. |
| 5 | **Nav width**: the Figma nav is exactly 1200 px | On wider screens the white bar stretches edge to edge, and its content stays centred at 1200 px. Felt more natural than a floating 1200 px bar. |

---

## 🚧 Not built (not in the design)

- **Real images** – the cards show grey placeholder boxes, like the wireframe.
- **Links go nowhere** – every link uses `href="#"`. Replace with real page addresses later.
- **Mobile / tablet layout** – the design is desktop-only. On a narrow screen the three cards won't fit and the page will scroll sideways.
- **Hover states** – Figma has none. I added a tiny one (links darken, buttons fade slightly) so things feel clickable. Delete the two `:hover` rules in `styles.css` if you don't want them.
- **Keyboard focus styles** – browsers show their default outline when you Tab through links. Fine for now; worth designing later.

---

## 💡 Good to know

- **Fonts need internet.** Inter loads from Google. Offline, the page falls back to Arial and will look slightly different.
- **Text rendering** differs a tiny bit between Figma and browsers (and between browsers). Sub-pixel differences are normal.
- **Figma names ↔ CSS names**: Button Primary/Secondary → `.button--primary` / `.button--secondary`; Card Default/Featured → `.card` / `.card--featured`; NavLink Active → `.nav-link.is-active`.
