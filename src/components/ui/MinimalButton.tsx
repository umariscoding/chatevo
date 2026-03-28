import React from "react";
import IOSLoader from "./IOSLoader";

interface MinimalButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
  theme?: "default" | "auth";
}

const MinimalButton = React.forwardRef<HTMLButtonElement, MinimalButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      loading = false,
      fullWidth = false,
      className = "",
      children,
      disabled,
      theme = "default",
      ...props
    },
    ref,
  ) => {
    const baseClasses = `
      inline-flex items-center justify-center rounded-lg font-medium
      transition-all duration-200 focus:outline-none
      disabled:bg-zinc-800 disabled:text-zinc-600 disabled:cursor-not-allowed disabled:opacity-100
      ${fullWidth ? "w-full" : ""}
    `;

    const defaultVariants = {
      primary: `
        bg-[#6366f1] hover:bg-[#4f46e5] text-white hover:text-white
        focus:ring-2 focus:ring-[rgba(99,102,241,0.4)] focus:ring-offset-1
        shadow-lg shadow-[rgba(99,102,241,0.25)] hover:shadow-xl hover:shadow-[rgba(99,102,241,0.35)]
      `,
      secondary: `
        bg-zinc-800 hover:bg-zinc-700 text-zinc-100 hover:text-white
        focus:ring-2 focus:ring-[rgba(99,102,241,0.3)] focus:ring-offset-1
        border border-zinc-700 hover:border-zinc-600
      `,
      ghost: `
        bg-transparent hover:bg-zinc-800 text-zinc-300 hover:text-zinc-100
        focus:ring-2 focus:ring-[rgba(99,102,241,0.3)] focus:ring-offset-1
      `,
      outline: `
        bg-transparent border border-zinc-700 hover:border-zinc-500
        text-zinc-300 hover:text-zinc-100 hover:bg-zinc-800
        focus:ring-2 focus:ring-[rgba(99,102,241,0.3)] focus:ring-offset-1
      `,
    };

    const authVariants = {
      primary: `
        bg-[#6366f1] hover:bg-[#4f46e5] text-white hover:text-white
        focus:ring-2 focus:ring-[rgba(99,102,241,0.4)] focus:ring-offset-1 focus:ring-offset-zinc-950
        shadow-lg shadow-[rgba(99,102,241,0.25)] hover:shadow-xl hover:shadow-[rgba(99,102,241,0.35)]
        hover:scale-[1.01] active:scale-[0.99]
      `,
      secondary: `
        bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-zinc-100
        focus:ring-2 focus:ring-[rgba(99,102,241,0.3)] focus:ring-offset-1
        border border-zinc-700 hover:border-zinc-600
      `,
      ghost: `
        bg-transparent hover:bg-zinc-800/50 text-zinc-400 hover:text-zinc-200
        focus:ring-2 focus:ring-[rgba(99,102,241,0.3)] focus:ring-offset-1
      `,
      outline: `
        bg-transparent border border-zinc-700 hover:border-zinc-600
        text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50
        focus:ring-2 focus:ring-[rgba(99,102,241,0.3)] focus:ring-offset-1
      `,
    };

    const variants = theme === "auth" ? authVariants : defaultVariants;

    const sizes = {
      sm: "px-3 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-base",
    };

    const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

    return (
      <button
        ref={ref}
        className={classes}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <div className="flex items-center space-x-2">
            <IOSLoader size="sm" color={theme === "auth" ? "zinc" : "white"} />
            <span className="text-zinc-100">Loading...</span>
          </div>
        ) : (
          children
        )}
      </button>
    );
  },
);

MinimalButton.displayName = "MinimalButton";

export default MinimalButton;
