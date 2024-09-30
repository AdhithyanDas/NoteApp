import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
    name: "Note",
    initialState: {
        Notes: []
    },
    reducers: {
        addNote(state, action) {
            state.Notes.push(action.payload)
        },
        editNote(state, action) {
            const index = state.Notes.findIndex(item => item.time === action.payload.oldTime)
            if (index !== -1) {
                state.Notes[index] = { ...action.payload.newNote }
            }
        },
        removeNote(state, action) {
            state.Notes = state.Notes.filter(item => item.time != action.payload)
        }
    }
})

export default noteSlice.reducer
export const { addNote, editNote, removeNote } = noteSlice.actions