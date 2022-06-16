import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    
];

const KolonkaListSlices = createSlice({
    name: 'List',
    initialState,
    reducers: {
        addItem(state, action){
            state[action.payload.index].items.push({
                id: action.payload.id,
                text: action.payload.text
            })
        },
        addKolonka(state, action){
            state.push({
                id: action.payload.id,
                header: action.payload.header,
                items: action.payload.items
            })
        }
    }
})

export const KolonkaListAction = KolonkaListSlices.actions;

export default KolonkaListSlices;