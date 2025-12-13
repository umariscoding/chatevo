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
    ring: 'rgba(147, 51, 234, 0.4)',
    ringOffset: 'rgba(147, 51, 234, 0.1)',
  },

  selection: {
    background: '#3b82f6', // blue-500
    indicator: '#3b82f6', // blue-500
  },

  // Shadow colors
  shadow: {
    primary: 'rgba(147, 51, 234, 0.2)',
    primaryLarge: 'rgba(147, 51, 234, 0.3)',
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
      shadow: 'rgba(147, 51, 234, 0.2)',
      shadowHover: 'rgba(147, 51, 234, 0.3)',
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
      primaryBackground: 'linear-gradient(135deg, var(--color-purple-600) 0%, var(--color-blue-600) 100%)',
      primaryBackgroundHover: 'linear-gradient(135deg, var(--color-purple-700) 0%, var(--color-blue-600) 100%)',
      primaryText: '#ffffff',
      primaryShadow: 'rgba(147, 51, 234, 0.4)',
      primaryShadowHover: 'rgba(147, 51, 234, 0.6)',
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

  // Add more as needed...
};

export default colors;
