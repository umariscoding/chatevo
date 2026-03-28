import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useRef,
  useEffect,
} from "react";
import { Icons } from "./Icons";

/* ─── Types ─── */

type ToastType = "success" | "error" | "info";

interface Toast {
  id: string;
  message: string;
  type: ToastType;
  duration: number;
  exiting: boolean;
}

interface ToastContextValue {
  toast: {
    success: (message: string, duration?: number) => void;
    error: (message: string, duration?: number) => void;
    info: (message: string, duration?: number) => void;
  };
}

/* ─── Context ─── */

const ToastContext = createContext<ToastContextValue | null>(null);

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx.toast;
}

/* ─── Icons per type ─── */

const toastIcons: Record<ToastType, React.ReactNode> = {
  success: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M8 1C4.134 1 1 4.134 1 8s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7z"
        fill="currentColor"
        opacity="0.15"
      />
      <path
        d="M8 1C4.134 1 1 4.134 1 8s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M5.5 8l1.75 1.75L10.5 6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  error: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M8 1C4.134 1 1 4.134 1 8s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7z"
        fill="currentColor"
        opacity="0.15"
      />
      <path
        d="M8 1C4.134 1 1 4.134 1 8s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M6 6l4 4M10 6l-4 4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  ),
  info: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M8 1C4.134 1 1 4.134 1 8s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7z"
        fill="currentColor"
        opacity="0.15"
      />
      <path
        d="M8 1C4.134 1 1 4.134 1 8s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M8 7.5V11"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="8" cy="5.5" r="0.75" fill="currentColor" />
    </svg>
  ),
};

/* ─── Color config ─── */

const typeStyles: Record<
  ToastType,
  { accent: string; icon: string }
> = {
  success: {
    accent: "#22c55e",
    icon: "#4ade80",
  },
  error: {
    accent: "#ef4444",
    icon: "#f87171",
  },
  info: {
    accent: "#6366f1",
    icon: "#818cf8",
  },
};

/* ─── Single toast item ─── */

const ToastItem: React.FC<{
  toast: Toast;
  onDismiss: (id: string) => void;
}> = ({ toast: t, onDismiss }) => {
  const style = typeStyles[t.type];

  return (
    <div
      className="toast-item"
      style={{
        background: "#1c1c1e",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        borderLeft: `3px solid ${style.accent}`,
        animation: t.exiting
          ? "toastOut 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards"
          : "toastIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      }}
    >
      <span className="toast-icon" style={{ color: style.icon }}>
        {toastIcons[t.type]}
      </span>
      <span className="toast-message" style={{ color: "#e4e4e7" }}>
        {t.message}
      </span>
      <button
        onClick={() => onDismiss(t.id)}
        className="toast-close"
        style={{ color: "#a1a1aa" }}
      >
        <Icons.Close className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};

/* ─── Provider ─── */

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const timersRef = useRef<Map<string, ReturnType<typeof setTimeout>>>(
    new Map(),
  );

  const dismiss = useCallback((id: string) => {
    // Start exit animation
    setToasts((prev) =>
      prev.map((t) => (t.id === id ? { ...t, exiting: true } : t)),
    );
    // Remove after animation
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 250);
    // Clear auto-dismiss timer
    const timer = timersRef.current.get(id);
    if (timer) {
      clearTimeout(timer);
      timersRef.current.delete(id);
    }
  }, []);

  const addToast = useCallback(
    (type: ToastType, message: string, duration = 4000) => {
      const id = `toast-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
      const newToast: Toast = { id, message, type, duration, exiting: false };

      setToasts((prev) => {
        // Max 5 visible toasts
        const next = [...prev, newToast];
        if (next.length > 5) return next.slice(-5);
        return next;
      });

      // Auto-dismiss
      const timer = setTimeout(() => dismiss(id), duration);
      timersRef.current.set(id, timer);
    },
    [dismiss],
  );

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      timersRef.current.forEach((timer) => clearTimeout(timer));
    };
  }, []);

  const toast = {
    success: (msg: string, dur?: number) => addToast("success", msg, dur),
    error: (msg: string, dur?: number) => addToast("error", msg, dur),
    info: (msg: string, dur?: number) => addToast("info", msg, dur),
  };

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      {/* Toast container */}
      {toasts.length > 0 && (
        <div className="toast-container">
          {toasts.map((t) => (
            <ToastItem key={t.id} toast={t} onDismiss={dismiss} />
          ))}
        </div>
      )}
    </ToastContext.Provider>
  );
};
