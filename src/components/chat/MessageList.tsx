import React, { useEffect, useRef, memo } from "react";
import ReactMarkdown from "react-markdown";
import TypingIndicator from "./TypingIndicator";
import IOSLoader from "@/components/ui/IOSLoader";
import type { MessageListProps, MessageBubbleProps } from "@/types/interfaces";

/**
 * Shared markdown component overrides — used for both streaming and final render.
 * The blinking cursor is handled via a CSS-only approach:
 *   .is-streaming > :last-child::after { content: ""; ... }
 * This means ZERO DOM difference between streaming and done — only a class toggle.
 */
const markdownComponents = {
  p: ({ children }: any) => (
    <p className="my-1.5 leading-[1.7]">{children}</p>
  ),
  strong: ({ children }: any) => (
    <strong className="font-semibold text-zinc-100">{children}</strong>
  ),
  em: ({ children }: any) => (
    <em className="italic text-zinc-300">{children}</em>
  ),
  h1: ({ children }: any) => (
    <h1 className="text-lg font-semibold text-zinc-100 mt-4 mb-2">
      {children}
    </h1>
  ),
  h2: ({ children }: any) => (
    <h2 className="text-base font-semibold text-zinc-100 mt-3 mb-1.5">
      {children}
    </h2>
  ),
  h3: ({ children }: any) => (
    <h3 className="text-sm font-semibold text-zinc-200 mt-2 mb-1">
      {children}
    </h3>
  ),
  ul: ({ children }: any) => (
    <ul className="list-disc pl-5 my-2 space-y-1">{children}</ul>
  ),
  ol: ({ children }: any) => (
    <ol className="list-decimal pl-5 my-2 space-y-1">{children}</ol>
  ),
  li: ({ children }: any) => <li className="leading-[1.7]">{children}</li>,
  code: ({ className, children, ...props }: any) => {
    const isBlock = className?.includes("language-");
    if (isBlock) {
      return (
        <pre className="bg-zinc-900 rounded-lg p-3.5 my-2.5 overflow-x-auto border border-zinc-800">
          <code
            className={`text-[13px] leading-relaxed text-zinc-300 ${className || ""}`}
            {...props}
          >
            {children}
          </code>
        </pre>
      );
    }
    return (
      <code
        className="bg-zinc-800/70 text-zinc-200 px-1.5 py-0.5 rounded text-[0.875em] font-mono"
        {...props}
      >
        {children}
      </code>
    );
  },
  pre: ({ children }: any) => <>{children}</>,
  blockquote: ({ children }: any) => (
    <blockquote className="border-l-2 border-zinc-700 pl-3.5 my-2.5 text-zinc-400">
      {children}
    </blockquote>
  ),
  a: ({ children, href }: any) => (
    <a
      href={href}
      className="text-zinc-200 underline decoration-zinc-600 underline-offset-2 hover:decoration-zinc-400 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ),
  hr: () => <hr className="border-zinc-800 my-4" />,
};

const MarkdownContent: React.FC<{ content: string; isStreaming?: boolean }> =
  memo(({ content, isStreaming = false }) => {
    return (
      <div
        className={`break-words leading-relaxed ai-message-content${isStreaming ? " is-streaming" : ""}`}
      >
        <ReactMarkdown components={markdownComponents}>{content}</ReactMarkdown>
      </div>
    );
  });

MarkdownContent.displayName = "MarkdownContent";

const MessageBubble: React.FC<MessageBubbleProps> = memo(
  ({ message, isStreaming = false, className = "" }) => {
    const isUser = message.role === "human";

    return (
      <div className={`max-w-3xl mx-auto px-5 py-2 ${className}`}>
        <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
          <div className={isUser ? "max-w-[85%]" : "max-w-full"}>
            {isUser ? (
              <div className="bg-zinc-800/80 text-zinc-200 rounded-2xl px-4 py-2.5 border border-zinc-700/30">
                <div className="whitespace-pre-wrap break-words leading-[1.7] text-[14px]">
                  {message.content}
                </div>
              </div>
            ) : (
              <div className="text-zinc-300 text-[14px]">
                <MarkdownContent
                  content={message.content}
                  isStreaming={isStreaming}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  },
);

MessageBubble.displayName = "MessageBubble";

const MessageList: React.FC<MessageListProps> = memo(
  ({
    messages,
    streamingMessage = "",
    loading = false,
    chatLoading = false,
    className = "",
    chatbotTitle = "",
  }) => {
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, streamingMessage]);

    if ((loading || chatLoading) && messages.length === 0) {
      return (
        <div
          className={`flex-1 flex items-center justify-center p-8 ${className}`}
        >
          <IOSLoader size="md" color="zinc" />
        </div>
      );
    }

    return (
      <div ref={containerRef} className={`flex-1 overflow-y-auto ${className}`}>
        {messages.length === 0 && !streamingMessage ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-center px-6">
              <div className="text-zinc-500 text-sm">
                Ask anything about{" "}
                <span className="text-zinc-400 font-medium">
                  {chatbotTitle || "us"}
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div className="min-h-full py-4">
            {messages.map((message, index) => (
              <MessageBubble
                key={message.id || `msg-${index}`}
                message={message}
              />
            ))}

            {streamingMessage && (
              <MessageBubble
                message={{
                  id: "streaming",
                  role: "ai",
                  content: streamingMessage,
                  timestamp: Date.now(),
                }}
                isStreaming={true}
              />
            )}

            {loading && !streamingMessage && (
              <div className="max-w-3xl mx-auto px-5 py-2">
                <div className="flex justify-start">
                  <TypingIndicator isVisible={true} />
                </div>
              </div>
            )}
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>
    );
  },
);

MessageList.displayName = "MessageList";

export default MessageList;
