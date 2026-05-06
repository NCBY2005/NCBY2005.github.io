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
        description: "Reconstruct the quantum option-pricing pipeline from the paper and IBM Quantum Finance tutorial without relying on high-level Quantum Finance libraries: load a log-normal asset-price distribution into a quantum state, encode European option payoffs as amplitudes, apply Grover amplification, estimate the payoff probability, and recover the discounted option price.",
        idea: "A from-scratch implementation of Stamatopoulos et al. (2020). ”Option Pricing using Quantum Computers”. This project includes from-scratch algorithms for Quantum State Preperation, Quantum Iterative Amplitude Amplification and AmplitudeEstimation.",
        stack: ["Qiskit", "Python", "Jupyter Notebook", "NumPy", "Matplotlib"],
        tags: ["Quantum Computing", "Quantum Finance", "Option Pricing", "Quantum Amplitude Estimation", "QuantumState Preparation", "Qiskit", "Computational Finance", , "Black-Scholes-Merton Model"],
        github: "https://github.com/NCBY2005/Option-Pricing-on-Quantum-Computer",
    },
    {
        title: "A Guide to Quantum Computing",
        description: "",
        idea: "A collection of notes and implementations aimed at building intuition for quantum computing concepts without requiring prior knowledge of quantum mechanics.",
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
        description: "Building a SatNOGS-compatible ground station for UCubesat to receive LEO satellite telemetry and contribute to the global network.",
        idea: "UCubeSat is developing a CubeSat mission to capture high-resolution imagery from Low Earth Orbit. To support image downlink, this project builds a ground station capable of receiving satellite data while also contributing to the SatNOGS network and expanding regional receiver coverage.",
        stack: [],
        tags: ["CubeSat", "Ground Station", "SatNOGS", "Hardware"],
        github: null,
    }
];
