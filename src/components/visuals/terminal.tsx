import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const bootSequence = [
  { type: "info", text: "[INFO] Initializing Kafka consumer..." },
  { type: "ok", text: "[OK] Consumer group registered" },
  { type: "info", text: "[INFO] Connecting to PostgreSQL..." },
  { type: "ok", text: "[OK] Connection pool established (10 connections)" },
  { type: "info", text: "[INFO] Loading Redis cache layer..." },
  { type: "ok", text: "[OK] Redis cluster connected" },
  { type: "info", text: "[INFO] Starting metrics exporter..." },
  { type: "ok", text: "[OK] Prometheus endpoint: /metrics" },
  { type: "success", text: "[READY] Service accepting requests on :8080" },
];

export function Terminal() {
  const [lines, setLines] = useState<typeof bootSequence>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (currentLine >= bootSequence.length) {
      setIsTyping(false);
      return;
    }

    const line = bootSequence[currentLine];
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      if (charIndex <= line.text.length) {
        setDisplayedText(line.text.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setLines((prev) => [...prev, line]);
        setDisplayedText("");
        setTimeout(() => setCurrentLine((prev) => prev + 1), 200);
      }
    }, 25);

    return () => clearInterval(typeInterval);
  }, [currentLine]);

  return (
    <motion.div
      className="overflow-hidden rounded-xl border border-border bg-[#0d1117] font-mono text-xs sm:text-sm"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100, damping: 20 }}
    >
      {/* macOS-style terminal header */}
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-3 py-2">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <span className="ml-2 text-[10px] text-white/50">backend-service — zsh</span>
      </div>

      {/* Terminal content */}
      <div className="p-3 sm:p-4">
        <div className="space-y-1">
          {lines.map((line, index) => (
            <div key={index} className="flex items-start gap-2">
              <span className="text-white/30 select-none">$</span>
              <span
                className={
                  line.type === "ok"
                    ? "text-[#28c840]"
                    : line.type === "success"
                      ? "text-[#28c840] font-semibold"
                      : "text-[#79c0ff]"
                }
              >
                {line.text}
              </span>
            </div>
          ))}

          {/* Current typing line */}
          {isTyping && currentLine < bootSequence.length && (
            <div className="flex items-start gap-2">
              <span className="text-white/30 select-none">$</span>
              <span
                className={
                  bootSequence[currentLine].type === "ok"
                    ? "text-[#28c840]"
                    : bootSequence[currentLine].type === "success"
                      ? "text-[#28c840] font-semibold"
                      : "text-[#79c0ff]"
                }
              >
                {displayedText}
                <motion.span
                  className="ml-0.5 inline-block h-4 w-1.5 bg-white/70"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              </span>
            </div>
          )}

          {/* Final cursor after boot */}
          {!isTyping && (
            <div className="flex items-start gap-2">
              <span className="text-white/30 select-none">$</span>
              <motion.span
                className="inline-block h-4 w-1.5 bg-[#28c840]"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
