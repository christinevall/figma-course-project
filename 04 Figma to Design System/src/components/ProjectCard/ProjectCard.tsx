import styles from './ProjectCard.module.css';

export type ProjectCardProps = {
  /** Figma: `headline`. The project name. */
  headline: string;
  /** Figma: `description`. One or two sentences about the project. */
  description: string;
  /** Figma: the `media` slot. Path to the image, shown 16:9. */
  image: string;
  /** Describes the image for screen readers. */
  imageAlt?: string;
  /** The text of the link under the description. */
  linkLabel?: string;
  /** Where the link goes. */
  href?: string;
  /** Figma: `hasBG`. A grey band behind the card. */
  hasBackground?: boolean;
};

/**
 * ProjectCard · Figma: "ProjectCard" (breakpoint = desktop | tablet | mobile)
 *
 * Image on top on mobile, image left and text right from 800px.
 */
export function ProjectCard({
  headline,
  description,
  image,
  imageAlt = '',
  linkLabel = 'find out more →',
  href = '#',
  hasBackground = false,
}: ProjectCardProps) {
  return (
    <article className={[styles.projectCard, hasBackground && styles.raised].filter(Boolean).join(' ')}>
      <div className={styles.container}>
        <img className={styles.media} src={image} alt={imageAlt} loading="lazy" />
        <div className={styles.content}>
          <h2 className={styles.headline}>{headline}</h2>
          <p>{description}</p>
          <a className={styles.link} href={href}>
            {linkLabel}
          </a>
        </div>
      </div>
    </article>
  );
}
