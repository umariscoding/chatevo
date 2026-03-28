import React, { useState, useRef, useCallback } from "react";
import { Icons } from "@/components/ui/Icons";
import type { MessageInputProps } from "@/types/interfaces";
import type { ModelType } from "@/types/chat";

const MessageInput: React.FC<MessageInputProps> = ({
  onSendMessage,
  loading = false,
  disabled = false,
  placeholder = "Ask anything...",
  className = "",
}) => {
  const [message, setMessage] = useState("");
  const [isMultiline, setIsMultiline] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const selectedModel: ModelType = "Llama-instant";

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (message.trim() && !loading && !disabled) {
        onSendMessage(message.trim(), selectedModel);
        setMessage("");
        setIsMultiline(false);
        if (textareaRef.current) {
          textareaRef.current.style.height = "auto";
        }
      }
    },
    [message, selectedModel, onSendMessage, loading, disabled],
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSubmit(e);
      }
    },
    [handleSubmit],
  );

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setMessage(e.target.value);

      const textarea = e.target;
      textarea.style.height = "auto";
      const newHeight = Math.min(textarea.scrollHeight, 160);
      textarea.style.height = newHeight + "px";

      const minSingleLineHeight = 40;
      setIsMultiline(newHeight > minSingleLineHeight);
    },
    [],
  );

  const hasContent = message.trim().length > 0;

  return (
    <div className={`w-full ${className}`}>
      <form onSubmit={handleSubmit}>
        <div
          className={`relative flex items-end gap-2 p-2 transition-all duration-200 ${
            isMultiline ? "rounded-2xl" : "rounded-full"
          }`}
          style={{
            background: "var(--surface-tertiary)",
            border: `1px solid ${isFocused ? "var(--border-primary)" : "var(--border-tertiary)"}`,
            boxShadow: isFocused
              ? "0 0 0 3px var(--focus-ring), 0 8px 32px rgba(0,0,0,0.3)"
              : "0 4px 24px rgba(0,0,0,0.2)",
          }}
        >
          <div className="flex-1 flex items-center">
            <textarea
              ref={textareaRef}
              value={message}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder={placeholder}
              disabled={loading || disabled}
              rows={1}
              className="w-full resize-none bg-transparent border-0 pl-3 focus:outline-none text-[14px] leading-normal"
              style={{
                height: "40px",
                minHeight: "40px",
                maxHeight: "160px",
                paddingTop: "10px",
                overflow: message ? "auto" : "hidden",
                color: "var(--text-primary)",
              }}
            />
          </div>

          {/* Send button */}
          <button
            type="submit"
            disabled={!hasContent || loading || disabled}
            className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-full transition-all duration-200 mb-0.5"
            style={{
              background: hasContent && !loading && !disabled
                ? "#6366f1"
                : "transparent",
              color: hasContent && !loading && !disabled
                ? "#ffffff"
                : "var(--text-muted)",
              opacity: !hasContent || loading || disabled ? 0.4 : 1,
              transform: hasContent ? "scale(1)" : "scale(0.9)",
            }}
          >
            {loading ? (
              <div
                className="w-4 h-4 border-2 rounded-full animate-spin"
                style={{
                  borderColor: "var(--text-muted)",
                  borderTopColor: "transparent",
                }}
              />
            ) : (
              <Icons.ArrowUp className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Hint text */}
        <div className="mt-2 text-center">
          <span className="text-[11px]" style={{ color: "var(--text-muted)", opacity: 0.6 }}>
            Enter to send · Shift+Enter for new line
          </span>
        </div>
      </form>
    </div>
  );
};

export default MessageInput;
