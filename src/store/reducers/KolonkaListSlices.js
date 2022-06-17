import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    columns: [],
    isModal: false,
    prevItem: {
        text: '',
        index: '',
        kolonkaIndex: ''
    }
};

const KolonkaListSlices = createSlice({
    name: 'List',
    initialState,
    reducers: {
        removeItemOrColumn(state, action){
            let itemIndex = '';
            const columnIndex = state.prevItem.kolonkaIndex;
            if(state.prevItem.index !== ''){
                itemIndex = state.prevItem.index;
                state.columns[columnIndex].items.splice(itemIndex, 1);
            } else {
                state.columns.splice(columnIndex, 1);
            }
            state.isModal = !state.isModal;
        },
        saveItem(state, action) {
            state.isModal = !state.isModal;
            let index = '';
            const columnIndex = state.prevItem.kolonkaIndex;
            const text = action.payload.text;
            if(state.prevItem.index !== ''){
                index = state.prevItem.index;
                state.prevItem.index = '';
                state.columns[columnIndex].items[index].text = text;
            } else {
                state.columns[columnIndex].header = text;                
            }
        },
        isModaBool(state, action) {
            state.isModal = !state.isModal;
            if(action.payload.itemIndex !== ''){
                state.prevItem.index = action.payload.itemIndex;
            } else {
                state.prevItem.index = '';
            }
            state.prevItem.text = action.payload.text;
            state.prevItem.kolonkaIndex = action.payload.kolonkaIndex;
        },
        addItem(state, action) {
            state.columns[action.payload.index].items.push({
                id: action.payload.id,
                text: action.payload.text
            })
        },
        addKolonka(state, action) {
            state.columns.push({
                id: action.payload.id,
                header: action.payload.header,
                items: action.payload.items
            })
        }
    }
})

export const KolonkaListAction = KolonkaListSlices.actions;

export default KolonkaListSlices;