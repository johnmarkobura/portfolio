import {
  useMemo,
  useState,
} from 'react'

import headshot from './assets/headshot.jpg'
import aboutCircuit from './assets/about-circuit.jpg'

import ContactForm
  from './components/ContactForm.jsx'

import ProjectCard
  from './components/ProjectCard.jsx'

import ProjectModal
  from './components/ProjectModal.jsx'

import {
  QuantumVisual,
  WaveformVisual,
} from './components/EngineeringVisuals.jsx'

import {
  featuredProjects,
  moreProjects,
  projectCategories,
} from './data/projects.js'

import styles from './styles/App.module.css'

const resumeUrl =
  `${import.meta.env.BASE_URL}` +
  `resume/John-Mark-Obura-Resume.pdf`

function SectionHeading({
  eyebrow,
  title,
  children,
}) {
  return (
    <header
      className={styles.sectionHeading}
    >
      <span className={styles.kicker}>
        {eyebrow}
      </span>

      <h2>
        {title}
      </h2>

      {children && (
        <p>
          {children}
        </p>
      )}
    </header>
  )
}

function Header() {
  const [open, setOpen] =
    useState(false)

const links = [
  ['About', '#about'],
  ['Projects', '#projects'],
  ['Research', '#research'],
  ['Experience', '#experience'],
  ['Education', '#education'],
  ['Certifications', '#certifications'],
  [
    'Beyond Engineering',
    '#beyond',
  ],
  ['Contact', '#contact'],
]

  return (
    <header
      className={styles.siteHeader}
    >
      <a
        className={styles.brand}
        href="#top"
        aria-label="John Mark Obura home"
      >
        <span
          className={styles.brandMark}
        >
          JM
        </span>

        <span>
          John Mark Obura
        </span>
      </a>

      <button
        className={styles.menuButton}
        aria-expanded={open}
        aria-controls="site-nav"
        onClick={() =>
          setOpen((value) => !value)
        }
      >
        <span className="sr-only">
          Toggle navigation
        </span>

        <span aria-hidden="true">
          {open ? '×' : '☰'}
        </span>
      </button>

      <nav
        id="site-nav"
        className={`
          ${styles.nav}
          ${
            open
              ? styles.navOpen
              : ''
          }
        `}
        aria-label="Primary navigation"
      >
        {links.map(
          ([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() =>
                setOpen(false)
              }
            >
              {label}
            </a>
          ),
        )}

        <a
          className={styles.navResume}
          href={resumeUrl}
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section
      id="top"
      className={styles.hero}
      aria-labelledby="hero-title"
    >
      <div className={styles.heroCopy}>
        <span
          className={
            styles.eyebrowPill
          }
        >
          Electrical Engineering
          {' · '}
          Mathematics
          {' · '}
          Research
        </span>

        <h1 id="hero-title">
          John Mark Obura
        </h1>

        <p
          className={styles.heroRoles}
        >
          Electrical Engineering
          Student
          <span>•</span>

          Mathematics Enthusiast
          <span>•</span>

          Researcher
          <span>•</span>

          Builder
        </p>

        <p className={styles.heroLead}>
          I love understanding how
          difficult systems work —
          from transistor-level
          circuits and processor
          pipelines to mathematics,
          quantum computing, and
          artificial intelligence.

          {' '}

          I do not expect to know
          everything before I begin;
          I am willing to learn, ask
          good questions, and work
          hard until I understand
          the system.
        </p>

        <div
          className={
            styles.heroActions
          }
        >
          <a
            className={
              styles.primaryButton
            }
            href="#projects"
          >
            Explore my work
          </a>

          <a
            className={
              styles.secondaryButton
            }
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
          >
            Download resume
          </a>
        </div>

        <div
          className={styles.socialRow}
          aria-label="Social links"
        >
          <a
            href="https://github.com/johnmarkobura"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/johnmarkobura"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="mailto:oburajohnmark7@gmail.com"
          >
            Email
          </a>
        </div>
      </div>

      <div className={styles.heroVisual}>
        <div className={styles.photoFrame}>
          <img
            src={headshot}
            alt="John Mark Obura smiling in professional attire"
            width="1200"
            height="1200"
            decoding="async"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  )
}

function About() {
  const interests = [
    'Power Engineering',
    'ASIC & RTL Design',
    'Computer Architecture',
    'Circuit Design',
    'Embedded Systems',
    'Quantum Computing',
    'Artificial Intelligence',
    'Applied Mathematics',
  ]

  return (
    <section
      id="about"
      className={styles.section}
    >
      <SectionHeading
        eyebrow="About"
        title="Fueled by Purpose. Built to Engineer"
      >
        Engineering is a major part
        of what I do, but it is not
        all of who I am.
      </SectionHeading>

      <div
        className={styles.aboutGrid}
      >
        <div
          className={styles.proseCard}
        >
          <p>
            I am an Electrical
            Engineering student at
            Oral Roberts University
            with a minor in
            Mathematics. My greatest skill 
            is that I am willing to learn.
            I enjoy building systems from
            the ground up and
            understanding the theory
            underneath them.
          </p>

          <p>
            My interests span power distribution,
            digital hardware,
            computer architecture,
            analog circuits,
            embedded systems,
            quantum computing, AI,
            and applied mathematics.

            {' '}

            The common thread is
            curiosity: I like
            difficult problems and
            I am willing to put in
            the disciplined work
            required to understand
            them deeply.
          </p>

          <p>
            I care about being
            teachable. My first
            response to a new tool
            or unfamiliar system is
            not “I cannot do that”;
            it is “what do I need
            to learn to do it well?”
          </p>

          <div
            className={styles.aboutPhoto}
          >
            <img
              src={aboutCircuit}
              alt="John Mark Obura working on an electronics circuit in the laboratory"
              loading="lazy"
              decoding="async"
            />
          </div>

          </div>

          <div
            className={
              styles.interestPanel
            }
          >
            <span
              className={styles.kicker}
            >
              What I am exploring
            </span>

            <div
              className={
                styles.interestCloud
              }
            >
              {interests.map(
                (interest) => (
                  <span key={interest}>
                    {interest}
                  </span>
                ),
              )}
            </div>

            <WaveformVisual compact />
          </div>
      </div>
    </section>
  )
}

function Projects({ onOpen }) {
  const [filter, setFilter] =
    useState('All')

  const filtered = useMemo(
    () =>
      moreProjects.filter(
        (project) =>
          filter === 'All' ||
          project.category === filter,
      ),
    [filter],
  )

  return (
    <section
      id="projects"
      className={styles.section}
    >
      <SectionHeading
        eyebrow="Engineering work"
        title="Featured projects"
      >
        The strongest projects lead.
        The rest stay discoverable
        so a recruiter in hardware,
        embedded, data, mathematics,
        CAD, or general engineering
        can follow the thread that
        matters to them.
      </SectionHeading>

      <div
        className={
          styles.featuredGrid
        }
      >
        {featuredProjects.map(
          (project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={onOpen}
              featured
            />
          ),
        )}
      </div>

      <div
        className={
          styles.moreProjectsHeader
        }
      >
        <div>
          <span
            className={styles.kicker}
          >
            More projects
          </span>

          <h3>
            Explore the broader
            portfolio
          </h3>
        </div>

        <div
          className={styles.filters}
          aria-label="Filter projects"
        >
          {projectCategories.map(
            (category) => (
              <button
                key={category}
                className={
                  filter === category
                    ? styles.activeFilter
                    : ''
                }
                onClick={() =>
                  setFilter(category)
                }
                aria-pressed={
                  filter === category
                }
              >
                {category}
              </button>
            ),
          )}
        </div>
      </div>

      <div
        className={styles.projectGrid}
      >
        {filtered.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpen={onOpen}
          />
        ))}
      </div>
    </section>
  )
}

function Research() {
  return (
    <section
      id="research"
      className={`
        ${styles.section}
        ${styles.researchSection}
      `}
    >
      <div
        className={
          styles.researchVisual
        }
      >
        <QuantumVisual />
      </div>

      <div>
        <SectionHeading
          eyebrow="Research"
          title="Quantum computing + artificial intelligence"
        >
          Research should show depth
          without publishing work
          that is not ready to be
          public.
        </SectionHeading>

        <p>
          As a Research Assistant
          at Oral Roberts University,
          I develop and validate
          Python, PyTorch, and Qiskit
          workflows for hybrid
          quantum-classical
          stochastic wireless-channel
          modeling.
        </p>

        <p>
          I focus on reproducible
          training and simulation
          pipelines, numerical
          verification, and
          probabilistic evaluation.

          {' '}

          Architecture details,
          unpublished experimental
          configurations, and
          unpublished findings
          remain intentionally
          high-level here.
        </p>

        <div
          className={styles.tagRow}
        >
          {[
            'Python',
            'PyTorch',
            'Qiskit',
            'Quantum Computing',
            'Probabilistic Modeling',
            'Research Reproducibility',
          ].map((tag) => (
            <span key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

function Experience() {
  const experiences = [
    {
      date: 'Aug 2026 — Present',
      type: 'Research',
      role: 'Research Assistant',
      organization: 'Oral Roberts University',
      location: 'Tulsa, Oklahoma',

      bullets: [
        'Develop and validate Python, PyTorch, and Qiskit workflows for hybrid quantum-classical stochastic wireless-channel modeling.',
        'Extend and test research code, run controlled experiments, and evaluate model behavior through numerical and probabilistic analysis.',
        'Support reproducible experimentation through structured validation, documented configurations, and careful comparison of computational results.',
      ],

      tags: [
        'Python',
        'PyTorch',
        'Qiskit',
        'Quantum Computing',
        'Numerical Validation',
      ],
    },

    {
      date: 'Jan 2025 — Aug 2026',
      type: 'Technical Support',
      role: 'IT Support Specialist',
      organization: 'Oral Roberts University',
      location: 'Tulsa, Oklahoma',

      bullets: [
        'Diagnosed and resolved 100+ hardware and software issues using SolarWinds Service Desk across university computing environments.',
        'Collaborated with the Network Administrator on campus system updates and integrations supporting a community of more than 7,000 students.',
        'Applied CompTIA A+ and Network+ fundamentals to endpoint troubleshooting, networking, hardware diagnostics, and user support.',
      ],

      tags: [
        'Hardware Troubleshooting',
        'Networking',
        'SolarWinds',
        'Systems Support',
      ],
    },

    {
      date: '2026 — Present',
      type: 'Engineering Leadership',
      role: 'Secretary',
      organization: 'IEEE Student Branch · Oral Roberts University',
      location: 'Tulsa, Oklahoma',

      bullets: [
        'Support chapter administration, communication, and organization for the university IEEE Student Branch.',
        'Help organize hands-on technical activities involving circuit design, soldering, embedded systems, and practical hardware skills.',
        'Contribute to student engineering engagement by helping coordinate technical events and opportunities for peer learning.',
      ],

      tags: [
        'IEEE',
        'Leadership',
        'Technical Workshops',
        'Engineering Community',
      ],
    },
  ]

  return (
    <section
      id="experience"
      className={styles.section}
    >
      <SectionHeading
        eyebrow="Experience"
        title="Research, technical work, and engineering leadership."
      >
        My experience spans research,
        hands-on technical support,
        and leadership within the
        engineering community.
      </SectionHeading>

      <div
        className={styles.experienceList}
      >
        {experiences.map(
          (experience) => (
            <article
              key={`${experience.role}-${experience.organization}`}
              className={styles.experienceCard}
            >
              <div
                className={styles.experienceMeta}
              >
                <span
                  className={styles.experienceDate}
                >
                  {experience.date}
                </span>

                <span
                  className={styles.experienceType}
                >
                  {experience.type}
                </span>
              </div>

              <div
                className={styles.experienceContent}
              >
                <h3>
                  {experience.role}
                </h3>

                <p
                  className={styles.experienceOrganization}
                >
                  {experience.organization}
                  <span aria-hidden="true">
                    {' · '}
                  </span>
                  {experience.location}
                </p>

                <ul
                  className={styles.experienceBullets}
                >
                  {experience.bullets.map(
                    (bullet) => (
                      <li key={bullet}>
                        {bullet}
                      </li>
                    ),
                  )}
                </ul>

                <div
                  className={styles.tagRow}
                  aria-label={`${experience.role} skills`}
                >
                  {experience.tags.map(
                    (tag) => (
                      <span key={tag}>
                        {tag}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </article>
          ),
        )}
      </div>
    </section>
  )
}

function Education() {
  const coursework = [
    'Network Analysis I',
    'Network Analysis II',
    'Electronics',
    'Electronics Laboratory',
    'Engineering Computational Methods',
    'Control Systems',
    'Engineering Graphics',
    'Differential Equations',
    'Calculus III',
    'Probability & Statistics',
    'Digital Systems Design',
    'Computer Networks & Communications',
    'Microprocessor Design',
    'Data Structures',
  ]

  return (
    <section
      id="education"
      className={styles.section}
    >
      <SectionHeading
        eyebrow="Education"
        title="Education"
      >
        My coursework spans circuits,
        digital systems, computing,
        controls, networking, and
        applied mathematics.
      </SectionHeading>

      <div
        className={styles.educationGrid}
      >
        <article
          className={styles.educationCard}
        >
          <div
            className={styles.educationHeader}
          >
            <div>
              <span
                className={styles.educationYears}
              >
                2024 — 2028
              </span>

              <h3>
                Oral Roberts University
              </h3>

              <p
                className={
                  styles.educationLocation
                }
              >
                Tulsa, Oklahoma
              </p>
            </div>

            <div
              className={styles.educationBadge}
            >
              GPA 4.0
            </div>
          </div>

          <div
            className={styles.educationDegree}
          >
            <h4>
              B.S. Electrical Engineering
            </h4>

            <p>
              Minor in Mathematics
              {' · '}
              Honors
            </p>
          </div>

          <div
            className={styles.courseworkSection}
          >
            <span
              className={styles.kicker}
            >
              Relevant Coursework
            </span>

            <div
              className={styles.courseworkGrid}
            >
              {coursework.map(
                (course) => (
                  <span key={course}>
                    {course}
                  </span>
                ),
              )}
            </div>
          </div>
        </article>

        <article
          className={styles.educationCard}
        >
          <div
            className={styles.educationHeader}
          >
            <div>
              <span
                className={styles.educationYears}
              >
                2022 — 2024
              </span>

              <h3>
                Kabojja International School
              </h3>

              <p
                className={
                  styles.educationLocation
                }
              >
                Kampala, Uganda
              </p>
            </div>

            <div
              className={styles.educationBadge}
            >
              3 A*s
            </div>
          </div>

          <div
            className={styles.educationDegree}
          >
            <h4>
              Cambridge International
              AS & A Level
            </h4>

            <p>
              GPA 4.0
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}

function Certifications() {
  const certifications = [
    {
      title: 'Complete Python Mastery',
      issuer: 'Code With Mosh',
      area: 'Programming · Python',

      certificates: [
        {
          label: 'View certificate',
          file: 'certificates/python-mastery.pdf',
        },
      ],
    },

    {
      title: 'C++ Programming',
      issuer: 'Code With Mosh',
      area: 'Programming · C++',

      certificates: [
        {
          label: 'Certificate 1',
          file: 'certificates/cpp-programming-1.pdf',
        },

        {
          label: 'Certificate 2',
          file: 'certificates/cpp-programming-2.pdf',
        },

        {
          label: 'Certificate 3',
          file: 'certificates/cpp-programming-3.pdf',
        },
      ],
    },

    {
      title: 'Introduction to Microprocessors',
      issuer: 'Arm EducationX',
      area: 'Computer Architecture · Embedded Systems',

      certificates: [
        {
          label: 'View certificate',
          file: 'certificates/arm-microprocessors.pdf',
        },
      ],
    },

    {
      title: 'Activating Leadership Potential',
      issuer: 'African Leadership Development Center',
      area: 'Leadership',

      certificates: [
        {
          label: 'View certificate',
          file: 'certificates/leadership-certificate-alp.pdf',
        },
      ],
    },
  ]

  function certificateUrl(file) {
    return (
      `${import.meta.env.BASE_URL}` +
      file
    )
  }

  return (
    <section
      id="certifications"
      className={styles.section}
    >
      <SectionHeading
        eyebrow="Certifications"
        title="Learning beyond the classroom."
      >
        Additional technical and
        professional training that
        has supported my development
        across programming, computing,
        engineering, and leadership.
      </SectionHeading>

      <div
        className={
          styles.certificationGrid
        }
      >
        {certifications.map(
          (certification) => (
            <article
              key={certification.title}
              className={
                styles.certificationCard
              }
            >
              <div
                className={
                  styles.certificateIcon
                }
                aria-hidden="true"
              >
                ✓
              </div>

              <div
                className={
                  styles.certificateContent
                }
              >
                <span
                  className={
                    styles.certificateArea
                  }
                >
                  {certification.area}
                </span>

                <h3>
                  {certification.title}
                </h3>

                <p>
                  {certification.issuer}
                </p>

                <div
                  className={
                    styles.certificateLinks
                  }
                >
                  {certification.certificates.map(
                    (certificate) => (
                      <a
                        key={certificate.file}
                        href={certificateUrl(
                          certificate.file,
                        )}
                        target="_blank"
                        rel="noreferrer"
                        className={
                          styles.certificateLink
                        }
                      >
                        {certificate.label}
                        <span
                          aria-hidden="true"
                        >
                          {' '}↗
                        </span>
                      </a>
                    ),
                  )}
                </div>
              </div>
            </article>
          ),
        )}
      </div>
    </section>
  )
}

function Mathematics() {
  return (
    <section
      className={styles.section}
    >
      <SectionHeading
        eyebrow="Mathematics"
        title="I like the theory underneath the system."
      >
        Mathematics is not just a
        minor on my transcript; it
        is one of the reasons
        engineering is interesting
        to me.
      </SectionHeading>

      <div
        className={styles.mathGrid}
      >
        <div
          className={
            styles.equationCard
          }
          aria-hidden="true"
        >
          <span>
            ∇²φ = 0
          </span>

          <span>
            e<sup>jωt</sup>
          </span>

          <span>
            dx/dt = f(t,x)
          </span>

          <span>
            P(A|B)
          </span>
        </div>

        <div
          className={styles.proseCard}
        >
          <p>
            I am especially
            interested in the point
            where abstract
            mathematical ideas
            become physical or
            computational systems:
            probability becomes
            stochastic modeling,
            differential equations
            become dynamic
            simulation, and discrete
            logic becomes hardware.
          </p>

          <div
            className={styles.tagRow}
          >
            {[
              'Calculus',
              'Differential Equations',
              'Probability & Statistics',
              'Vector Calculus',
              'Numerical Methods',
              'Discrete Thinking',
            ].map((tag) => (
              <span key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function BeyondEngineering() {
  const cards = [
    {
      title: 'Faith',
      text:
        'My Christian faith is central to who I am and shapes how I approach learning, service, discipline, and relationships.',
      mark: '✝',
    },

    {
      title: 'Music',
      text:
        'Outside engineering, I love playing keyboard in worship and using music to serve God and others.',
      mark: '♫',
    },

    {
      title: 'Finance',
      text:
        'I am a finance enthusiast. I enjoy learning how markets, incentives, risk, mathematics, and technology intersect.',
      mark: '∑',
    },
  ]

  return (
    <section
      id="beyond"
      className={styles.section}
    >
      <SectionHeading
        eyebrow="Beyond engineering"
        title="There is a person behind the SystemVerilog."
      />

      <div
        className={styles.lifeGrid}
      >
        {cards.map((card) => (
          <article
            key={card.title}
            className={styles.lifeCard}
          >
            <span aria-hidden="true">
              {card.mark}
            </span>

            <h3>
              {card.title}
            </h3>

            <p>
              {card.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

function Honors() {
  const honors = [
    [
      'President’s List',
      'Oral Roberts University',
    ],

    [
      'Secretary',
      'IEEE Student Branch · Oral Roberts University',
    ],

    [
      'Valedictorian',
      'Kabojja International School',
    ],

    [
      'Director’s Award',
      'Academic / leadership distinction',
    ],

    [
      'Exemplary Leadership Award',
      'Leadership distinction',
    ],

    [
      'Best Delegate',
      'Model United Nations',
    ],

    [
      'Best Chair',
      'Model United Nations',
    ],
  ]

  return (
    <section
      className={styles.section}
    >
      <SectionHeading
        eyebrow="Honors & leadership"
        title="A longer story than one page of a résumé."
      />

      <div
        className={styles.honorsGrid}
      >
        {honors.map(
          ([title, detail]) => (
            <article
              key={`${title}-${detail}`}
            >
              <h3>
                {title}
              </h3>

              <p>
                {detail}
              </p>
            </article>
          ),
        )}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section
      id="contact"
      className={`
        ${styles.section}
        ${styles.contactSection}
      `}
    >
      <div>
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build something difficult."
        >
          I am interested in
          internships and
          engineering opportunities
          across power distribution,
          digital hardware, ASIC/RTL,
          embedded systems, circuits, general
          electrical engineering,
          and research.
        </SectionHeading>

        <div
          className={
            styles.contactLinks
          }
        >
          <a
            href="mailto:oburajohnmark7@gmail.com"
          >
            oburajohnmark7@gmail.com
          </a>

          <a
            href="https://github.com/johnmarkobura"
            target="_blank"
            rel="noreferrer"
          >
            github.com/johnmarkobura
          </a>

          <a
            href="https://www.linkedin.com/in/johnmarkobura"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/johnmarkobura
          </a>
        </div>
      </div>

      <ContactForm />
    </section>
  )
}

function Footer() {
  return (
    <footer
      className={styles.footer}
    >
      <p>
        © {new Date().getFullYear()}
        {' '}
        John Mark Obura.
        {' '}
        Built with React + Vite
        and hosted on GitHub Pages.
      </p>

      <a href="#top">
        Back to top ↑
      </a>
    </footer>
  )
}

export default function App() {
  const [
    selectedProject,
    setSelectedProject,
  ] = useState(null)

  return (
    <>
      <Header />

      <main
        id="main-content"
        className={styles.pageShell}
      >
        <Hero />

        <About />

        <Projects
          onOpen={setSelectedProject}
        />

        <Research />

        <Experience />

        <Education />

        <Certifications />

        <Mathematics />

        <BeyondEngineering />

        <Honors />

        <Contact />
      </main>

      <Footer />

      <ProjectModal
        project={selectedProject}
        onClose={() =>
          setSelectedProject(null)
        }
      />
    </>
  )
}
