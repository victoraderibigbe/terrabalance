import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk for registering a user
export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const error = await response.json();
        return rejectWithValue(error.message);
      }

      const data = await response.json();
      console.log("Register response:", data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk for logging in a user
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const error = await response.json();
        return rejectWithValue(error.message);
      }

      const data = await response.json();
      console.log("Login response:", data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Define the initial state of the auth slice
const initialState = {
  user: null,
  userId: null,
  loading: false,
  error: null,
  isAuthenticated: false,
};

// Rehydrate state from localStorage (only in the browser)
if (typeof window !== "undefined") {
  const persistedUser = localStorage.getItem("user");
  const persistedToken = localStorage.getItem("token");
  const persistedUserId = localStorage.getItem("userId");

  if (persistedUser && persistedToken && persistedUserId) {
    initialState.user = JSON.parse(persistedUser);
    initialState.userId = persistedUserId;
    initialState.isAuthenticated = true;
  }
}

// Create the auth slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.userId = null;
      state.isAuthenticated = false;
      if (typeof window !== "undefined") {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("userId");
      }
    },
    setUser: (state, action) => {
      const { user } = action.payload || {};
      
      if (user !== undefined && user.id) {
        console.log("From authSlice setUser:", action.payload.user);
        state.user = user;
        state.userId = user.id;
        state.isAuthenticated = true;
        if (typeof window !== "undefined") {
          localStorage.setItem("user", JSON.stringify(user));
          localStorage.setItem("userId", user.id);
        }
      } else {
        console.error("Invalid user object", user);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      // Register User
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        const { user, token } = action.payload || {};
        console.log("Register fulfilled:", action.payload);
        if (user && user.id) {
          state.loading = false;
          state.user = user;
          state.userId = user.id;
          state.isAuthenticated = true;
          if (typeof window !== "undefined") {
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("userId", user.id);
          }
        } else {
          state.loading = false;
          state.error = "Invalid user data received";
          console.error("Invalid user data", action.payload);
        }
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Login User
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        const { user, token } = action.payload || {};
        console.log("Login fulfilled:", action.payload);
        if (user && user.id) {
          state.loading = false;
          state.user = user;
          state.userId = user.id;
          state.isAuthenticated = true;
          if (typeof window !== "undefined") {
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("userId", user.id);
          }
        } else {
          state.loading = false;
          state.error = "Invalid user data received";
          console.error("Invalid user data", action.payload);
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Export actions and reducer
export const { logout, setUser } = authSlice.actions;
export default authSlice.reducer;
