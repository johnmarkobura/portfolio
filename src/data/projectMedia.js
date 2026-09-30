export const projectMedia = {
  'riscv-pipeline': [
    {
      type: 'image',
      src: 'projects/riscv-pipeline/pipeline-architecture.png',
      alt:
        'Complete architecture diagram of the 32-bit five-stage RISC-V pipelined processor.',
      caption:
        'Complete five-stage datapath showing IF, ID, EX, MEM, and WB organization together with pipeline registers and control paths.',
    },
    {
      type: 'image',
      src: 'projects/riscv-pipeline/pipeline-top.png',
      alt:
        'Top-level architecture diagram of the five-stage RISC-V processor.',
      caption:
        'Top-level organization of the pipelined processor and its major modules.',
    },
  ],

  'single-cycle-riscv': [
    {
      type: 'image',
      src:
        'projects/riscv-single-cycle/single-cycle-architecture.png',
      alt:
        'Complete architecture diagram of the 32-bit single-cycle RISC-V processor.',
      caption:
        'Single-cycle datapath used as the architectural baseline for the later five-stage pipelined implementation.',
    },
    {
      type: 'image',
      src:
        'projects/riscv-single-cycle/single-cycle-top.png',
      alt:
        'Top-level architecture diagram of the single-cycle RISC-V processor.',
      caption:
        'Top-level module organization of the single-cycle processor.',
    },
  ],

  'rtl-alu': [
    {
      type: 'image',
      src: 'projects/rtl-alu/alu-block.png',
      alt:
        'Block diagram of the parameterized RTL ALU.',
      caption:
        'Top-level ALU interface showing operands, operation control, result, arithmetic flags, and comparison outputs.',
    },
    {
      type: 'image',
      src:
        'projects/rtl-alu/alu-gate-schematic.png',
      alt:
        'Detailed datapath schematic of the parameterized RTL ALU.',
      caption:
        'Detailed ALU architecture showing arithmetic, logic, shifting, comparison, flag-generation, and output-selection hardware.',
    },
  ],

  'temperature-controller': [
    {
      type: 'image',
      src:
        'projects/temperature-controller/circuit-schematic.png',
      alt:
        'Circuit schematic of the analog temperature controller.',
      caption:
        'Complete sensing and control chain including the NTC thermistor, signal conditioning, differential amplification, Schmitt-trigger hysteresis, BJT switching, and resistive heater.',
    },
  ],

  'dc-power-supply': [
    {
      type: 'image',
      src:
        'projects/dc-power-supply/schematic.png',
      alt:
        'LTspice schematic of the adjustable 2 to 9 volt linear DC power supply.',
      caption:
        'Full-wave rectifier, capacitive filter, Zener reference, op-amp feedback regulator, and BJT pass stage.',
    },
    {
      type: 'image',
      src:
        'projects/dc-power-supply/load-regulation-9v.png',
      alt:
        'LTspice load-regulation simulation at the 9 volt output setting.',
      caption:
        'Maximum-output load sweep used to verify closed-loop regulation from approximately 90.8 mA to 363.1 mA.',
    },
    {
      type: 'image',
      src:
        'projects/dc-power-supply/rectifier-ripple.png',
      alt:
        'LTspice rectifier ripple simulation under varying load.',
      caption:
        'Rectifier and filter-capacitor ripple analysis under increasing load current.',
    },
  ],

  'bridge-rk4': [
    {
      type: 'image',
      src:
        'projects/bridge-rk4/displacement-vs-time.png',
      alt:
        'Bridge displacement versus time from the RK4 structural dynamics simulation.',
      caption:
        'Time-domain bridge displacement showing the transient structural response under applied loading.',
    },
    {
      type: 'image',
      src:
        'projects/bridge-rk4/amplitude-vs-time.png',
      alt:
        'Oscillation amplitude versus time for the simulated bridge.',
      caption:
        'Dynamic-response visualization used to study oscillation, damping, and resonance behavior.',
    },
  ],

  'arduino-maze': [
    {
      type: 'video',
      src:
        'projects/maze-robot/robot-demo.mp4',
      caption:
        'Physical testing of the autonomous Arduino IR maze-solving robot.',
    },
  ],

  'geneva-wheel': [
    {
      type: 'video',
      src:
        'projects/geneva-wheel/geneva-demo.mp4',
      caption:
        'SolidWorks motion study demonstrating continuous rotary input converted into 90-degree indexed Geneva-wheel motion.',
    },
  ],

  'door-solidworks': [
    {
      type: 'video',
      src:
        'projects/door-solidworks/door-demo.mp4',
      caption:
        'SolidWorks assembly and motion study demonstrating the constrained door mechanism.',
    },
  ],
}

export function getProjectMedia(projectId) {
  return projectMedia[projectId] ?? []
}