import {
  useMemo,
  useState,
} from 'react'

import headshot from './assets/headshot.jpg'

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
    'ASIC & RTL Design',
    'Computer Architecture',
    'Circuit Design',
    'Embedded Systems',
    'Quantum Computing',
    'Artificial Intelligence',
    'Applied Mathematics',
    'Finance',
  ]

  return (
    <section
      id="about"
      className={styles.section}
    >
      <SectionHeading
        eyebrow="About"
        title="Human first. Engineer by craft. Curious by nature."
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
            Mathematics. I enjoy
            building systems from
            the ground up and
            understanding the theory
            underneath them.
          </p>

          <p>
            My interests span
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
  return (
    <section
      id="experience"
      className={styles.section}
    >
      <SectionHeading
        eyebrow="Experience"
        title="Learning by building and serving"
      />

      <div
        className={styles.timeline}
      >
        <article>
          <span
            className={
              styles.timelineDate
            }
          >
            Aug 2026 — Present
          </span>

          <h3>
            Research Assistant
            {' · '}
            Oral Roberts University
          </h3>

          <p>
            Develop and validate
            Python, PyTorch, and
            Qiskit workflows for
            hybrid quantum-classical
            stochastic wireless-
            channel modeling,
            including training,
            simulation, numerical
            verification, and
            probabilistic evaluation.
          </p>
        </article>

        <article>
          <span
            className={
              styles.timelineDate
            }
          >
            Jan 2025 — Aug 2026
          </span>

          <h3>
            IT Support Specialist
            {' · '}
            Oral Roberts University
          </h3>

          <p>
            Diagnosed hardware and
            software issues and
            collaborated with network
            administration on campus
            system updates and
            integrations.
          </p>
        </article>

        <article>
          <span
            className={
              styles.timelineDate
            }
          >
            Leadership
          </span>

          <h3>
            Secretary
            {' · '}
            IEEE Student Branch,
            Oral Roberts University
          </h3>

          <p>
            Support student-branch
            organization and
            communication while
            staying connected to
            the broader electrical
            and computer engineering
            community.
          </p>
        </article>
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
          across digital hardware,
          ASIC/RTL, embedded systems,
          circuits, general
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
