/**
 * Centralized Color Configuration
 *
 * This file serves as the single source of truth for all colors in the application.
 * Any color changes should be made here to ensure consistency across the platform.
 *
 * The admin panel can import and modify these values to update the entire theme.
 */

export interface ColorScale {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  950?: string;
}

export interface ColorSystem {
  // Base palette
  primary: ColorScale;
  accent: ColorScale;
  neutral: ColorScale;
  zinc: ColorScale;
  slate: ColorScale;
  error: ColorScale;

  // Pure colors
  white: string;
  black: string;
  transparent: string;

  // Semantic colors
  blue: {
    500: string;
  };

  // Background colors
  background: {
    primary: string;
    secondary: string;
    tertiary: string;
    elevated: string;
    overlay: string;
    pure: string;
  };

  // Surface colors
  surface: {
    primary: string;
    secondary: string;
    tertiary: string;
    hover: string;
    active: string;
  };

  // Text colors
  text: {
    primary: string;
    secondary: string;
    tertiary: string;
    quaternary: string;
    disabled: string;
    placeholder: string;
    inverse: string;
    muted: string;
  };

  // Border colors
  border: {
    primary: string;
    secondary: string;
    tertiary: string;
    focus: string;
    error: string;
    active: string;
  };

  // Interactive colors
  interactive: {
    primary: string;
    primaryHover: string;
    primaryActive: string;
    secondary: string;
    secondaryHover: string;
    ghostHover: string;
    ghostActive: string;
  };

  // Focus & Selection
  focus: {
    ring: string;
    ringOffset: string;
  };

  selection: {
    background: string;
    indicator: string;
  };

  // Shadow colors
  shadow: {
    primary: string;
    primaryLarge: string;
    elevated: string;
    zinc: string;
    zincSubtle: string;
    input: string;
  };

  // Scrollbar colors
  scrollbar: {
    track: string;
    thumb: string;
    thumbHover: string;
    thumbFirefox: string;
  };

  // Component-specific colors
  input: {
    background: string;
    backgroundFocus: string;
    border: string;
    borderFocus: string;
    text: string;
    placeholder: string;
    autofillBackground: string;
    autofillText: string;
    ring: string;
  };

  button: {
    primary: {
      background: string;
      backgroundHover: string;
      text: string;
      shadow: string;
      shadowHover: string;
    };
    secondary: {
      background: string;
      backgroundHover: string;
      text: string;
      border: string;
      borderHover: string;
    };
    ghost: {
      background: string;
      backgroundHover: string;
      text: string;
      textHover: string;
    };
    disabled: {
      background: string;
      text: string;
    };
    auth: {
      primaryBackground: string;
      primaryBackgroundHover: string;
      primaryText: string;
      primaryShadow: string;
      primaryShadowHover: string;
      ghostBackgroundHover: string;
      ghostText: string;
      ghostTextHover: string;
    };
  };

  modal: {
    light: {
      background: string;
      text: string;
      border: string;
      close: string;
      closeHover: string;
    };
    dark: {
      background: string;
      text: string;
      border: string;
      close: string;
      closeHover: string;
    };
    auth: {
      background: string;
      text: string;
      border: string;
      close: string;
      closeHover: string;
    };
  };

  message: {
    userBackground: string;
    userText: string;
    aiText: string;
    streamingCursor: string;
  };

  chat: {
    sidebar: {
      background: string;
      border: string;
      text: string;
      textSecondary: string;
      textMuted: string;
      itemText: string;
      itemTextActive: string;
      itemTextHover: string;
      itemBackgroundActive: string;
      itemBackgroundHover: string;
      buttonText: string;
      buttonTextHover: string;
      buttonBackgroundHover: string;
    };
  };

  menu: {
    background: string;
    border: string;
    itemText: string;
    itemTextHover: string;
    itemBackgroundHover: string;
    iconText: string;
    iconTextHover: string;
    iconBackgroundHover: string;
  };

  errorAlert: {
    background: string;
    border: string;
    text: string;
    deleteBackground: string;
    deleteBackgroundHover: string;
    deleteText: string;
  };

  loader: {
    primary: string;
  };

  typingIndicator: {
    dot1: string;
    dot2: string;
    dot3: string;
    text: string;
  };

  animation: {
    text: string;
    cursor: string;
  };

  // Opacity values
  opacity: {
    10: number;
    20: number;
    25: number;
    30: number;
    40: number;
    50: number;
    60: number;
    75: number;
    80: number;
    90: number;
  };
}

/**
 * Default color configuration
 * This is the base theme that can be overridden by the admin panel
 */
export const colors: ColorSystem = {
  // Base palette - Primitive Colors
  primary: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },

  accent: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },

  neutral: {
    50: '#fafafa',
    100: '#f4f4f5',
    200: '#e4e4e7',
    300: '#d4d4d8',
    400: '#a1a1aa',
    500: '#71717a',
    600: '#52525b',
    700: '#3f3f46',
    800: '#27272a',
    900: '#18181b',
    950: '#09090b',
  },

  zinc: {
    50: '#fafafa',
    100: '#f4f4f5',
    200: '#e4e4e7',
    300: '#d4d4d8',
    400: '#a1a1aa',
    500: '#71717a',
    600: '#52525b',
    700: '#3f3f46',
    800: '#27272a',
    900: '#18181b',
    950: '#09090b',
  },

  slate: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
  },

  error: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
  },

  // Pure colors
  white: '#ffffff',
  black: '#000000',
  transparent: 'transparent',

  // Semantic colors
  blue: {
    500: '#3b82f6',
  },

  // Background colors
  background: {
    primary: '#09090b', // zinc-950
    secondary: '#18181b', // zinc-900
    tertiary: '#27272a', // zinc-800
    elevated: '#18181b', // zinc-900
    overlay: 'rgba(0, 0, 0, 0.75)',
    pure: '#000000',
  },

  // Surface colors
  surface: {
    primary: '#09090b', // zinc-950
    secondary: '#18181b', // zinc-900
    tertiary: '#27272a', // zinc-800
    hover: 'rgba(39, 39, 42, 0.9)', // zinc-800 with opacity
    active: 'rgba(39, 39, 42, 0.5)', // zinc-800 with opacity
  },

  // Text colors
  text: {
    primary: '#f4f4f5', // zinc-100
    secondary: '#e4e4e7', // zinc-200
    tertiary: '#d4d4d8', // zinc-300
    quaternary: '#a1a1aa', // zinc-400
    disabled: '#52525b', // zinc-600
    placeholder: '#71717a', // zinc-500
    inverse: '#ffffff',
    muted: '#71717a', // zinc-500
  },

  // Border colors
  border: {
    primary: '#27272a', // zinc-800
    secondary: 'rgba(82, 82, 91, 0.5)', // zinc-600 with opacity
    tertiary: 'rgba(82, 82, 91, 0.3)', // zinc-600 with opacity
    focus: '#71717a', // zinc-500
    error: '#ef4444', // error-500
    active: '#3b82f6', // blue-500
  },

  // Interactive colors
  interactive: {
    primary: '#4b5563', // primary-600
    primaryHover: '#374151', // primary-700
    primaryActive: '#1f2937', // primary-800
    secondary: '#3f3f46', // zinc-700
    secondaryHover: '#52525b', // zinc-600
    ghostHover: 'rgba(39, 39, 42, 0.9)',
    ghostActive: 'rgba(39, 39, 42, 0.5)',
  },

  // Focus & Selection
  focus: {
    ring: 'rgba(99, 102, 241, 0.4)',
    ringOffset: 'rgba(99, 102, 241, 0.1)',
  },

  selection: {
    background: '#3b82f6', // blue-500
    indicator: '#3b82f6', // blue-500
  },

  // Shadow colors
  shadow: {
    primary: 'rgba(99, 102, 241, 0.2)',
    primaryLarge: 'rgba(99, 102, 241, 0.3)',
    elevated: 'rgba(0, 0, 0, 0.25)',
    zinc: 'rgba(113, 113, 122, 0.3)',
    zincSubtle: 'rgba(82, 82, 91, 0.2)',
    input: 'rgba(113, 113, 122, 0.2)',
  },

  // Scrollbar colors
  scrollbar: {
    track: 'transparent',
    thumb: '#d4d4d8', // zinc-300
    thumbHover: '#a1a1aa', // zinc-400
    thumbFirefox: '#6b7280', // gray-500
  },

  // Input component
  input: {
    background: 'rgba(24, 24, 27, 0.4)', // zinc-900 with opacity
    backgroundFocus: 'rgba(39, 39, 42, 0.5)', // zinc-800 with opacity
    border: 'rgba(82, 82, 91, 0.5)', // zinc-600 with opacity
    borderFocus: 'rgba(113, 113, 122, 0.8)', // zinc-500 with opacity
    text: '#e4e4e7', // zinc-200
    placeholder: '#71717a', // zinc-500
    autofillBackground: '#09090b', // zinc-950
    autofillText: '#e4e4e7', // zinc-200
    ring: 'rgba(113, 113, 122, 0.2)', // zinc-500 with opacity
  },

  // Button component
  button: {
    primary: {
      background: '#4b5563', // primary-600
      backgroundHover: '#374151', // primary-700
      text: '#ffffff',
      shadow: 'rgba(99, 102, 241, 0.2)',
      shadowHover: 'rgba(99, 102, 241, 0.3)',
    },
    secondary: {
      background: '#e4e4e7', // neutral-200
      backgroundHover: '#d4d4d8', // neutral-300
      text: '#18181b', // neutral-900
      border: '#d4d4d8', // neutral-300
      borderHover: '#a1a1aa', // neutral-400
    },
    ghost: {
      background: 'transparent',
      backgroundHover: '#f4f4f5', // neutral-100
      text: '#3f3f46', // neutral-700
      textHover: '#18181b', // neutral-900
    },
    disabled: {
      background: '#27272a', // zinc-800
      text: '#52525b', // zinc-600
    },
    auth: {
      primaryBackground: 'var(--color-accent-brand)',
      primaryBackgroundHover: 'var(--color-accent-brand-dark)',
      primaryText: '#ffffff',
      primaryShadow: 'rgba(99, 102, 241, 0.4)',
      primaryShadowHover: 'rgba(99, 102, 241, 0.6)',
      ghostBackgroundHover: '#27272a', // zinc-800
      ghostText: '#d4d4d8', // zinc-300
      ghostTextHover: '#f4f4f5', // zinc-100
    },
  },

  // Modal component
  modal: {
    light: {
      background: '#ffffff',
      text: '#18181b', // neutral-900
      border: '#e4e4e7', // neutral-200
      close: '#52525b', // neutral-600
      closeHover: '#18181b', // neutral-900
    },
    dark: {
      background: '#18181b', // neutral-900
      text: '#fafafa', // neutral-50
      border: '#27272a', // neutral-800
      close: '#52525b', // neutral-600
      closeHover: '#71717a', // neutral-500
    },
    auth: {
      background: '#09090b', // zinc-950
      text: '#fafafa', // zinc-50
      border: '#27272a', // zinc-800
      close: '#a1a1aa', // zinc-400
      closeHover: '#d4d4d8', // zinc-300
    },
  },

  // Message bubbles
  message: {
    userBackground: '#27272a', // zinc-800
    userText: '#e4e4e7', // zinc-200
    aiText: '#d4d4d8', // zinc-300
    streamingCursor: '#52525b', // zinc-600
  },

  // Chat UI
  chat: {
    sidebar: {
      background: '#09090b', // zinc-950
      border: '#27272a', // zinc-800
      text: '#ffffff',
      textSecondary: '#f4f4f5', // zinc-100
      textMuted: '#71717a', // zinc-500
      itemText: '#a1a1aa', // zinc-400
      itemTextActive: '#f4f4f5', // zinc-100
      itemTextHover: '#d4d4d8', // zinc-300
      itemBackgroundActive: 'rgba(39, 39, 42, 0.9)',
      itemBackgroundHover: 'rgba(39, 39, 42, 0.5)',
      buttonText: '#d4d4d8', // zinc-300
      buttonTextHover: '#f4f4f5', // zinc-100
      buttonBackgroundHover: 'rgba(39, 39, 42, 0.9)',
    },
  },

  // Dropdown/Menu
  menu: {
    background: '#27272a', // zinc-800
    border: '#3f3f46', // zinc-700
    itemText: '#d4d4d8', // zinc-300
    itemTextHover: '#f4f4f5', // zinc-100
    itemBackgroundHover: '#3f3f46', // zinc-700
    iconText: '#71717a', // zinc-500
    iconTextHover: '#d4d4d8', // zinc-300
    iconBackgroundHover: '#27272a', // zinc-800
  },

  // Error/Alert states
  errorAlert: {
    background: 'rgba(239, 68, 68, 0.1)',
    border: 'rgba(239, 68, 68, 0.2)',
    text: '#f87171', // error-400
    deleteBackground: '#dc2626', // error-600
    deleteBackgroundHover: '#b91c1c', // error-700
    deleteText: '#ffffff',
  },

  // Loading/Animation
  loader: {
    primary: '#4b5563', // primary-600
  },

  typingIndicator: {
    dot1: '#6b7280', // primary-500
    dot2: '#4b5563', // primary-600
    dot3: '#374151', // primary-700
    text: '#d4d4d8', // zinc-300
  },

  animation: {
    text: '#6b7280', // gray-500
    cursor: '#6b7280', // gray-500
  },

  // Opacity values
  opacity: {
    10: 0.1,
    20: 0.2,
    25: 0.25,
    30: 0.3,
    40: 0.4,
    50: 0.5,
    60: 0.6,
    75: 0.75,
    80: 0.8,
    90: 0.9,
  },
};

/**
 * Generate CSS variables from the color configuration
 * This function can be used to dynamically update CSS variables
 */
export const generateCSSVariables = (colorConfig: ColorSystem): string => {
  const cssVars: string[] = [':root {'];

  // Base palette
  Object.entries(colorConfig.primary).forEach(([key, value]) => {
    cssVars.push(`  --color-primary-${key}: ${value};`);
  });

  Object.entries(colorConfig.accent).forEach(([key, value]) => {
    cssVars.push(`  --color-accent-${key}: ${value};`);
  });

  Object.entries(colorConfig.neutral).forEach(([key, value]) => {
    cssVars.push(`  --color-neutral-${key}: ${value};`);
  });

  Object.entries(colorConfig.zinc).forEach(([key, value]) => {
    cssVars.push(`  --color-zinc-${key}: ${value};`);
  });

  Object.entries(colorConfig.slate).forEach(([key, value]) => {
    cssVars.push(`  --color-slate-${key}: ${value};`);
  });

  Object.entries(colorConfig.error).forEach(([key, value]) => {
    cssVars.push(`  --color-error-${key}: ${value};`);
  });

  // Pure colors
  cssVars.push(`  --color-white: ${colorConfig.white};`);
  cssVars.push(`  --color-black: ${colorConfig.black};`);
  cssVars.push(`  --color-transparent: ${colorConfig.transparent};`);

  // Semantic colors
  cssVars.push(`  --color-blue-500: ${colorConfig.blue[500]};`);

  // Background
  cssVars.push(`  --bg-primary: ${colorConfig.background.primary};`);
  cssVars.push(`  --bg-secondary: ${colorConfig.background.secondary};`);
  cssVars.push(`  --bg-tertiary: ${colorConfig.background.tertiary};`);
  cssVars.push(`  --bg-elevated: ${colorConfig.background.elevated};`);
  cssVars.push(`  --bg-overlay: ${colorConfig.background.overlay};`);
  cssVars.push(`  --bg-pure: ${colorConfig.background.pure};`);

  cssVars.push('}');

  return cssVars.join('\n');
};

/**
 * Apply color configuration to the document
 * This function updates CSS variables dynamically
 */
export const applyColorConfiguration = (colorConfig: ColorSystem): void => {
  const root = document.documentElement;

  // Apply base palette
  Object.entries(colorConfig.primary).forEach(([key, value]) => {
    root.style.setProperty(`--color-primary-${key}`, value);
  });

  Object.entries(colorConfig.accent).forEach(([key, value]) => {
    root.style.setProperty(`--color-accent-${key}`, value);
  });

  Object.entries(colorConfig.neutral).forEach(([key, value]) => {
    root.style.setProperty(`--color-neutral-${key}`, value);
  });

  Object.entries(colorConfig.zinc).forEach(([key, value]) => {
    root.style.setProperty(`--color-zinc-${key}`, value);
  });

  Object.entries(colorConfig.slate).forEach(([key, value]) => {
    root.style.setProperty(`--color-slate-${key}`, value);
  });

  Object.entries(colorConfig.error).forEach(([key, value]) => {
    root.style.setProperty(`--color-error-${key}`, value);
  });

  // Apply pure colors
  root.style.setProperty('--color-white', colorConfig.white);
  root.style.setProperty('--color-black', colorConfig.black);
  root.style.setProperty('--color-transparent', colorConfig.transparent);

  // Apply semantic colors
  root.style.setProperty('--color-blue-500', colorConfig.blue[500]);

  // Apply background colors
  root.style.setProperty('--bg-primary', colorConfig.background.primary);
  root.style.setProperty('--bg-secondary', colorConfig.background.secondary);
  root.style.setProperty('--bg-tertiary', colorConfig.background.tertiary);
  root.style.setProperty('--bg-elevated', colorConfig.background.elevated);
  root.style.setProperty('--bg-overlay', colorConfig.background.overlay);
  root.style.setProperty('--bg-pure', colorConfig.background.pure);

  // Surface colors
  root.style.setProperty('--surface-primary', colorConfig.surface.primary);
  root.style.setProperty('--surface-secondary', colorConfig.surface.secondary);
  root.style.setProperty('--surface-tertiary', colorConfig.surface.tertiary);
  root.style.setProperty('--surface-hover', colorConfig.surface.hover);
  root.style.setProperty('--surface-active', colorConfig.surface.active);

  // Text colors
  root.style.setProperty('--text-primary', colorConfig.text.primary);
  root.style.setProperty('--text-secondary', colorConfig.text.secondary);
  root.style.setProperty('--text-tertiary', colorConfig.text.tertiary);
  root.style.setProperty('--text-quaternary', colorConfig.text.quaternary);
  root.style.setProperty('--text-disabled', colorConfig.text.disabled);
  root.style.setProperty('--text-placeholder', colorConfig.text.placeholder);
  root.style.setProperty('--text-inverse', colorConfig.text.inverse);
  root.style.setProperty('--text-muted', colorConfig.text.muted);

  // Border colors
  root.style.setProperty('--border-primary', colorConfig.border.primary);
  root.style.setProperty('--border-secondary', colorConfig.border.secondary);
  root.style.setProperty('--border-tertiary', colorConfig.border.tertiary);
  root.style.setProperty('--border-focus', colorConfig.border.focus);
  root.style.setProperty('--border-error', colorConfig.border.error);
  root.style.setProperty('--border-active', colorConfig.border.active);

  // Interactive colors
  root.style.setProperty('--interactive-primary', colorConfig.interactive.primary);
  root.style.setProperty('--interactive-primary-hover', colorConfig.interactive.primaryHover);
  root.style.setProperty('--interactive-primary-active', colorConfig.interactive.primaryActive);
  root.style.setProperty('--interactive-secondary', colorConfig.interactive.secondary);
  root.style.setProperty('--interactive-secondary-hover', colorConfig.interactive.secondaryHover);
  root.style.setProperty('--interactive-ghost-hover', colorConfig.interactive.ghostHover);
  root.style.setProperty('--interactive-ghost-active', colorConfig.interactive.ghostActive);

  // Input colors
  root.style.setProperty('--input-bg', colorConfig.input.background);
  root.style.setProperty('--input-bg-focus', colorConfig.input.backgroundFocus);
  root.style.setProperty('--input-border', colorConfig.input.border);
  root.style.setProperty('--input-border-focus', colorConfig.input.borderFocus);
  root.style.setProperty('--input-text', colorConfig.input.text);
  root.style.setProperty('--input-placeholder', colorConfig.input.placeholder);
  root.style.setProperty('--input-ring', colorConfig.input.ring);

  // Button colors
  root.style.setProperty('--button-primary-bg', colorConfig.button.primary.background);
  root.style.setProperty('--button-primary-bg-hover', colorConfig.button.primary.backgroundHover);
  root.style.setProperty('--button-primary-text', colorConfig.button.primary.text);

  // Message colors
  root.style.setProperty('--message-user-bg', colorConfig.message.userBackground);
  root.style.setProperty('--message-user-text', colorConfig.message.userText);
  root.style.setProperty('--message-ai-text', colorConfig.message.aiText);

  // Chat sidebar
  root.style.setProperty('--chat-sidebar-bg', colorConfig.chat.sidebar.background);
  root.style.setProperty('--chat-sidebar-border', colorConfig.chat.sidebar.border);
  root.style.setProperty('--chat-sidebar-text', colorConfig.chat.sidebar.text);
  root.style.setProperty('--chat-sidebar-item-text', colorConfig.chat.sidebar.itemText);
  root.style.setProperty('--chat-sidebar-item-text-active', colorConfig.chat.sidebar.itemTextActive);

  // Menu colors
  root.style.setProperty('--menu-bg', colorConfig.menu.background);
  root.style.setProperty('--menu-border', colorConfig.menu.border);
  root.style.setProperty('--menu-item-text', colorConfig.menu.itemText);

  // Loader
  root.style.setProperty('--loader-primary', colorConfig.loader.primary);
};

// Theme presets - Beautiful color combinations for different themes
export type ThemeName = 'dark' | 'green-dark' | 'light' | 'ocean' | 'purple';

export const themes: Record<ThemeName, ColorSystem> = {
  // Current dark theme (zinc-based)
  dark: colors,

  // Green dark theme - Nature inspired
  'green-dark': {
    ...colors,
    primary: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#22c55e',
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d',
    },
    zinc: {
      50: '#ecfdf5',
      100: '#d1fae5',
      200: '#a7f3d0',
      300: '#6ee7b7',
      400: '#34d399',
      500: '#10b981',
      600: '#059669',
      700: '#047857',
      800: '#1a3d2b',
      900: '#0f2818',
      950: '#0a1f0f',
    },
    neutral: {
      50: '#ecfdf5',
      100: '#d1fae5',
      200: '#a7f3d0',
      300: '#6ee7b7',
      400: '#34d399',
      500: '#10b981',
      600: '#059669',
      700: '#047857',
      800: '#1a3d2b',
      900: '#0f2818',
      950: '#0a1f0f',
    },
    accent: {
      50: '#ecfdf5',
      100: '#d1fae5',
      200: '#a7f3d0',
      300: '#6ee7b7',
      400: '#34d399',
      500: '#10b981',
      600: '#059669',
      700: '#047857',
      800: '#065f46',
      900: '#064e3b',
    },
    background: {
      primary: '#0a1f0f', // Very dark green
      secondary: '#0f2818', // Dark forest green
      tertiary: '#1a3d2b', // Muted green
      elevated: '#0f2818',
      overlay: 'rgba(10, 31, 15, 0.75)',
      pure: '#000000',
    },
    surface: {
      primary: '#0a1f0f',
      secondary: '#0f2818',
      tertiary: '#1a3d2b',
      hover: 'rgba(26, 61, 43, 0.9)',
      active: 'rgba(26, 61, 43, 0.5)',
    },
    text: {
      primary: '#d1fae5', // Light mint
      secondary: '#a7f3d0', // Soft mint
      tertiary: '#6ee7b7', // Green tint
      quaternary: '#34d399',
      disabled: '#059669',
      placeholder: '#10b981',
      inverse: '#ffffff',
      muted: '#10b981',
    },
    border: {
      primary: '#1a3d2b',
      secondary: 'rgba(5, 150, 105, 0.5)',
      tertiary: 'rgba(5, 150, 105, 0.3)',
      focus: '#10b981',
      error: '#ef4444',
      active: '#22c55e',
    },
    interactive: {
      primary: '#16a34a',
      primaryHover: '#15803d',
      primaryActive: '#166534',
      secondary: '#047857',
      secondaryHover: '#059669',
      ghostHover: 'rgba(26, 61, 43, 0.9)',
      ghostActive: 'rgba(26, 61, 43, 0.5)',
    },
    focus: {
      ring: 'rgba(34, 197, 94, 0.4)',
      ringOffset: 'rgba(34, 197, 94, 0.1)',
    },
    selection: {
      background: '#22c55e',
      indicator: '#22c55e',
    },
    shadow: {
      primary: 'rgba(34, 197, 94, 0.2)',
      primaryLarge: 'rgba(34, 197, 94, 0.3)',
      elevated: 'rgba(0, 0, 0, 0.25)',
      zinc: 'rgba(16, 185, 129, 0.3)',
      zincSubtle: 'rgba(5, 150, 105, 0.2)',
      input: 'rgba(16, 185, 129, 0.2)',
    },
    input: {
      background: 'rgba(15, 40, 24, 0.4)',
      backgroundFocus: 'rgba(26, 61, 43, 0.5)',
      border: 'rgba(5, 150, 105, 0.5)',
      borderFocus: 'rgba(16, 185, 129, 0.8)',
      text: '#a7f3d0',
      placeholder: '#10b981',
      autofillBackground: '#0a1f0f',
      autofillText: '#a7f3d0',
      ring: 'rgba(16, 185, 129, 0.2)',
    },
    button: {
      primary: {
        background: '#16a34a',
        backgroundHover: '#15803d',
        text: '#ffffff',
        shadow: 'rgba(34, 197, 94, 0.2)',
        shadowHover: 'rgba(34, 197, 94, 0.3)',
      },
      secondary: colors.button.secondary,
      ghost: colors.button.ghost,
      disabled: colors.button.disabled,
      auth: colors.button.auth,
    },
    message: {
      userBackground: '#1a3d2b',
      userText: '#a7f3d0',
      aiText: '#6ee7b7',
      streamingCursor: '#059669',
    },
    chat: {
      sidebar: {
        background: '#0a1f0f',
        border: '#1a3d2b',
        text: '#ffffff',
        textSecondary: '#d1fae5',
        textMuted: '#10b981',
        itemText: '#34d399',
        itemTextActive: '#d1fae5',
        itemTextHover: '#6ee7b7',
        itemBackgroundActive: 'rgba(26, 61, 43, 0.9)',
        itemBackgroundHover: 'rgba(26, 61, 43, 0.5)',
        buttonText: '#6ee7b7',
        buttonTextHover: '#d1fae5',
        buttonBackgroundHover: 'rgba(26, 61, 43, 0.9)',
      },
    },
    menu: {
      background: '#1a3d2b',
      border: '#047857',
      itemText: '#6ee7b7',
      itemTextHover: '#d1fae5',
      itemBackgroundHover: '#047857',
      iconText: '#10b981',
      iconTextHover: '#6ee7b7',
      iconBackgroundHover: '#1a3d2b',
    },
    loader: {
      primary: '#16a34a',
    },
    typingIndicator: {
      dot1: '#22c55e',
      dot2: '#16a34a',
      dot3: '#15803d',
      text: '#6ee7b7',
    },
    animation: {
      text: '#22c55e',
      cursor: '#22c55e',
    },
  },

  // Light theme - Clean and modern
  light: {
    ...colors,
    primary: {
      50: '#fafafa',
      100: '#f4f4f5',
      200: '#e4e4e7',
      300: '#d4d4d8',
      400: '#a1a1aa',
      500: '#71717a',
      600: '#52525b',
      700: '#3f3f46',
      800: '#27272a',
      900: '#18181b',
    },
    zinc: {
      50: '#000000',
      100: '#1a1a1a',
      200: '#333333',
      300: '#4d4d4d',
      400: '#666666',
      500: '#808080',
      600: '#999999',
      700: '#b3b3b3',
      800: '#f5f5f5',
      900: '#fafafa',
      950: '#ffffff',
    },
    neutral: {
      50: '#000000',
      100: '#1a1a1a',
      200: '#333333',
      300: '#4d4d4d',
      400: '#666666',
      500: '#808080',
      600: '#999999',
      700: '#b3b3b3',
      800: '#f5f5f5',
      900: '#fafafa',
      950: '#ffffff',
    },
    accent: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#38bdf8',
      500: '#0ea5e9',
      600: '#0284c7',
      700: '#0369a1',
      800: '#075985',
      900: '#0c4a6e',
    },
    background: {
      primary: '#ffffff',
      secondary: '#ffffff',
      tertiary: '#f5f5f5',
      elevated: '#ffffff',
      overlay: 'rgba(0, 0, 0, 0.4)',
      pure: '#ffffff',
    },
    surface: {
      primary: '#ffffff',
      secondary: '#ffffff',
      tertiary: '#f5f5f5',
      hover: 'rgba(245, 245, 245, 0.9)',
      active: 'rgba(224, 224, 224, 0.7)',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
      tertiary: '#999999',
      quaternary: '#b3b3b3',
      disabled: '#cccccc',
      placeholder: '#999999',
      inverse: '#ffffff',
      muted: '#888888',
    },
    border: {
      primary: '#e0e0e0',
      secondary: '#d0d0d0',
      tertiary: '#f0f0f0',
      focus: '#0ea5e9',
      error: '#ef4444',
      active: '#0284c7',
    },
    interactive: {
      primary: '#0ea5e9',
      primaryHover: '#0284c7',
      primaryActive: '#0369a1',
      secondary: '#f1f5f9',
      secondaryHover: '#e2e8f0',
      ghostHover: 'rgba(241, 245, 249, 0.9)',
      ghostActive: 'rgba(226, 232, 240, 0.7)',
    },
    focus: {
      ring: 'rgba(14, 165, 233, 0.3)',
      ringOffset: 'rgba(14, 165, 233, 0.1)',
    },
    selection: {
      background: '#0ea5e9',
      indicator: '#0ea5e9',
    },
    shadow: {
      primary: 'rgba(14, 165, 233, 0.15)',
      primaryLarge: 'rgba(14, 165, 233, 0.2)',
      elevated: 'rgba(0, 0, 0, 0.1)',
      zinc: 'rgba(100, 116, 139, 0.15)',
      zincSubtle: 'rgba(148, 163, 184, 0.1)',
      input: 'rgba(100, 116, 139, 0.1)',
    },
    scrollbar: {
      track: 'transparent',
      thumb: '#cbd5e1',
      thumbHover: '#94a3b8',
      thumbFirefox: '#94a3b8',
    },
    input: {
      background: '#ffffff',
      backgroundFocus: '#ffffff',
      border: '#e2e8f0',
      borderFocus: '#0ea5e9',
      text: '#0f172a',
      placeholder: '#94a3b8',
      autofillBackground: '#f8fafc',
      autofillText: '#0f172a',
      ring: 'rgba(14, 165, 233, 0.15)',
    },
    button: {
      primary: {
        background: '#0ea5e9',
        backgroundHover: '#0284c7',
        text: '#ffffff',
        shadow: 'rgba(14, 165, 233, 0.2)',
        shadowHover: 'rgba(14, 165, 233, 0.3)',
      },
      secondary: {
        background: '#f1f5f9',
        backgroundHover: '#e2e8f0',
        text: '#0f172a',
        border: '#e2e8f0',
        borderHover: '#cbd5e1',
      },
      ghost: {
        background: 'transparent',
        backgroundHover: '#f1f5f9',
        text: '#334155',
        textHover: '#0f172a',
      },
      disabled: {
        background: '#f1f5f9',
        text: '#cbd5e1',
      },
      auth: {
        primaryBackground: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
        primaryBackgroundHover: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
        primaryText: '#ffffff',
        primaryShadow: 'rgba(14, 165, 233, 0.3)',
        primaryShadowHover: 'rgba(14, 165, 233, 0.5)',
        ghostBackgroundHover: '#f1f5f9',
        ghostText: '#334155',
        ghostTextHover: '#0f172a',
      },
    },
    modal: {
      light: {
        background: '#ffffff',
        text: '#0f172a',
        border: '#e2e8f0',
        close: '#64748b',
        closeHover: '#334155',
      },
      dark: {
        background: '#f8fafc',
        text: '#0f172a',
        border: '#e2e8f0',
        close: '#64748b',
        closeHover: '#334155',
      },
      auth: {
        background: '#ffffff',
        text: '#0f172a',
        border: '#e2e8f0',
        close: '#64748b',
        closeHover: '#334155',
      },
    },
    message: {
      userBackground: '#e0f2fe',
      userText: '#0c4a6e',
      aiText: '#334155',
      streamingCursor: '#94a3b8',
    },
    chat: {
      sidebar: {
        background: '#f8fafc',
        border: '#e2e8f0',
        text: '#0f172a',
        textSecondary: '#334155',
        textMuted: '#64748b',
        itemText: '#64748b',
        itemTextActive: '#0f172a',
        itemTextHover: '#334155',
        itemBackgroundActive: 'rgba(226, 232, 240, 0.9)',
        itemBackgroundHover: 'rgba(241, 245, 249, 0.7)',
        buttonText: '#64748b',
        buttonTextHover: '#334155',
        buttonBackgroundHover: 'rgba(226, 232, 240, 0.7)',
      },
    },
    menu: {
      background: '#ffffff',
      border: '#e2e8f0',
      itemText: '#334155',
      itemTextHover: '#0f172a',
      itemBackgroundHover: '#f1f5f9',
      iconText: '#64748b',
      iconTextHover: '#334155',
      iconBackgroundHover: '#f8fafc',
    },
    errorAlert: {
      background: 'rgba(239, 68, 68, 0.05)',
      border: 'rgba(239, 68, 68, 0.15)',
      text: '#dc2626',
      deleteBackground: '#dc2626',
      deleteBackgroundHover: '#b91c1c',
      deleteText: '#ffffff',
    },
    loader: {
      primary: '#0ea5e9',
    },
    typingIndicator: {
      dot1: '#0ea5e9',
      dot2: '#0284c7',
      dot3: '#0369a1',
      text: '#64748b',
    },
    animation: {
      text: '#0ea5e9',
      cursor: '#0ea5e9',
    },
  },

  // Ocean theme - Deep blue
  ocean: {
    ...colors,
    primary: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
    },
    zinc: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#38bdf8',
      500: '#0ea5e9',
      600: '#0284c7',
      700: '#1e3a5f',
      800: '#0d2238',
      900: '#0a1929',
      950: '#051220',
    },
    neutral: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#38bdf8',
      500: '#0ea5e9',
      600: '#0284c7',
      700: '#1e3a5f',
      800: '#0d2238',
      900: '#0a1929',
      950: '#051220',
    },
    accent: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#38bdf8',
      500: '#0ea5e9',
      600: '#0284c7',
      700: '#0369a1',
      800: '#075985',
      900: '#0c4a6e',
    },
    background: {
      primary: '#0a1929', // Deep ocean blue
      secondary: '#0d2238', // Dark blue
      tertiary: '#1e3a5f', // Ocean blue
      elevated: '#0d2238',
      overlay: 'rgba(10, 25, 41, 0.75)',
      pure: '#000000',
    },
    surface: {
      primary: '#0a1929',
      secondary: '#0d2238',
      tertiary: '#1e3a5f',
      hover: 'rgba(30, 58, 95, 0.9)',
      active: 'rgba(30, 58, 95, 0.5)',
    },
    text: {
      primary: '#dbeafe', // Light blue
      secondary: '#bfdbfe', // Soft blue
      tertiary: '#93c5fd', // Sky blue
      quaternary: '#60a5fa',
      disabled: '#2563eb',
      placeholder: '#3b82f6',
      inverse: '#ffffff',
      muted: '#3b82f6',
    },
    border: {
      primary: '#1e3a5f',
      secondary: 'rgba(37, 99, 235, 0.5)',
      tertiary: 'rgba(37, 99, 235, 0.3)',
      focus: '#3b82f6',
      error: '#ef4444',
      active: '#60a5fa',
    },
    interactive: {
      primary: '#2563eb',
      primaryHover: '#1d4ed8',
      primaryActive: '#1e40af',
      secondary: '#0369a1',
      secondaryHover: '#0284c7',
      ghostHover: 'rgba(30, 58, 95, 0.9)',
      ghostActive: 'rgba(30, 58, 95, 0.5)',
    },
    focus: {
      ring: 'rgba(59, 130, 246, 0.4)',
      ringOffset: 'rgba(59, 130, 246, 0.1)',
    },
    selection: {
      background: '#3b82f6',
      indicator: '#3b82f6',
    },
    shadow: {
      primary: 'rgba(59, 130, 246, 0.2)',
      primaryLarge: 'rgba(59, 130, 246, 0.3)',
      elevated: 'rgba(0, 0, 0, 0.25)',
      zinc: 'rgba(59, 130, 246, 0.3)',
      zincSubtle: 'rgba(37, 99, 235, 0.2)',
      input: 'rgba(59, 130, 246, 0.2)',
    },
    input: {
      background: 'rgba(13, 34, 56, 0.4)',
      backgroundFocus: 'rgba(30, 58, 95, 0.5)',
      border: 'rgba(37, 99, 235, 0.5)',
      borderFocus: 'rgba(59, 130, 246, 0.8)',
      text: '#bfdbfe',
      placeholder: '#3b82f6',
      autofillBackground: '#0a1929',
      autofillText: '#bfdbfe',
      ring: 'rgba(59, 130, 246, 0.2)',
    },
    button: {
      primary: {
        background: '#2563eb',
        backgroundHover: '#1d4ed8',
        text: '#ffffff',
        shadow: 'rgba(59, 130, 246, 0.2)',
        shadowHover: 'rgba(59, 130, 246, 0.3)',
      },
      secondary: colors.button.secondary,
      ghost: colors.button.ghost,
      disabled: colors.button.disabled,
      auth: colors.button.auth,
    },
    message: {
      userBackground: '#1e3a5f',
      userText: '#bfdbfe',
      aiText: '#93c5fd',
      streamingCursor: '#2563eb',
    },
    chat: {
      sidebar: {
        background: '#0a1929',
        border: '#1e3a5f',
        text: '#ffffff',
        textSecondary: '#dbeafe',
        textMuted: '#3b82f6',
        itemText: '#60a5fa',
        itemTextActive: '#dbeafe',
        itemTextHover: '#93c5fd',
        itemBackgroundActive: 'rgba(30, 58, 95, 0.9)',
        itemBackgroundHover: 'rgba(30, 58, 95, 0.5)',
        buttonText: '#93c5fd',
        buttonTextHover: '#dbeafe',
        buttonBackgroundHover: 'rgba(30, 58, 95, 0.9)',
      },
    },
    menu: {
      background: '#1e3a5f',
      border: '#0369a1',
      itemText: '#93c5fd',
      itemTextHover: '#dbeafe',
      itemBackgroundHover: '#0369a1',
      iconText: '#3b82f6',
      iconTextHover: '#93c5fd',
      iconBackgroundHover: '#1e3a5f',
    },
    loader: {
      primary: '#2563eb',
    },
    typingIndicator: {
      dot1: '#3b82f6',
      dot2: '#2563eb',
      dot3: '#1d4ed8',
      text: '#93c5fd',
    },
    animation: {
      text: '#3b82f6',
      cursor: '#3b82f6',
    },
  },

  // Purple theme - Vibrant and modern
  purple: {
    ...colors,
    primary: {
      50: '#faf5ff',
      100: '#f3e8ff',
      200: '#e9d5ff',
      300: '#d8b4fe',
      400: '#c084fc',
      500: '#a855f7',
      600: '#9333ea',
      700: '#7e22ce',
      800: '#6b21a8',
      900: '#581c87',
    },
    zinc: {
      50: '#fdf4ff',
      100: '#fae8ff',
      200: '#f5d0fe',
      300: '#f0abfc',
      400: '#e879f9',
      500: '#d946ef',
      600: '#c026d3',
      700: '#3d1e6b',
      800: '#240f3f',
      900: '#1a0b2e',
      950: '#0f0518',
    },
    neutral: {
      50: '#fdf4ff',
      100: '#fae8ff',
      200: '#f5d0fe',
      300: '#f0abfc',
      400: '#e879f9',
      500: '#d946ef',
      600: '#c026d3',
      700: '#3d1e6b',
      800: '#240f3f',
      900: '#1a0b2e',
      950: '#0f0518',
    },
    accent: {
      50: '#fdf4ff',
      100: '#fae8ff',
      200: '#f5d0fe',
      300: '#f0abfc',
      400: '#e879f9',
      500: '#d946ef',
      600: '#c026d3',
      700: '#a21caf',
      800: '#86198f',
      900: '#701a75',
    },
    background: {
      primary: '#1a0b2e', // Deep purple night
      secondary: '#240f3f', // Dark purple
      tertiary: '#3d1e6b', // Rich purple
      elevated: '#240f3f',
      overlay: 'rgba(26, 11, 46, 0.75)',
      pure: '#000000',
    },
    surface: {
      primary: '#1a0b2e',
      secondary: '#240f3f',
      tertiary: '#3d1e6b',
      hover: 'rgba(61, 30, 107, 0.9)',
      active: 'rgba(61, 30, 107, 0.5)',
    },
    text: {
      primary: '#f3e8ff', // Light purple
      secondary: '#e9d5ff', // Soft purple
      tertiary: '#d8b4fe', // Lavender
      quaternary: '#c084fc',
      disabled: '#9333ea',
      placeholder: '#a855f7',
      inverse: '#ffffff',
      muted: '#a855f7',
    },
    border: {
      primary: '#3d1e6b',
      secondary: 'rgba(99, 102, 241, 0.5)',
      tertiary: 'rgba(99, 102, 241, 0.3)',
      focus: '#a855f7',
      error: '#ef4444',
      active: '#c084fc',
    },
    interactive: {
      primary: '#9333ea',
      primaryHover: '#7e22ce',
      primaryActive: '#6b21a8',
      secondary: '#a21caf',
      secondaryHover: '#c026d3',
      ghostHover: 'rgba(61, 30, 107, 0.9)',
      ghostActive: 'rgba(61, 30, 107, 0.5)',
    },
    focus: {
      ring: 'rgba(168, 85, 247, 0.4)',
      ringOffset: 'rgba(168, 85, 247, 0.1)',
    },
    selection: {
      background: '#a855f7',
      indicator: '#a855f7',
    },
    shadow: {
      primary: 'rgba(168, 85, 247, 0.2)',
      primaryLarge: 'rgba(168, 85, 247, 0.3)',
      elevated: 'rgba(0, 0, 0, 0.25)',
      zinc: 'rgba(168, 85, 247, 0.3)',
      zincSubtle: 'rgba(99, 102, 241, 0.2)',
      input: 'rgba(168, 85, 247, 0.2)',
    },
    input: {
      background: 'rgba(36, 15, 63, 0.4)',
      backgroundFocus: 'rgba(61, 30, 107, 0.5)',
      border: 'rgba(99, 102, 241, 0.5)',
      borderFocus: 'rgba(168, 85, 247, 0.8)',
      text: '#e9d5ff',
      placeholder: '#a855f7',
      autofillBackground: '#1a0b2e',
      autofillText: '#e9d5ff',
      ring: 'rgba(168, 85, 247, 0.2)',
    },
    button: {
      primary: {
        background: '#9333ea',
        backgroundHover: '#7e22ce',
        text: '#ffffff',
        shadow: 'rgba(168, 85, 247, 0.2)',
        shadowHover: 'rgba(168, 85, 247, 0.3)',
      },
      secondary: colors.button.secondary,
      ghost: colors.button.ghost,
      disabled: colors.button.disabled,
      auth: colors.button.auth,
    },
    message: {
      userBackground: '#3d1e6b',
      userText: '#e9d5ff',
      aiText: '#d8b4fe',
      streamingCursor: '#9333ea',
    },
    chat: {
      sidebar: {
        background: '#1a0b2e',
        border: '#3d1e6b',
        text: '#ffffff',
        textSecondary: '#f3e8ff',
        textMuted: '#a855f7',
        itemText: '#c084fc',
        itemTextActive: '#f3e8ff',
        itemTextHover: '#d8b4fe',
        itemBackgroundActive: 'rgba(61, 30, 107, 0.9)',
        itemBackgroundHover: 'rgba(61, 30, 107, 0.5)',
        buttonText: '#d8b4fe',
        buttonTextHover: '#f3e8ff',
        buttonBackgroundHover: 'rgba(61, 30, 107, 0.9)',
      },
    },
    menu: {
      background: '#3d1e6b',
      border: '#a21caf',
      itemText: '#d8b4fe',
      itemTextHover: '#f3e8ff',
      itemBackgroundHover: '#a21caf',
      iconText: '#a855f7',
      iconTextHover: '#d8b4fe',
      iconBackgroundHover: '#3d1e6b',
    },
    loader: {
      primary: '#9333ea',
    },
    typingIndicator: {
      dot1: '#a855f7',
      dot2: '#9333ea',
      dot3: '#7e22ce',
      text: '#d8b4fe',
    },
    animation: {
      text: '#a855f7',
      cursor: '#a855f7',
    },
  },
};

// Single variable to control the active theme
export let activeTheme: ThemeName = 'light';

// - `'dark'` → 🌙 Current dark theme
// - `'light'` → ☀️ Clean light mode
// - `'green-dark'` → 🌲 Nature green theme
// - `'ocean'` → 🌊 Deep blue theme
// - `'purple'` → 💜 Vibrant purple theme

/**
 * Get the current active theme configuration
 */
export const getActiveTheme = (): ColorSystem => {
  return themes[activeTheme];
};

/**
 * Set the active theme - THIS IS YOUR SINGLE VARIABLE TO CHANGE THEMES!
 * @param themeName - The name of the theme to activate
 */
export const setActiveTheme = (themeName: ThemeName): void => {
  activeTheme = themeName;
  applyColorConfiguration(themes[themeName]);
};

export default colors;
