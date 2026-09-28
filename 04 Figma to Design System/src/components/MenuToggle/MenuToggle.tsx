import styles from './MenuToggle.module.css';

export type MenuToggleProps = {
  /** Figma: `Property 1` (close | open). Open draws an X, closed draws two lines. */
  open?: boolean;
  /** What happens on click. The parent decides whether the menu opens. */
  onClick?: () => void;
  /** The id of the menu this button opens, for screen readers. */
  controls?: string;
  /** Extra class from the parent, e.g. to hide it on wide screens. */
  className?: string;
};

/**
 * MenuToggle · Figma: "Menu" (Property 1 = close | open)
 *
 * The burger button for small screens. In code the variant becomes
 * aria-expanded: screen readers hear "expanded / collapsed",
 * and the CSS draws two lines or an X from the same attribute.
 */
export function MenuToggle({ open = false, onClick, controls, className }: MenuToggleProps) {
  return (
    <button
      className={[styles.menuToggle, className].filter(Boolean).join(' ')}
      type="button"
      aria-expanded={open}
      aria-label={open ? 'Close menu' : 'Open menu'}
      aria-controls={controls}
      onClick={onClick}
    >
      <span className={styles.line} />
      <span className={styles.line} />
    </button>
  );
}
