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
            const itemIndex = state.prevItem.index;
            const columnIndex = state.prevItem.kolonkaIndex;
            state.columns[columnIndex].items.splice(itemIndex, 1);
            state.isModal = !state.isModal;
        },
        saveItem(state, action) {
            state.isModal = !state.isModal;
            const index = state.prevItem.index;
            const columnIndex = state.prevItem.kolonkaIndex;
            const text = action.payload.text;
            state.columns[columnIndex].items[index].text = text;
        },
        isModaBool(state, action) {
            state.isModal = !state.isModal;
            state.prevItem.text = action.payload.text;
            state.prevItem.index = action.payload.itemIndex;
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