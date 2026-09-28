import { SkillItem, type SkillItemProps } from '../SkillItem';
import styles from './Skills.module.css';

export type SkillsProps = {
  /** The section headline. */
  headline?: string;
  /** One SkillItem each. Three fit in a row. */
  items: SkillItemProps[];
};

/** Skills · Figma: "Skills" (breakpoint = desktop | tablet | mobile). A headline and a row of SkillItems. */
export function Skills({ headline = 'Skills', items }: SkillsProps) {
  return (
    <section className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.headline}>{headline}</h2>
        <ul className={styles.group}>
          {items.map((item) => (
            <li key={item.headline}>
              <SkillItem {...item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
