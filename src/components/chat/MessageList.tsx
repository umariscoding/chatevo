import React, { useEffect, useRef, memo, useMemo } from "react";
import ReactMarkdown from "react-markdown";
import TypingIndicator from "./TypingIndicator";
import type { MessageListProps, MessageBubbleProps } from "@/types/interfaces";

const StreamingCursor = () => (
  <span className="inline-block w-[3px] h-[1.1em] bg-zinc-400 ml-0.5 align-middle animate-pulse rounded-[1px]" />
);

function useMarkdownComponents(isStreaming: boolean) {
  return useMemo(() => {
    const LastChildCursor = isStreaming ? StreamingCursor : () => null;

    return {
      p: ({ children }: any) => (
        <p className="my-1.5 leading-relaxed">
          {children}
          <LastChildCursor />
        </p>
      ),
      strong: ({ children }: any) => (
        <strong className="font-semibold text-zinc-100">{children}</strong>
      ),
      em: ({ children }: any) => (
        <em className="italic text-zinc-300">{children}</em>
      ),
      h1: ({ children }: any) => (
        <h1 className="text-xl font-bold text-zinc-100 mt-4 mb-2">
          {children}
        </h1>
      ),
      h2: ({ children }: any) => (
        <h2 className="text-lg font-bold text-zinc-100 mt-3 mb-1.5">
          {children}
        </h2>
      ),
      h3: ({ children }: any) => (
        <h3 className="text-base font-semibold text-zinc-200 mt-2 mb-1">
          {children}
        </h3>
      ),
      ul: ({ children }: any) => (
        <ul className="list-disc pl-5 my-1.5 space-y-0.5">{children}</ul>
      ),
      ol: ({ children }: any) => (
        <ol className="list-decimal pl-5 my-1.5 space-y-0.5">{children}</ol>
      ),
      li: ({ children }: any) => (
        <li className="my-0.5 leading-relaxed">{children}</li>
      ),
      code: ({ className, children, ...props }: any) => {
        const isBlock = className?.includes("language-");
        if (isBlock) {
          return (
            <pre className="bg-zinc-800/80 rounded-lg p-3 my-2 overflow-x-auto border border-zinc-700/50">
              <code
                className={`text-sm text-zinc-200 ${className || ""}`}
                {...props}
              >
                {children}
              </code>
            </pre>
          );
        }
        return (
          <code
            className="bg-zinc-800 text-zinc-200 px-1.5 py-0.5 rounded text-[0.875em]"
            {...props}
          >
            {children}
          </code>
        );
      },
      pre: ({ children }: any) => <>{children}</>,
      blockquote: ({ children }: any) => (
        <blockquote className="border-l-2 border-zinc-600 pl-3 my-2 text-zinc-400 italic">
          {children}
        </blockquote>
      ),
      a: ({ children, href }: any) => (
        <a
          href={href}
          className="text-blue-500 underline hover:text-blue-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ),
      hr: () => <hr className="border-zinc-700 my-3" />,
    };
  }, [isStreaming]);
}

const MarkdownContent: React.FC<{ content: string; isStreaming?: boolean }> =
  memo(({ content, isStreaming = false }) => {
    const components = useMarkdownComponents(isStreaming);

    return (
      <div className="break-words leading-relaxed">
        <ReactMarkdown components={components}>{content}</ReactMarkdown>
      </div>
    );
  });

MarkdownContent.displayName = "MarkdownContent";

const MessageBubble: React.FC<MessageBubbleProps> = memo(
  ({ message, isStreaming = false, className = "" }) => {
    const isUser = message.role === "human";

    return (
      <div className={`group max-w-4xl mx-auto px-4 py-3 ${className}`}>
        <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
          <div className={`max-w-[80%]`}>
            {isUser ? (
              <div className="bg-zinc-800 text-zinc-200 rounded-full px-4 py-2">
                <div className="whitespace-pre-wrap break-words leading-relaxed">
                  {message.content}
                </div>
              </div>
            ) : (
              <div className="text-zinc-300 px-1 py-1">
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
    className = "",
    chatbotTitle = "",
  }) => {
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, streamingMessage]);

    if (loading && messages.length === 0) {
      return (
        <div
          className={`flex-1 flex items-center justify-center p-8 ${className}`}
        >
          <p className="text-lg text-zinc-500">Loading...</p>
        </div>
      );
    }

    return (
      <div ref={containerRef} className={`flex-1 overflow-y-auto ${className}`}>
        {messages.length === 0 && !streamingMessage ? (
          <div className="flex items-center justify-center h-full">
            <div className="max-w-4xl mx-auto px-4 py-3">
              <div className="flex justify-start">
                <div className="text-zinc-300 px-1 py-1">
                  <div className="whitespace-pre-wrap break-words leading-relaxed">
                    <div className="py-2 text-lg">
                      Ask anything about{" "}
                      <span className="text-zinc-400">
                        {chatbotTitle || "us"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="min-h-full">
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
              <div className="max-w-4xl mx-auto px-4 py-3">
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
