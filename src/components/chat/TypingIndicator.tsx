import React from "react";
import type { TypingIndicatorProps } from "@/types/interfaces";

const TypingIndicator: React.FC<TypingIndicatorProps> = ({
  isVisible,
  className = "",
}) => {
  if (!isVisible) return null;

  return (
    <div className={`flex items-center gap-1.5 px-1 py-2 ${className}`}>
      <div
        className="w-1.5 h-1.5 bg-zinc-500 rounded-full"
        style={{ animation: "dotPulse 1.4s ease-in-out infinite" }}
      />
      <div
        className="w-1.5 h-1.5 bg-zinc-500 rounded-full"
        style={{ animation: "dotPulse 1.4s ease-in-out infinite 0.2s" }}
      />
      <div
        className="w-1.5 h-1.5 bg-zinc-500 rounded-full"
        style={{ animation: "dotPulse 1.4s ease-in-out infinite 0.4s" }}
      />
    </div>
  );
};

export default TypingIndicator;
