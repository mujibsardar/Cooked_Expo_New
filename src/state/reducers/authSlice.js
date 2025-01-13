import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null, // Initial value for user (can be null or undefined)
  isAuthenticated: false, // Initial value for authentication status
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    //add authentication actions later
  },
});

export default authSlice.reducer;
