const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  isDrawerOpen: false,
  isAddressFormOpen: false,
};

const drawerSlice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    toggleDrawer: (state) => {
      state.isDrawerOpen = !state.isDrawerOpen;
    },
    toggleAddressForm: (state) => {
      state.isAddressFormOpen = !state.isAddressFormOpen;
    },
  },
});

export const { toggleDrawer, toggleAddressForm } = drawerSlice.actions;

export default drawerSlice.reducer;
