/**
 * Research Data
 * ─────────────
 * To add a new research entry, add a new object to this array.
 *
 * Fields:
 *   title    {string}   — Full title of the project
 *   abstract {string}   — 2–4 sentence description (supports HTML and $...$ KaTeX inline math)
 *   tags     {string[]} — Keyword tags used for filtering
 *   status   {string}   — "Ongoing" | "Preprint" | "Published"
 *   links    {object}   — Optional: { paper, code, notes } — each a URL string or null
 */

const RESEARCH = [
  {
    title: "Stellar Intensity Interferometry at VERITAS",
    abstract:
      "Stellar Intensity Interferometry is an observational technique that exploits second-order coherence properties of starlight to achieve extremely high angular resolution. This method measures correlations in the arrival times of photons collected by telescopes separated by extensive baselines, thereby enabling the resolution of fine astrophysical details even under turbulent atmospheric conditions. Since October 2024, I had been working closely with Professor LeBohec and Professor Kieda on refining data analysis process using CERN ROOT and C++. I analyze data from variable stars such as Beta Canis Majoris, working on capturing its modulation with our instruments. I am also working on writing a convertor script that converts FPGA correlated data into ROOT files to maintain consistency in analysis.",
    tags: ["Stellar Intensity Interferometry", "C++", "CERN ROOT", "Data Analysis", "Astronomy"],
    status: "Ongoing",
    links: {
      paper: "https://iopscience.iop.org/article/10.3847/1538-4357/ae0744",
      paperTitle: "Measurement of the Photosphere Oblateness of γ Cassiopeiae (ApJ, 2025)",
      code: null,
      notes: null,
    },
  },
  {
    title: "Quantum Probability Image Encoding (QPIE)",
    abstract:
      "Quantum Probability Image Encoding is a promising quantum image encoding framework which represents pixel intensities as amplitudes of a quantum state. However, the efficient preparation of such quantum states remains a fundamental bottleneck. My work focuses on developing efficient state preparation algorithms for QPIE by exploiting structural properties commonly present in astronomical images.",
    tags: ["Quantum Information", "Quantum Algorithms", "QPIE", "Qiskit"],
    status: "Ongoing",
    links: {
      paper: null,
      code: null,
      notes: null,
    },
  },
  {
    title: "Shared Funding Constraints and Variational Equilibrium in Option Dealer Hedging",
    abstract:
      "Option hedging is a risk management strategy that uses options contracts to protect an investment portfolio from adverse price movements in underlying assets. We observe that dealers face margin rules, internal risk limits, and finite balance-sheet capacity, and when many dealers adjust hedges at the same time, they compete for the same scarce funding and liquidity resource. We model the problem as a generalized Nash Equilibrium problem in which players’ feasible sets are coupled by a common capacity constraints. The model is refined by a variational equilibrium as it imposes a single multiplier on the common constraint and therefore admits a direct interpretation as a market-wide shadow price of scarce balance sheet",
    tags: ["Quantitative Finance", "Option Hedging", "Generalized Nash Equilibrium", "Variational Equilibrium"],
    status: "Preprint",
    links: {
      paper: null,
      code: null,
      notes: null,
    },
  },
];
