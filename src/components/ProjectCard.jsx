import { ProjectVisual } from './EngineeringVisuals.jsx'
import styles from '../styles/App.module.css'

export default function ProjectCard({
  project,
  onOpen,
  featured = false,
}) {
  return (
    <article
      className={`
        ${styles.projectCard}
        ${featured ? styles.featuredCard : ''}
        ${project.draft ? styles.draftCard : ''}
      `}
    >
      <ProjectVisual
        type={project.visual}
        compact
      />

      <div className={styles.projectCardBody}>
        <span className={styles.kicker}>
          {project.eyebrow || project.category}
        </span>

        <h3>{project.title}</h3>

        <p>{project.summary}</p>

        <div
          className={styles.tagRow}
          aria-label={`${project.title} technologies`}
        >
          {project.tags
            ?.slice(0, 4)
            .map((tag) => (
              <span key={tag}>
                {tag}
              </span>
            ))}
        </div>

        {project.metrics?.length > 0 && (
          <div className={styles.miniMetrics}>
            {project.metrics
              .slice(0, 3)
              .map((metric) => (
                <span key={metric}>
                  {metric}
                </span>
              ))}
          </div>
        )}
      </div>

      <div className={styles.cardActions}>
        <button
          className={styles.textButton}
          onClick={() => onOpen(project)}
        >
          View details{' '}
          <span aria-hidden="true">
            →
          </span>
        </button>

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        )}
      </div>
    </article>
  )
}
