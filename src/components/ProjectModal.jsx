import {
  useEffect,
  useRef,
  useState,
} from 'react'

import {
  getProjectMedia,
} from '../data/projectMedia.js'

import styles from '../styles/App.module.css'


function publicUrl(path) {
  if (!path) {
    return ''
  }

  const cleanPath =
    path.replace(/^\/+/, '')

  return (
    `${import.meta.env.BASE_URL}` +
    cleanPath
  )
}


function MediaViewer({
  media,
  activeIndex,
  onChange,
}) {
  if (!media.length) {
    return null
  }

  const active =
    media[activeIndex]

  return (
    <section
      className={
        styles.projectMediaSection
      }
      aria-label="Project media"
    >
      <div
        className={
          styles.projectMediaStage
        }
      >
        {active.type === 'video' ? (
          <video
            key={active.src}
            controls
            preload="metadata"
            playsInline
            poster={
              active.poster
                ? publicUrl(
                    active.poster,
                  )
                : undefined
            }
          >
            <source
              src={publicUrl(
                active.src,
              )}
              type="video/mp4"
            />

            Your browser does not
            support HTML video.
          </video>
        ) : (
          <a
            href={publicUrl(
              active.src,
            )}
            target="_blank"
            rel="noreferrer"
            className={
              styles.projectMediaLink
            }
            aria-label={
              'Open full-resolution ' +
              'project image'
            }
          >
            <img
              src={publicUrl(
                active.src,
              )}
              alt={
                active.alt ?? ''
              }
              decoding="async"
            />
          </a>
        )}
      </div>

      {active.caption && (
        <p
          className={
            styles.projectMediaCaption
          }
        >
          {active.caption}
        </p>
      )}

      {media.length > 1 && (
        <div
          className={
            styles.projectMediaThumbs
          }
          aria-label={
            'Choose project media'
          }
        >
          {media.map(
            (item, index) => {
              const selected =
                index === activeIndex

              return (
                <button
                  key={
                    `${item.src}-${index}`
                  }
                  type="button"
                  className={
                    selected
                      ? styles.projectMediaThumbActive
                      : styles.projectMediaThumb
                  }
                  onClick={() =>
                    onChange(index)
                  }
                  aria-pressed={
                    selected
                  }
                  aria-label={
                    `Show media ${
                      index + 1
                    } of ${
                      media.length
                    }`
                  }
                >
                  {item.type ===
                  'video' ? (
                    item.poster ? (
                      <img
                        src={publicUrl(
                          item.poster,
                        )}
                        alt=""
                      />
                    ) : (
                      <span
                        className={
                          styles.videoThumb
                        }
                        aria-hidden="true"
                      >
                        ▶
                      </span>
                    )
                  ) : (
                    <img
                      src={publicUrl(
                        item.src,
                      )}
                      alt=""
                      loading="lazy"
                    />
                  )}
                </button>
              )
            },
          )}
        </div>
      )}
    </section>
  )
}


export default function ProjectModal({
  project,
  onClose,
}) {
  const dialogRef =
    useRef(null)

  const closeButtonRef =
    useRef(null)

  const [
    activeMediaIndex,
    setActiveMediaIndex,
  ] = useState(0)

  const media = project
    ? getProjectMedia(
        project.id,
      )
    : []

  useEffect(() => {
    setActiveMediaIndex(0)
  }, [project?.id])

  useEffect(() => {
    if (!project) {
      return undefined
    }

    const dialog =
      dialogRef.current

    if (
      dialog &&
      !dialog.open
    ) {
      dialog.showModal()

      closeButtonRef
        .current
        ?.focus()
    }

    const oldOverflow =
      document.body.style.overflow

    document.body.style.overflow =
      'hidden'

    return () => {
      document.body.style.overflow =
        oldOverflow

      if (
        dialog &&
        dialog.open
      ) {
        dialog.close()
      }
    }
  }, [project])

  if (!project) {
    return null
  }

  function handleBackdropClick(
    event,
  ) {
    if (
      event.target ===
      event.currentTarget
    ) {
      onClose()
    }
  }

  function handleCancel(event) {
    // Keep React state and
    // native dialog state synced.
    event.preventDefault()
    onClose()
  }

  return (
    <dialog
      ref={dialogRef}
      className={
        styles.projectDialog
      }
      aria-labelledby={
        'project-dialog-title'
      }
      onCancel={handleCancel}
      onClick={
        handleBackdropClick
      }
    >
      <article
        className={
          styles.projectDialogInner
        }
        onClick={(event) =>
          event.stopPropagation()
        }
      >
        <button
          ref={closeButtonRef}
          type="button"
          className={
            styles.projectDialogClose
          }
          onClick={onClose}
          aria-label={
            'Close project details'
          }
        >
          ×
        </button>

        <header
          className={
            styles.projectDialogHeader
          }
        >
          <span
            className={
              styles.kicker
            }
          >
            {project.eyebrow ||
              project.category}
          </span>

          <h2
            id="project-dialog-title"
          >
            {project.title}
          </h2>

          <p>
            {project.summary}
          </p>

          {project.tags?.length >
            0 && (
            <div
              className={
                styles.tagRow
              }
            >
              {project.tags.map(
                (tag) => (
                  <span key={tag}>
                    {tag}
                  </span>
                ),
              )}
            </div>
          )}
        </header>

        <MediaViewer
          media={media}
          activeIndex={
            activeMediaIndex
          }
          onChange={
            setActiveMediaIndex
          }
        />

        {project.metrics?.length >
          0 && (
          <section
            className={
              styles.projectMetricGrid
            }
            aria-label={
              'Project results'
            }
          >
            {project.metrics.map(
              (metric) => (
                <div key={metric}>
                  {metric}
                </div>
              ),
            )}
          </section>
        )}

        {project.details?.length >
          0 && (
          <section
            className={
              styles.projectDetailsSection
            }
          >
            <h3>
              Engineering details
            </h3>

            <div
              className={
                styles.projectDetailGrid
              }
            >
              {project.details.map(
                (
                  detail,
                  index,
                ) => (
                  <article
                    key={
                      `${project.id}-${index}`
                    }
                  >
                    <span
                      aria-hidden="true"
                    >
                      {String(
                        index + 1,
                      ).padStart(
                        2,
                        '0',
                      )}
                    </span>

                    <p>
                      {detail}
                    </p>
                  </article>
                ),
              )}
            </div>
          </section>
        )}

        <footer
          className={
            styles.projectDialogFooter
          }
        >
          {project.github && (
            <a
              href={
                project.github
              }
              target="_blank"
              rel="noreferrer"
              className={
                styles.primaryButton
              }
            >
              View GitHub
            </a>
          )}

          <button
            type="button"
            className={
              styles.secondaryButton
            }
            onClick={onClose}
          >
            Close project
          </button>
        </footer>
      </article>
    </dialog>
  )
}
