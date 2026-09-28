import { About, Footer, Hero, Navigation, ProjectCard, Skills } from '../../components';
import { content as defaultContent, type PortfolioContent } from '../../content';

export type PortfolioProps = {
  /** All words and images on the page. Defaults to the demo content in content.ts. */
  content?: PortfolioContent;
};

/**
 * The page · Figma: "<1280 (Desktop)", "<800 (Tablet)", ">800 (Mobile)"
 * Three Figma frames, one page in code. Only components, no new styles.
 * Every second project card gets the grey background, like in Figma.
 */
export function Portfolio({ content = defaultContent }: PortfolioProps) {
  return (
    <>
      <Navigation {...content.navigation} />
      <main>
        <Hero {...content.hero} />
        <div id="work">
          {content.projects.map((project, index) => (
            <ProjectCard key={project.headline} {...project} hasBackground={index % 2 === 1} />
          ))}
        </div>
        <About {...content.about} />
        <Skills {...content.skills} />
      </main>
      <Footer {...content.footer} />
    </>
  );
}
