const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  isAddressModalOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleAddressModal: (state) => {
      state.isAddressModalOpen = !state.isAddressModalOpen;
    },
  },
});

export const { toggleAddressModal } = modalSlice.actions;

export default modalSlice.reducer;
