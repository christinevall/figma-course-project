import { useState } from 'react';
import { Button } from '../Button';
import { Logo } from '../Logo';
import { MenuToggle } from '../MenuToggle';
import styles from './Navigation.module.css';

export type NavigationLink = { label: string; href: string };

export type NavigationProps = {
  /** The text links, e.g. about. / work. / blog. */
  links: NavigationLink[];
  /** The dark button on the right. Leave it out to hide it. */
  cta?: NavigationLink;
  /** Start with the mobile menu open. Not designed in Figma. */
  defaultOpen?: boolean;
};

/**
 * Navigation · Figma: "Navigation" (breakpoint = desktop | tablet | mobile)
 *
 * Three Figma variants, one component: below 800px the links hide
 * behind the menu toggle. Uses Logo, Button and MenuToggle inside,
 * just like the Figma component uses their instances.
 */
export function Navigation({ links, cta, defaultOpen = false }: NavigationProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <header className={styles.navigation} data-open={open || undefined}>
      <Logo />
      <MenuToggle
        className={styles.toggle}
        open={open}
        onClick={() => setOpen(!open)}
        controls="navigation-menu"
      />
      <nav className={styles.menu} id="navigation-menu" aria-label="Main">
        <ul className={styles.links}>
          {links.map((link) => (
            <li key={link.href}>
              <a className={styles.link} href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        {cta && <Button label={cta.label} href={cta.href} />}
      </nav>
    </header>
  );
}
