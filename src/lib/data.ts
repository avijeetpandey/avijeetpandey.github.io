export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;

export const skillGroups = [
  {
    title: "The Core",
    description: "Java, Go, and Node.js are where most of my serious backend work gets done.",
    skills: ["Java", "Go", "Node.js"],
  },
  {
    title: "Data & Infrastructure",
    description: "The systems layer behind ingestion, eventing, storage, and high-throughput services.",
    skills: [
      "AWS",
      "Kafka",
      "Redis",
      "Docker",
      "K8s",
      "GCP",
      "PostgreSQL",
    ],
  },
  {
    title: "Frontend & iOS",
    description: "Enough product-side range to build polished interfaces when the project calls for it.",
    skills: ["React", "Swift", "TypeScript"],
  },
] as const;

export const featuredProjects = [
  {
    name: "MacTable",
    tag: "Swift · macOS",
    href: "https://github.com/avijeetpandey/mactable",
    summary: "A native macOS database client for PostgreSQL, MySQL, and MongoDB.",
    detail: "Built with a polished SwiftUI interface, SQL editor, data grid, and ERD canvas.",
    stack: ["Swift", "SwiftUI", "PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    name: "Focal Lens",
    tag: "Rust · Observability",
    href: "https://github.com/avijeetpandey/focal-lens",
    summary: "An edge observability platform for mobile applications.",
    detail: "Uses a Rust ingestion proxy, PostgreSQL storage, and a dashboard for telemetry workflows.",
    stack: ["Rust", "PostgreSQL", "Next.js", "Telemetry"],
  },
  {
    name: "Discord Clone",
    tag: "Realtime Systems",
    href: "https://github.com/avijeetpandey/discord",
    summary: "A full-stack Discord clone with realtime chat and presence.",
    detail: "Built on Spring Boot, React, WebSocket/STOMP, Kafka, Redis, and PostgreSQL.",
    stack: ["Java", "React", "Kafka", "Redis", "PostgreSQL"],
  },
  {
    name: "Launchpad",
    tag: "Config Management",
    href: "https://github.com/avijeetpandey/launchpad",
    summary: "A centralized configuration management system for microservices.",
    detail: "Designed for JSON config validation, safe rollouts, audit history, and Redis-backed distribution.",
    stack: ["Java", "Spring Boot", "PostgreSQL", "Redis"],
  },
  {
    name: "Hamdel",
    tag: "Ingestion Pipeline",
    href: "https://github.com/avijeetpandey/hamdel",
    summary: "A high-throughput heartbeat ingestion service built on Kafka and Spring Boot.",
    detail: "Focused on resilient ingestion, KPI processing, and production-style observability.",
    stack: ["Java", "Kafka", "Spring Boot", "PostgreSQL", "Prometheus"],
  },
  {
    name: "Reaper",
    tag: "Kafka Patterns",
    href: "https://github.com/avijeetpandey/reaper",
    summary: "An exploration of Kafka batching and fail-safe handling in distributed environments.",
    detail: "A focused backend systems project around reliability patterns rather than UI.",
    stack: ["Java", "Kafka", "Distributed Systems"],
  },
  {
    name: "Node++",
    tag: "C++ Framework",
    href: "https://github.com/avijeetpandey/nodepp",
    summary: "A lightweight C++ web framework inspired by the simplicity of Node.js.",
    detail: "Express-style APIs, native performance, and support for REST, GraphQL, WebSockets, and more.",
    stack: ["C++", "HTTP", "GraphQL", "WebSockets"],
  },
] as const;

export const experienceTimeline = [
  {
    company: "JioHotstar",
    title: "Software Engineer II",
    period: "May 2024 — Present",
    location: "Bengaluru",
    highlights: [
      "Built Bifrost, a Kafka-based log ingestion service processing millions of heartbeat records every 60 seconds.",
      "Reduced download failure rate by 30% with a Go policy rule engine for the download service rewrite.",
    ],
    tech: ["Java", "Golang", "Kafka", "Spring Boot", "AWS", "Redis"],
  },
  {
    company: "Probo",
    title: "Founding Engineer",
    period: "Jun 2021 — Apr 2024",
    location: "Gurugram",
    highlights: [
      "Architected the core trading engine serving 150,000 DAU with concurrency-safe order matching.",
      "Moved heavy workflows to async workers, cutting API latency and saving $24,000 annually in compute.",
    ],
    tech: ["Node.js", "AWS", "SQS", "Lambda", "MySQL", "Redis"],
  },
  {
    company: "Unifize",
    title: "Software Engineering Intern",
    period: "Jan 2021 — Apr 2021",
    location: "Bengaluru",
    highlights: [
      "Built a granular permissions module for the SaaS backend.",
      "Improved backend API responses for the web client.",
    ],
    tech: ["Node.js", "Firebase", "React", "Redux"],
  },
  {
    company: "Bolt.Earth",
    title: "Software Engineering Intern",
    period: "Nov 2020 — Jan 2021",
    location: "Bengaluru",
    highlights: [
      "Designed database queries for vehicle telemetry aggregation.",
      "Supported real-time battery health monitoring workflows.",
    ],
    tech: ["TypeScript", "GraphQL", "PostgreSQL", "AWS"],
  },
] as const;
