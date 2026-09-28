# Blog page: gaps and things to know

Built from Figma file `9I0COAcolNfBXf5UPfi7Ms`, page "💪 Part 3: Responsive Design",
frames **Small** (`6203:1919`), **Medium** (`10389:1970`), **Large** (`6203:1935`).

## Status (2026-09-28)

Built: `index.html`, `styles.css`, `script.js`, `images/`. Checked in the browser at
390, 851 and 1200px wide. Large matches Figma to within about 2px (card 258×347, hero 237, footer 231).

## How the breakpoints were chosen

- Small: below 800px
- Medium: 800px and up (the Medium frame's min width in Figma)
- Large: 1200px and up (the Large frame's min width)

## Decisions I made that the design doesn't answer

- **Hero and footer are hidden on Small**, because the Small frame doesn't include them.
  Hiding the footer on phones means no Contact or Terms link on mobile. To show them,
  delete the `display: none` rules on `.hero` and `.site-footer` in `styles.css`.
- **The mobile menu's open state isn't designed.** I made a simple dropdown: the links
  stack under the logo, then the Subscribe button. It's accessible (`aria-expanded`, and
  Escape closes it). Without JavaScript, the links just stay visible.
- **Hover and focus states aren't designed.** I added underlines on links, a slightly darker
  Subscribe button on hover, and an orange focus ring.
- **Cards aren't links.** The design gives no destination for them, so they're plain `<article>`s.
- **Six cards on every size.** The Small frame only shows four (it's clipped), but I kept the
  same six cards so there's only one content list to maintain.
- **Heading levels:** "Hello world" is the `h1`, card titles are `h2`. On Small, where the hero is
  hidden, the page has no visible `h1`.
- **The large screen isn't capped.** Past 1200px the layout keeps stretching, like the Figma frame
  with no max width. A `max-width` on the content would stop that.

## Things to know

- **The images are PNG exports at 2× the mobile card width (684×389).** For a real site,
  convert them to WebP/AVIF.
- **The images have empty `alt`** because they're decorative next to the card titles. If they
  carry meaning, add alt text.
- **Poppins loads from Google Fonts.** Self-host it if you want no third-party requests.
- **Logo size:** Figma has it at 64.31px, which I rounded to 64px.
- **Previewing needs a local server.** Opening `index.html` straight from the Desktop in the
  app's browser pane didn't load the CSS. Run `python3 -m http.server 8000` in this folder
  and open http://localhost:8000.
