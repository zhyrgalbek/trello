import { createSlice } from "@reduxjs/toolkit/dist/createSlice";


const initialState = {
    gmail: '',
    password: null,
    bool: false
}

const AuthorizationSlices = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        toggle (state){
            state.bool = !state.bool
        }
    }
});

export const AuthorActions = AuthorizationSlices.actions;
export default AuthorizationSlices;