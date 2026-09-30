import styles from '../styles/App.module.css'


// ============================================================
// RISC-V / PROCESSOR PIPELINE
// ============================================================

export function PipelineVisual({ compact = false }) {
  const stages = ['IF', 'ID', 'EX', 'MEM', 'WB']

  return (
    <div
      className={`${styles.pipeline} ${
        compact ? styles.compactVisual : ''
      }`}
      aria-hidden="true"
    >
      <div className={styles.pipelineLine} />
      <div className={styles.pipelinePulse} />

      {stages.map((stage) => (
        <span
          key={stage}
          className={styles.pipelineStage}
        >
          {stage}
        </span>
      ))}
    </div>
  )
}


// ============================================================
// DIGITAL / RTL WAVEFORM
// Appropriate for ALU / digital logic projects
// ============================================================

export function DigitalWaveformVisual({ compact = false }) {
  return (
    <div
      className={`${styles.waveform} ${
        compact ? styles.compactVisual : ''
      }`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 500 150"
        role="presentation"
        focusable="false"
      >
        <path
          className={styles.gridLine}
          d="
            M0 30H500
            M0 75H500
            M0 120H500
            M50 0V150
            M150 0V150
            M250 0V150
            M350 0V150
            M450 0V150
          "
        />

        <path
          className={styles.wavePath}
          d="
            M0 100
            H55 V45
            H120 V100
            H185 V45
            H250 V100
            H315 V45
            H380 V100
            H445 V45
            H500
          "
        />
      </svg>
    </div>
  )
}
// Backward-compatible export used elsewhere in App.jsx
export const WaveformVisual = DigitalWaveformVisual

// ============================================================
// ANALOG TEMPERATURE CONTROLLER
// Smooth temperature response + hysteresis threshold region
// ============================================================

export function HysteresisVisual({ compact = false }) {
  return (
    <div
      className={`${styles.waveform} ${
        compact ? styles.compactVisual : ''
      }`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 500 150"
        role="presentation"
        focusable="false"
      >
        {/* engineering grid */}
        <path
          className={styles.gridLine}
          d="
            M0 30H500
            M0 75H500
            M0 120H500
            M50 0V150
            M150 0V150
            M250 0V150
            M350 0V150
            M450 0V150
          "
        />

        {/* hysteresis operating band */}
        <rect
          x="0"
          y="53"
          width="500"
          height="35"
          fill="rgba(14, 165, 233, 0.08)"
        />

        {/* upper threshold */}
        <line
          x1="0"
          y1="53"
          x2="500"
          y2="53"
          stroke="#7dd3fc"
          strokeWidth="1.5"
          strokeDasharray="7 7"
        />

        {/* lower threshold */}
        <line
          x1="0"
          y1="88"
          x2="500"
          y2="88"
          stroke="#7dd3fc"
          strokeWidth="1.5"
          strokeDasharray="7 7"
        />

        {/* smooth heating / cooling response */}
        <path
          className={styles.wavePath}
          d="
            M0 115
            C55 112, 90 105, 125 90
            C165 72, 190 43, 235 38
            C280 33, 315 45, 345 62
            C385 84, 420 105, 500 112
          "
        />

        {/* switching points */}
        <circle cx="158" cy="77" r="5" fill="#0284c7" />
        <circle cx="365" cy="73" r="5" fill="#0284c7" />
      </svg>
    </div>
  )
}


// ============================================================
// LINEAR DC POWER SUPPLY
// Rectified/filter ripple + regulated DC output
// ============================================================

export function PowerSupplyVisual({ compact = false }) {
  return (
    <div
      className={`${styles.waveform} ${
        compact ? styles.compactVisual : ''
      }`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 500 150"
        role="presentation"
        focusable="false"
      >
        <path
          className={styles.gridLine}
          d="
            M0 30H500
            M0 75H500
            M0 120H500
            M50 0V150
            M150 0V150
            M250 0V150
            M350 0V150
            M450 0V150
          "
        />

        {/* filtered rectifier ripple */}
        <path
          d="
            M0 48
            C20 38, 35 38, 55 48
            C75 58, 90 58, 110 48
            C130 38, 145 38, 165 48
            C185 58, 200 58, 220 48
            C240 38, 255 38, 275 48
            C295 58, 310 58, 330 48
            C350 38, 365 38, 385 48
            C405 58, 420 58, 440 48
            C460 38, 480 39, 500 48
          "
          fill="none"
          stroke="#7dd3fc"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* regulated DC output */}
        <path
          className={styles.wavePath}
          d="
            M0 103
            C80 102, 150 104, 220 103
            C290 102, 360 104, 430 103
            C455 102.5, 478 103.5, 500 103
          "
        />

        {/* visual transition / regulation arrow */}
        <path
          d="M250 65 V88"
          stroke="#38bdf8"
          strokeWidth="2"
          strokeDasharray="4 5"
        />

        <path
          d="M244 82 L250 89 L256 82"
          fill="none"
          stroke="#38bdf8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}


// ============================================================
// BRIDGE / DYNAMIC SYSTEM RESPONSE
// Damped oscillatory response rather than a digital waveform
// ============================================================

export function DampedResponseVisual({ compact = false }) {
  return (
    <div
      className={`${styles.waveform} ${
        compact ? styles.compactVisual : ''
      }`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 500 150"
        role="presentation"
        focusable="false"
      >
        <path
          className={styles.gridLine}
          d="
            M0 30H500
            M0 75H500
            M0 120H500
            M50 0V150
            M150 0V150
            M250 0V150
            M350 0V150
            M450 0V150
          "
        />

        {/* equilibrium axis */}
        <line
          x1="0"
          y1="75"
          x2="500"
          y2="75"
          stroke="#bae6fd"
          strokeWidth="1.5"
        />

        {/* damped structural response */}
        <path
          className={styles.wavePath}
          d="
            M0 75
            C18 15, 38 15, 58 75
            C78 125, 98 125, 118 75
            C138 35, 158 35, 178 75
            C198 108, 218 108, 238 75
            C258 49, 278 49, 298 75
            C318 95, 338 95, 358 75
            C378 60, 398 60, 418 75
            C438 86, 458 86, 478 75
            C486 70, 493 70, 500 75
          "
        />
      </svg>
    </div>
  )
}


// ============================================================
// QUANTUM RESEARCH
// ============================================================

export function QuantumVisual({ compact = false }) {
  return (
    <div
      className={`${styles.quantum} ${
        compact ? styles.compactVisual : ''
      }`}
      aria-hidden="true"
    >
      <span className={styles.quantumCore} />

      <span
        className={`${styles.orbit} ${styles.orbitOne}`}
      >
        <i />
      </span>

      <span
        className={`${styles.orbit} ${styles.orbitTwo}`}
      >
        <i />
      </span>

      <span
        className={`${styles.orbit} ${styles.orbitThree}`}
      >
        <i />
      </span>

      <span className={styles.quantumLabel}>
        |ψ⟩
      </span>
    </div>
  )
}


// ============================================================
// OTHER PROJECT TYPES
// ============================================================

export function GenericVisual({
  type = 'circuit',
  compact = false,
}) {
  const marks = {
    circuit: ['V+', 'R', '→', 'GND'],
    data: ['R²', 'σ', 'ŷ', 'AUC'],
    math: ['∇', '∂', '∫', 'ψ'],
    mechanical: ['↻', '90°', '⚙', 'DOF'],
  }

  return (
    <div
      className={`${styles.genericVisual} ${
        compact ? styles.compactVisual : ''
      }`}
      aria-hidden="true"
    >
      {(marks[type] || marks.circuit).map(
        (mark, index) => (
          <span key={`${mark}-${index}`}>
            {mark}
          </span>
        ),
      )}
    </div>
  )
}


// ============================================================
// VISUAL ROUTER
// ============================================================

export function ProjectVisual({
  type,
  compact = false,
}) {
  if (type === 'pipeline') {
    return <PipelineVisual compact={compact} />
  }

  if (
    type === 'digital-waveform' ||
    type === 'waveform'
  ) {
    return (
      <DigitalWaveformVisual compact={compact} />
    )
  }

  if (type === 'hysteresis') {
    return (
      <HysteresisVisual compact={compact} />
    )
  }

  if (type === 'power-supply') {
    return (
      <PowerSupplyVisual compact={compact} />
    )
  }

  if (type === 'damped-response') {
    return (
      <DampedResponseVisual compact={compact} />
    )
  }

  if (type === 'quantum') {
    return <QuantumVisual compact={compact} />
  }

  return (
    <GenericVisual
      type={type}
      compact={compact}
    />
  )
}