import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    user: [],
}
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        removeUser: (state, action) => {
            state.user = []
        }
    },
})

export const {setUser, removeUser} = authSlice.actions
export default authSlice.reducer
