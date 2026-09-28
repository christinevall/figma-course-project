import styles from './Hero.module.css';

export type HeroProps = {
  /** The small line above the headline, e.g. a name. */
  subtitle: string;
  /** Figma: `headline`. A line break in the text starts a new line. Shown in capitals. */
  headline: string;
};

/** Hero · Figma: "Hero" (breakpoint = desktop | tablet | mobile) */
export function Hero({ subtitle, headline }: HeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <p className={styles.subtitle}>{subtitle}</p>
        <h1 className={styles.headline}>{headline}</h1>
      </div>
    </section>
  );
}
