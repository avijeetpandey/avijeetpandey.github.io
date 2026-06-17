import { motion } from "framer-motion";

type CodeBlockProps = {
  code: string;
  filename?: string;
};

export function CodeBlock({ code, filename }: CodeBlockProps) {
  return (
    <motion.div
      className="overflow-hidden rounded-xl border border-border bg-[#0d1117] font-mono text-xs sm:text-sm"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Terminal header */}
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-3 py-2">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        {filename && (
          <span className="ml-2 text-[10px] text-white/50">{filename}</span>
        )}
      </div>

      {/* Code content */}
      <pre className="overflow-x-auto p-3 sm:p-4">
        <code className="text-[#c9d1d9]">
          {code.split("\n").map((line, index) => (
            <div key={index} className="flex">
              <span className="mr-4 inline-block w-5 text-right text-white/30 select-none">
                {index + 1}
              </span>
              <span
                dangerouslySetInnerHTML={{
                  __html: highlightSyntax(line),
                }}
              />
            </div>
          ))}
        </code>
      </pre>
    </motion.div>
  );
}

function highlightSyntax(line: string): string {
  return line
    // Keywords
    .replace(
      /\b(const|let|var|function|return|if|else|for|while|class|import|from|export|async|await|new|try|catch|throw)\b/g,
      '<span class="text-[#ff7b72]">$1</span>'
    )
    // Strings
    .replace(
      /(['"`])([^'"`]*)(['"`])/g,
      '<span class="text-[#a5d6ff]">$1$2$3</span>'
    )
    // Comments
    .replace(
      /(\/\/.*)$/g,
      '<span class="text-[#8b949e]">$1</span>'
    )
    // Numbers
    .replace(
      /\b(\d+)\b/g,
      '<span class="text-[#79c0ff]">$1</span>'
    )
    // Functions
    .replace(
      /\b([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/g,
      '<span class="text-[#d2a8ff]">$1</span>('
    )
    // Brackets
    .replace(
      /([{}[\]()])/g,
      '<span class="text-[#ffa657]">$1</span>'
    );
}
