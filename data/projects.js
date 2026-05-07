/**
 * Projects Data
 * ─────────────
 * To add a new project, add a new object to this array.
 *
 * Fields:
 *   title       {string}   — Project name
 *   description {string}   — What it is and what you built
 *   idea        {string}   — The core problem it solves or insight it demonstrates
 *   stack       {string[]} — Technologies / languages used
 *   tags        {string[]} — Keyword tags for filtering
 *   github      {string|null} — GitHub URL | "Ongoing" (shows status badge) | null (shows nothing)
 */

const PROJECTS = [
    {
        title: "Option Pricing using Quantum Computers",
        description: "Built a custom quantum option-pricing pipeline in Qiskit, including log-normal asset-price state preparation, European payoff amplitude encoding, Grover amplification, and iterative amplitude estimation for discounted expected payoff recovery.",
        idea: "Implements the core ideas of Stamatopoulos et al.’s quantum option-pricing framework by manually building log-normal state preparation, payoff amplitude encoding, Grover amplification, and iterative amplitude estimation in Qiskit.",
        stack: ["Qiskit", "Python", "Jupyter Notebook", "NumPy", "Matplotlib"],
        tags: ["Quantum Computing", "Quantum Finance", "Option Pricing", "Quantum Amplitude Estimation", "Quantum State Preparation"],
        github: "https://github.com/NCBY2005/Option-Pricing-on-Quantum-Computer",
    },
    {
        title: "A Guide to Quantum Computing",
        description: "A structured collection of notes and implementations designed to build intuition for quantum computing, quantum algorithms, and circuit-based computation from first principles.",
        idea: "Focuses on explaining core quantum computing ideas through clear derivations and small examples rather than assuming prior quantum mechanics background.",
        stack: [],
        tags: ["Quantum Computing", "Quantum Algorithms"],
        github: "https://github.com/NCBY2005/A-Guide-to-Quantum-Computing",
    },
    {
        title: "DNS Server in Rust",
        description: "A simple, efficient DNS server built in Rust that handles DNS queries, resolves domain names, returns IP addresses, supports response caching, and includes configurable server settings with logging/debugging support.",
        idea: "Demonstrates how low-level networking protocols can be implemented safely and efficiently in Rust, using concurrency and caching to build a faster, more reliable DNS resolution service.",
        stack: ["Rust", "Cargo", "DNS Protocol", "Async Networking", "TOML Configuration"],
        tags: ["Networking", "Rust"],
        github: "https://github.com/NCBY2005/DNS-Server-in-RUST",
    },
    {
        title: "CubeSat & Ground Stations",
        description: "Developing a ground-station pipeline for CubeSat telemetry reception, enabling satellite data collection, image downlink support, and integration with the SatNOGS network.",
        idea: "UCubeSat is developing a CubeSat mission to capture high-resolution imagery from Low Earth Orbit. To support image downlink, this project builds a ground station capable of receiving satellite data while also contributing to the SatNOGS network and expanding regional receiver coverage.",
        stack: [],
        tags: ["CubeSat", "Ground Station", "SatNOGS", "Hardware"],
        github: null,
    }
];
