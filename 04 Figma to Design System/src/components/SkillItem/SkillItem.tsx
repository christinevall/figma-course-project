import styles from './SkillItem.module.css';

export type SkillItemProps = {
  /** Figma: `headline`. The skill. */
  headline: string;
  /** Figma: `content`. One sentence about it. */
  content: string;
};

/** SkillItem · Figma: "SkillItem". Used three times inside Skills. */
export function SkillItem({ headline, content }: SkillItemProps) {
  return (
    <div className={styles.skillItem}>
      <h3 className={styles.headline}>{headline}</h3>
      <p>{content}</p>
    </div>
  );
}
