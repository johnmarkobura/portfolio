export const projectCategories = [
  'All',
  'Digital Hardware',
  'Circuits',
  'Embedded',
  'Data & AI',
  'Math & Simulation',
  'CAD & Mechanical',
  'Software',
]

export const featuredProjects = [
  {
    id: 'riscv-pipeline',
    title: '32-bit RISC-V Five-Stage Processor',
    eyebrow: 'Digital Hardware · Computer Architecture',
    category: 'Digital Hardware',

    tags: [
      'SystemVerilog',
      'RISC-V',
      'Verification',
      'Computer Architecture',
    ],

    summary:
      'Extended a single-cycle datapath into a five-stage IF–ID–EX–MEM–WB pipeline with forwarding, load-use stalls, store-data forwarding, and control-hazard flushing.',

    metrics: [
      '14 RV32I instructions',
      '350 ps analytical critical path',
      '≈1.21 CPI',
      '≈1.77× estimated speedup',
    ],

    details: [
      'Designed and functionally verified a 32-bit RISC-V processor supporting arithmetic, logical, memory, branch, jump, and upper-immediate operations.',
      'Built a dedicated hazard unit for memory/writeback forwarding, load-use detection, bubble insertion, and branch/jump flushing.',
      'Created a self-checking pipeline stress test that exercises data hazards, control hazards, memory paths, and end-to-end execution.',
      'Compared the pipelined design against the earlier single-cycle version using a consistent analytical component-delay model; timing figures are estimates, not post-synthesis silicon results.',
    ],

    visual: 'pipeline',

    github:
      'https://github.com/johnmarkobura/riscv-pipelined-processor',

    assetHint:
      'Add your complete datapath PNG and a GTKWave hazard/forwarding screenshot.',
  },

  {
    id: 'rtl-alu',
    title: 'Parameterized RTL ALU',
    eyebrow: 'Digital Hardware · Arithmetic RTL',
    category: 'Digital Hardware',

    tags: [
      'Verilog',
      'Kogge–Stone',
      'RTL',
      'Self-checking Testbenches',
    ],

    summary:
      'A parameterized N-bit arithmetic/logic datapath with Kogge–Stone addition, staged barrel shifting, signed/unsigned comparisons, flags, and automated verification.',

    metrics: [
      '2,816 exhaustive 4-bit tests',
      '10,000+ 32-bit vectors',
      'Kogge–Stone adder',
      'Makefile automation',
    ],

    details: [
      'Implemented modular arithmetic, logic, comparison, shift, and flag-generation blocks in Verilog.',
      'Used a Kogge–Stone prefix adder for add/subtract operations and staged muxing for logical/arithmetic shifts.',
      'Separated correctness regression from waveform inspection using self-checking testbenches and Make targets.',
    ],

    visual: 'digital-waveform',

    github:
      'https://github.com/johnmarkobura/parameterized-rtl-alu',

    assetHint:
      'Add the ALU block diagram, datapath schematic, and GTKWave verification image.',
  },

  {
    id: 'residential-revit-mep',
    title: 'Residential Electrical Design | Revit MEP',
    eyebrow: 'Electrical Design · Power Distribution · BIM',
    category: 'Circuits',
    tags: ['Autodesk Revit MEP', 'Power Distribution', 'BIM', 'Electrical Documentation'],
    summary:
      'Modeled and documented the power, lighting, and electrical service systems for a three-bedroom residence using Autodesk Revit 2027 in a tutorial-guided BIM workflow.',
    metrics: [
      '120/240 V · single-phase',
      'Power, lighting & site sheets',
      'Panel P1 & circuit schedule',
      'Revit 2027 · BIM coordination',
    ],
    details: [
      'Coordinated linked architectural and mechanical models to place receptacles, dedicated appliance connections, lighting fixtures, switches, and electrical equipment.',
      'Assigned residential branch circuits, configured panelboard P1, and generated a panel schedule documenting the 120/240 V single-phase distribution system.',
      'Prepared electrical power, lighting, and site drawings together with a one-line diagram representing the utility transformer, meter, and panelboard service pathway.',
      'Produced E101 electrical site, E201 lighting, and E301 power drawing sheets. The work is an educational, tutorial-guided design exercise and is not issued for construction.',
      'Acknowledgment: Completed following Electric Rob’s Revit MEP Electrical tutorial from MFIA Inc. Consulting Engineers, using course-provided architectural and mechanical teaching resources.',
    ],
    visual: 'electrical-plan',
    github: 'https://github.com/johnmarkobura/Residential-3bedroom-Electrical-Design-Revit',
    documents: [
      {
        label: 'E101 · Electrical Site Plan',
        url: 'https://github.com/johnmarkobura/Residential-3bedroom-Electrical-Design-Revit/blob/main/Electrical%20Sheets/E101%20-%20SITE%20PLAN%20ELECTRICAL%20SHEET.pdf',
      },
      {
        label: 'E201 · Lighting Plan',
        url: 'https://github.com/johnmarkobura/Residential-3bedroom-Electrical-Design-Revit/blob/main/Electrical%20Sheets/E201%20-%20FLOOR%20PLAN%20LIGHTING%20SHEET.pdf',
      },
      {
        label: 'E301 · Power Plan',
        url: 'https://github.com/johnmarkobura/Residential-3bedroom-Electrical-Design-Revit/blob/main/Electrical%20Sheets/E301%20-%20FLOOR%20PLAN%20-%20POWER%20SHEET.pdf',
      },
    ],
    assetHint: 'Project drawing PDFs are available through the linked electrical sheets.',
  },

  {
    id: 'temperature-controller',
    title: 'Analog Temperature Controller',
    eyebrow: 'Circuits · Hardware Validation',
    category: 'Circuits',

    tags: [
      'LTspice',
      'Op-Amps',
      'Hysteresis',
      'Breadboarding',
    ],

    summary:
      'Designed, simulated, built, and tested a hysteretic temperature controller using an NTC thermistor, signal conditioning, Schmitt trigger, and BJT heater switch.',

    metrics: [
      '86.7°F ON',
      '88.7°F OFF',
      'LTspice + physical prototype',
      'Simulation-to-hardware analysis',
    ],

    details: [
      'Characterized the thermistor, developed a sensor model, and designed an analog signal-conditioning chain around a narrow voltage swing.',
      'Used transient LTspice analysis to model true hysteretic behavior over a heating/cooling cycle.',
      'Breadboarded the design and investigated threshold differences caused by op-amp saturation, component tolerances, transistor nonidealities, and thermal effects.',
    ],

    visual: 'hysteresis',

    github:
      'https://github.com/johnmarkobura/analog-temperature-controller',

    assetHint:
      'Add circuit schematic, physical prototype photo, and LTspice transient response.',
  },

  {
    id: 'dc-power-supply',
    title: 'Adjustable 2–9 V Linear DC Power Supply',
    eyebrow: 'Circuits · Power Electronics',
    category: 'Circuits',

    tags: [
      'LTspice',
      'Feedback',
      'Rectification',
      'BJT',
    ],

    summary:
      'Designed and verified a regulated supply with full-wave rectification, capacitive filtering, Zener referencing, op-amp feedback, and a transistor pass stage.',

    metrics: [
      '90.8–363.1 mA load sweep',
      '≈3.5 mV output change at 9 V',
      '2.45 Vpp worst-case rectifier ripple',
      '3.5 Vpp design limit',
    ],

    details: [
      'Sized the rectifier/filter and feedback network from circuit requirements rather than a single operating point.',
      'Automated LTspice parameter sweeps and measurements across four load conditions at maximum and minimum output settings.',
      'Verified load regulation and ripple behavior while keeping the reported results explicitly simulation-based.',
    ],

    visual: 'power-supply',

    github:
      'https://github.com/johnmarkobura/adjustable-dc-power-supply-ltspice',

    assetHint:
      'Add LTspice schematic plus 9 V load-regulation and rectifier-ripple plots.',
  },

  {
    id: 'quantum-ai-research',
    title: 'Quantum + AI Wireless-Channel Research',
    eyebrow: 'Research · Quantum Computing · AI',
    category: 'Data & AI',

    tags: [
      'Python',
      'PyTorch',
      'Qiskit',
      'Probabilistic Modeling',
    ],

    summary:
      'Research-assistant work on hybrid quantum-classical stochastic wireless-channel modeling, emphasizing reproducible training, simulation, numerical validation, and probabilistic evaluation.',

    metrics: [
      'Python',
      'PyTorch',
      'Qiskit',
      'Publication-sensitive details protected',
    ],

    details: [
      'Develop and validate research workflows for hybrid quantum-classical stochastic modeling.',
      'Build reproducible experiment and validation pipelines and compare model behavior using likelihood and distribution-agreement metrics.',
      'This portfolio intentionally keeps architecture details, unpublished experimental settings, and unpublished results at a high level until they are ready for public release.',
    ],

    visual: 'quantum',
    github: null,

    assetHint:
      'Use only publication-safe diagrams or figures approved for public release.',
  },
]

export const moreProjects = [
  {
    id: 'arduino-maze',
    title: 'Arduino IR Maze-Solving Robot',
    category: 'Embedded',

    tags: [
      'Arduino C/C++',
      'IR Sensors',
      'Servo Control',
      'Embedded Systems',
    ],

    summary:
      'Autonomous robot using infrared sensing, real-time decision logic, and servo control; one of three robots to complete the test course in the class competition.',

    github:
      'https://github.com/johnmarkobura/arduino-maze-robot',

    details: [
      'Integrated IR sensors and microcontroller I/O for obstacle detection.',
      'Implemented movement decisions and PWM-based wheel/servo control.',
      'Demonstrated embedded timing, sensor integration, and feedback-control fundamentals.',
    ],

    visual: 'circuit',

    assetHint:
      'Add robot photo, wiring diagram, and a short competition/demo clip.',
  },

  {
    id: 'heart-failure-logistic',
    title: 'Heart-Failure Mortality Prediction',
    category: 'Data & AI',

    tags: [
      'R',
      'Logistic Regression',
      'ROC/AUC',
      'Cross-Validation',
    ],

    summary:
      'Built and evaluated interpretable logistic-regression models using clinical variables, model diagnostics, ROC/AUC analysis, and 10-fold cross-validation.',

    github:
      'https://github.com/johnmarkobura/Predicting-heart-failure-mortality-with-logistic-regression-in-R',

    details: [
      'Compared parsimonious and expanded logistic models.',
      'Evaluated diagnostics, classification metrics, ROC/AUC, goodness-of-fit, and cross-validation.',
      'Focused on interpretable modeling and reproducible statistical analysis.',
    ],

    visual: 'data',

    assetHint:
      'Add ROC curve and one clean model-diagnostics figure.',
  },

  {
    id: 'matlab-shoulder',
    title: 'MATLAB Shoulder-Motion Regression',
    category: 'Data & AI',

    tags: [
      'MATLAB',
      'Regression',
      'R²',
      'Residual Analysis',
    ],

    summary:
      'Estimated shoulder movement angles from measured data using linear/polynomial regression, visualization, R², MSE, and residual analysis.',

    github:
      'https://github.com/johnmarkobura/matlab-regression-shoulder',

    details: [
      'Built regression models in MATLAB.',
      'Compared estimates with measured values.',
      'Used residual behavior and goodness-of-fit metrics to assess model quality.',
    ],

    visual: 'data',

    assetHint:
      'Add estimated-vs-actual and residual plots.',
  },

  {
    id: 'bridge-rk4',
    title: 'Bridge Dynamics Under Wind Load',
    category: 'Math & Simulation',

    tags: [
      'Python',
      'RK4',
      'ODEs',
      'Structural Dynamics',
    ],

    summary:
      'Modeled a mass–spring–damper bridge deck under constant and sinusoidal wind loads using a custom fourth-order Runge–Kutta simulation.',

    github:
      'https://github.com/johnmarkobura/bridge-dynamics-rk4',

    details: [
      'Converted coupled motion equations to first-order ODEs.',
      'Simulated damping, transient response, and resonance behavior.',
      'Visualized displacement and bridge deformation in 2D/3D.',
    ],

    visual: 'damped-response',

    assetHint:
      'Add 3D bridge deformation and resonance plots.',
  },

  {
    id: 'ideal-fluid-flow',
    title: 'Ideal Fluid Flow with Vector Calculus',
    category: 'Math & Simulation',

    tags: [
      'Maxima',
      'Vector Calculus',
      'Laplace Equation',
      'Fluid Dynamics',
    ],

    summary:
      'Used symbolic computation to analyze potential and stream functions for idealized uniform, vortex, source/sink, corner, doublet, and circulation flows.',

    github:
      'https://github.com/johnmarkobura/ideal_fluid_flow-vector-calculus',

    details: [
      'Verified irrotational and incompressible flow conditions.',
      'Applied partial derivatives and Laplace’s equation.',
      'Visualized streamlines and orthogonality with equipotential curves.',
    ],

    visual: 'math',

    assetHint:
      'Add streamline/equipotential plots from the Maxima project.',
  },

  {
    id: 'matlab-scheduling',
    title: 'MATLAB Scheduling Automation',
    category: 'Software',

    tags: [
      'MATLAB',
      'Automation',
      'Excel',
      'Scheduling',
    ],

    summary:
      'Team project that automated ORU Library help-desk scheduling, generated individual schedules, enforced hour limits, and produced 22 Excel outputs.',

    github:
      'https://github.com/johnmarkobura/matlab-scheduling',

    details: [
      'Automated semester and spring-break scheduling workflows.',
      'Applied assignment logic and workload constraints.',
      'Generated help-desk and individual student schedules as Excel files.',
    ],

    visual: 'data',

    assetHint:
      'Add an anonymized schedule screenshot or flowchart.',
  },

  {
    id: 'geneva-wheel',
    title: 'Geneva Wheel Mechanism',
    category: 'CAD & Mechanical',

    tags: [
      'SolidWorks',
      'CAD',
      'Motion Study',
      'Mechanical Design',
    ],

    summary:
      'Designed and assembled a four-slot Geneva mechanism that converts continuous rotation into 90° indexed intermittent motion.',

    github:
      'https://github.com/johnmarkobura/geneva-wheel-mechanism',

    details: [
      'Modeled the mechanism parametrically in SolidWorks.',
      'Applied mates and motion studies to validate indexing behavior.',
      'Created an animation of the pin-and-slot engagement.',
    ],

    visual: 'mechanical',

    assetHint:
      'Add rendered assembly image and compressed MP4/WebM animation.',
  },

  {
    id: 'door-solidworks',
    title: 'Door Assembly & Motion Simulation',
    category: 'CAD & Mechanical',

    tags: [
      'SolidWorks',
      'Assemblies',
      'Kinematics',
      'Motion Simulation',
    ],

    summary:
      'Built a constrained SolidWorks door assembly with hinges, handle, frame, limit-angle behavior, motion study, and interference validation.',

    github:
      'https://github.com/johnmarkobura/door-assembly-solidworks',

    details: [
      'Created parametric multi-part CAD models.',
      'Applied mates to control degrees of freedom.',
      'Simulated opening/closing motion and checked assembly interference.',
    ],

    visual: 'mechanical',

    assetHint:
      'Add a rendered still and lightweight motion clip.',
  },

  {
    id: 'single-cycle-riscv',
    title: '32-bit RISC-V Single-Cycle Processor',
    category: 'Digital Hardware',

    tags: [
      'SystemVerilog',
      'RISC-V',
      'Datapath',
      'Computer Architecture',
    ],

    summary:
      'Earlier single-cycle RISC-V implementation that became the architectural baseline for the later five-stage pipelined processor.',

    github:
      'https://github.com/johnmarkobura/riscv-single-cycle-processor',

    details: [
      'Built a single-cycle datapath and controller.',
      'Used the design as a baseline for later pipelining and analytical performance comparison.',
      'Demonstrates architectural progression rather than a disconnected second processor project.',
    ],

    visual: 'pipeline',

    assetHint:
      'Add the single-cycle datapath diagram.',
  },

]

export const allProjects = [
  ...featuredProjects,
  ...moreProjects,
]
