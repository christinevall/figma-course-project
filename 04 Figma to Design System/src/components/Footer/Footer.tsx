import styles from './Footer.module.css';

export type FooterProps = {
  /** The line on the left, e.g. © 2026 Sam Taylor. */
  copyright: string;
  /** The small text links, e.g. Imprint and Contact. */
  links: { label: string; href: string }[];
};

/** Footer · Figma: "Footer" (breakpoint = desktop | tablet | mobile) */
export function Footer({ copyright, links }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <p>{copyright}</p>
      <ul className={styles.links}>
        {links.map((link) => (
          <li key={link.label}>
            <a className={styles.link} href={link.href}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
