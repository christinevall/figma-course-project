import styles from './Logo.module.css';

export type LogoProps = {
  /** Where the logo links to. */
  href?: string;
  /** What screen readers say, since the logo has no text. */
  label?: string;
};

/** Logo · Figma: "Logo". A 48px circle in the accent colour, linking home. */
export function Logo({ href = '#top', label = 'Home' }: LogoProps) {
  return <a className={styles.logo} href={href} aria-label={label} />;
}
