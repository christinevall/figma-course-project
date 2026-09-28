import { Button } from '../Button';
import styles from './About.module.css';

export type AboutProps = {
  /** Figma: `headline`. */
  headline: string;
  /** Figma: `description`. A short paragraph. */
  description: string;
  /** Figma: the `media` slot. Path to the image, shown square. */
  image: string;
  /** Describes the image for screen readers. */
  imageAlt?: string;
  /** Figma: `hadButton`. Add a button (outlined), or leave it out to hide it. */
  button?: { label: string; href: string };
};

/**
 * About · Figma: "About" (breakpoint = desktop | tablet | mobile)
 *
 * Image on top on mobile, text left and image right from 800px.
 */
export function About({ headline, description, image, imageAlt = '', button }: AboutProps) {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.headline}>{headline}</h2>
          <p>{description}</p>
          {button && <Button {...button} variant="secondary" className={styles.button} />}
        </div>
        <img className={styles.media} src={image} alt={imageAlt} loading="lazy" />
      </div>
    </section>
  );
}
