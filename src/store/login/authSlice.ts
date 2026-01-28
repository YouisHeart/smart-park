import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: sessionStorage.getItem("token") || null,
        menuList:[]
    },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
            sessionStorage.setItem("token", action.payload);
        },
        removeToken: (state) => {
            state.token = null;
            sessionStorage.removeItem("token");
        },
        setMenu:(state,action)=>{
            state.menuList = action.payload
        }
    }
})

export const { setToken, removeToken, setMenu } = authSlice.actions;
export default authSlice.reducer;