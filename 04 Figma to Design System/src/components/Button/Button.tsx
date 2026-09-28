import styles from './Button.module.css';

export type ButtonProps = {
  /** The text on the button. Figma: `label`. */
  label: string;
  /** Figma: `variant`. Primary is filled, secondary is outlined. */
  variant?: 'primary' | 'secondary';
  /** Add a link and the button becomes a link that looks like a button. */
  href?: string;
  /** What happens on click (only without `href`). */
  onClick?: () => void;
  /**
   * Figma: `state`. Preview only, for Storybook.
   * On a real page leave it out: the browser sets hover, active and focus.
   */
  state?: 'default' | 'hover' | 'active' | 'focused';
  /** Extra class from the parent, e.g. to make the button full width. */
  className?: string;
};

/**
 * Button · Figma: "Button" (variant × state)
 *
 * 2 variants × 4 states = 8 Figma variants, one component in code.
 * In Figma, hover / active / focused are variants you pick.
 * In code, the browser sets them when you hover, press or tab.
 */
export function Button({ label, variant = 'primary', href, onClick, state = 'default', className }: ButtonProps) {
  const classes = [styles.button, styles[variant], className].filter(Boolean).join(' ');
  const dataState = state === 'default' ? undefined : state;

  if (href) {
    return (
      <a className={classes} href={href} data-state={dataState}>
        {label}
      </a>
    );
  }

  return (
    <button className={classes} type="button" onClick={onClick} data-state={dataState}>
      {label}
    </button>
  );
}
