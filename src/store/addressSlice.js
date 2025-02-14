import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk for adding a new address
export const addAddress = createAsyncThunk(
  "address/addAddress",
  async ({ userId, addressData }, { rejectWithValue }) => {
    try {
      const response = await fetch("/api/address/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, ...addressData }),
      });

      if (!response.ok) {
        const error = await response.json();
        return rejectWithValue(error.message);
      }

      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk for fetching addresses
export const fetchAddresses = createAsyncThunk(
  "address/fetchAddresses",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await fetch(`/api/address/fetch/${userId}`, {
        method: "GET",
      });

      if (!response.ok) {
        const error = await response.json();
        return rejectWithValue(error.message);
      }

      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk for deleting an address
export const deleteAddress = createAsyncThunk(
  "address/deleteAddress",
  async (addressId, { rejectWithValue }) => {
    try {
      const response = await fetch(`/api/address/${addressId}/delete`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const error = await response.json();
        return rejectWithValue(error.message);
      }

      return addressId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk for setting a preferred address
export const setPreferredAddress = createAsyncThunk(
  "address/setPreferredAddress",
  async ({ addressId, userId }, { rejectWithValue }) => {
    try {
      const response = await fetch(`/api/address/${addressId}/setPreferred`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId }),
      });

      if (!response.ok) {
        const error = await response.json();
        return rejectWithValue(error.message);
      }

      return addressId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  addresses: [],
  loading: false,
  error: null,
};

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    clearAddresses: (state) => {
      state.addresses = [];
    },
  },
  extraReducers: (builder) => {
    builder
      // Add Address
      .addCase(addAddress.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addAddress.fulfilled, (state, action) => {
        state.loading = false;
        state.addresses.push(action.payload.address);
      })
      .addCase(addAddress.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Fetch Addresses
      .addCase(fetchAddresses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAddresses.fulfilled, (state, action) => {
        state.loading = false;
        state.addresses = action.payload.addresses;
      })
      .addCase(fetchAddresses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Delete Address
      .addCase(deleteAddress.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteAddress.fulfilled, (state, action) => {
        state.loading = false;
        state.addresses = state.addresses.filter(
          (address) => address._id !== action.payload
        );
      })
      .addCase(deleteAddress.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Set Preferred Address
      .addCase(setPreferredAddress.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(setPreferredAddress.fulfilled, (state, action) => {
        state.loading = false;
        state.addresses = state.addresses.map((address) =>
          address._id === action.payload
            ? { ...address, isPreferred: true }
            : { ...address, isPreferred: false }
        );
      })
      .addCase(setPreferredAddress.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Export actions and reducer
export const { clearAddresses } = addressSlice.actions;
export default addressSlice.reducer;
