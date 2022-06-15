import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    gmail: 'admin@gmail.com',
    password: 'admin',
    bool: true,
    spiner: false
}

const AuthorizationSlices = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        toggle (state){
            state.bool = !state.bool
        },
        setSpiner(state) {
            state.spiner = true
        },

        endSpiner (state) {
            state.spiner = false
        },
        login (state, action) {

            if(action.payload.gmail === state.gmail && action.payload.password === state.password){
                state.bool = true
            }else{
                state.bool = false
            }
            
        }
    }
});

export const AuthorActions = AuthorizationSlices.actions;
export default AuthorizationSlices;

export const FetchUser = (data) => {
    console.log(data);
    return (dispatch) => {
        dispatch(AuthorActions.setSpiner())
        setTimeout(() => {
            dispatch(AuthorActions.login(data))
            dispatch(AuthorActions.endSpiner())
        }, 2000) 
    }
}

export const Exist = () => {
    return (dispatch) => {
        dispatch(AuthorActions.setSpiner())
        setTimeout(() => {
            dispatch(AuthorActions.existUser())
            dispatch(AuthorActions.endSpiner())
        }, 2000) 
    }
}