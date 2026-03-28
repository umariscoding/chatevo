import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { User, Tokens } from "@/types/auth";

interface UserAuthState {
  user: User | null;
  tokens: Tokens | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  companySlug: string | null;
}

const initialState: UserAuthState = {
  user: null,
  tokens: null,
  isAuthenticated: false,
  loading: false,
  error: null,
  companySlug: null,
};

function storageKey(slug: string, key: string): string {
  return `${key}_${slug}`;
}

const userAuthSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    logout: (state) => {
      const slug = state.companySlug;
      state.user = null;
      state.tokens = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
      state.companySlug = null;

      if (slug) {
        localStorage.removeItem(storageKey(slug, "user_access_token"));
        localStorage.removeItem(storageKey(slug, "user_refresh_token"));
        localStorage.removeItem(storageKey(slug, "user_data"));
      }
      // Also clean up legacy global keys
      localStorage.removeItem("user_access_token");
      localStorage.removeItem("user_refresh_token");
      localStorage.removeItem("user_data");
    },
    setUserData: (
      state,
      action: PayloadAction<{ user: User; tokens: Tokens; companySlug: string }>,
    ) => {
      state.user = action.payload.user;
      state.tokens = action.payload.tokens;
      state.isAuthenticated = true;
      state.loading = false;
      state.error = null;
      state.companySlug = action.payload.companySlug;

      const slug = action.payload.companySlug;
      localStorage.setItem(
        storageKey(slug, "user_access_token"),
        action.payload.tokens.access_token,
      );
      localStorage.setItem(
        storageKey(slug, "user_refresh_token"),
        action.payload.tokens.refresh_token,
      );
      localStorage.setItem(
        storageKey(slug, "user_data"),
        JSON.stringify(action.payload.user),
      );
    },
    loadFromStorage: (state, action: PayloadAction<string>) => {
      const slug = action.payload;
      const accessToken = localStorage.getItem(storageKey(slug, "user_access_token"));
      const refreshToken = localStorage.getItem(storageKey(slug, "user_refresh_token"));
      const userData = localStorage.getItem(storageKey(slug, "user_data"));

      if (accessToken && refreshToken) {
        state.tokens = {
          access_token: accessToken,
          refresh_token: refreshToken,
          token_type: "bearer",
        };
        state.isAuthenticated = true;
        state.companySlug = slug;

        if (userData) {
          try {
            state.user = JSON.parse(userData);
          } catch (error) {
            console.warn("Failed to parse stored user data:", error);
          }
        }
      } else {
        // No token for this slug — reset auth state
        state.user = null;
        state.tokens = null;
        state.isAuthenticated = false;
        state.companySlug = null;
      }
    },
  },
});

export const { logout, setUserData, loadFromStorage } = userAuthSlice.actions;

export default userAuthSlice.reducer;
