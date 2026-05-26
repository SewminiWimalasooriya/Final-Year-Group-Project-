import { createSlice } from "@reduxjs/toolkit";
// const tokenFromStorage = localStorage.getItem("token");
const storedData = localStorage.getItem("stationAuth");

const initialState = {
    loading: false,
    error: false,
    errorMessage: "",
    user: storedData
        ? JSON.parse(storedData).user
        : null,

    token: storedData
        ? JSON.parse(storedData).token
        : null,
    role: storedData
        ? JSON.parse(storedData).user.role
        : null,
    apartment: storedData
        ? JSON.parse(storedData).user.apartment
        : null,
    isAuthenticated: false,
    mustChangePassword: false,
};

const stationAuthSlice = createSlice({
    name: "stationAuth",
    initialState,

    reducers: {

        // LOGIN START
        stationLoginStart: (state) => {
            state.loading = true;
            state.error = false;
            state.errorMessage = "";
        },

        // LOGIN SUCCESS
        stationLoginSuccess: (state, action) => {
            state.loading = false;

            // full user object
            state.user = action.payload.user;

            // token
            state.token = action.payload.token;

            // role
            state.role = action.payload.user.role;

            // apartment details
            state.apartment = action.payload.user.apartment;

            // password change flag
            state.mustChangePassword =
                action.payload.mustChangePassword;

            state.isAuthenticated = true;
        },

        // LOGIN FAILURE
        stationLoginFailure: (state, action) => {
            state.loading = false;
            state.error = true;
            state.errorMessage = action.payload;
        },

        // LOGOUT
        stationLogout: (state) => {
            localStorage.removeItem("token"); // ✅ important
            state.loading = false;
            state.error = false;
            state.errorMessage = "";

            state.user = null;
            state.token = null;
            state.role = null;
            state.apartment = null;

            state.mustChangePassword = false;
            state.isAuthenticated = false;
            localStorage.removeItem("stationAuth");
        },
    },
});

export const {
    stationLoginStart,
    stationLoginSuccess,
    stationLoginFailure,
    stationLogout,
} = stationAuthSlice.actions;

export default stationAuthSlice.reducer;