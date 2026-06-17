import { motion } from "framer-motion";
import { useMemo } from "react";

type Node = { id: number; x: number; y: number };
type Edge = { from: number; to: number };

function generateGraph(): { nodes: Node[]; edges: Edge[] } {
  const nodes: Node[] = [
    { id: 0, x: 20, y: 25 },
    { id: 1, x: 45, y: 12 },
    { id: 2, x: 75, y: 20 },
    { id: 3, x: 30, y: 55 },
    { id: 4, x: 58, y: 45 },
    { id: 5, x: 85, y: 55 },
    { id: 6, x: 15, y: 80 },
    { id: 7, x: 50, y: 78 },
    { id: 8, x: 80, y: 85 },
  ];

  const edges: Edge[] = [
    { from: 0, to: 1 },
    { from: 1, to: 2 },
    { from: 0, to: 3 },
    { from: 1, to: 4 },
    { from: 2, to: 5 },
    { from: 3, to: 4 },
    { from: 4, to: 5 },
    { from: 3, to: 6 },
    { from: 4, to: 7 },
    { from: 5, to: 8 },
    { from: 6, to: 7 },
    { from: 7, to: 8 },
  ];

  return { nodes, edges };
}

export function NodeGraph() {
  const { nodes, edges } = useMemo(() => generateGraph(), []);

  return (
    <div className="absolute inset-0 overflow-hidden opacity-40 sm:opacity-50">
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
      >
        <defs>
          <linearGradient id="edgeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--accent-from))" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(var(--accent-to))" stopOpacity="0.3" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="0.8" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Edges */}
        {edges.map((edge, index) => {
          const fromNode = nodes[edge.from];
          const toNode = nodes[edge.to];
          return (
            <motion.line
              key={`edge-${index}`}
              x1={fromNode.x}
              y1={fromNode.y}
              x2={toNode.x}
              y2={toNode.y}
              stroke="url(#edgeGradient)"
              strokeWidth="0.25"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0.2, 0.5, 0.2] }}
              transition={{
                pathLength: { duration: 1.5, delay: index * 0.08 },
                opacity: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.15 },
              }}
            />
          );
        })}

        {/* Data pulse along edges */}
        {edges.map((edge, index) => {
          const fromNode = nodes[edge.from];
          const toNode = nodes[edge.to];
          return (
            <motion.circle
              key={`pulse-${index}`}
              r="0.6"
              fill="hsl(var(--accent-to))"
              filter="url(#glow)"
              initial={{ opacity: 0 }}
              animate={{
                cx: [fromNode.x, toNode.x],
                cy: [fromNode.y, toNode.y],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: index * 0.6,
                ease: "easeInOut",
              }}
            />
          );
        })}

        {/* Nodes */}
        {nodes.map((node, index) => (
          <motion.g key={node.id}>
            {/* Outer glow ring */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="2.5"
              fill="none"
              stroke="hsl(var(--accent-from))"
              strokeWidth="0.15"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{
                duration: 3 + index * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* Core node */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="1.2"
              fill="hsl(var(--primary))"
              filter="url(#glow)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: [0.7, 1, 0.7] }}
              transition={{
                scale: { duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 300, damping: 20 },
                opacity: { duration: 2.5 + index * 0.1, repeat: Infinity, ease: "easeInOut" },
              }}
            />
          </motion.g>
        ))}
      </svg>
    </div>
  );
}
