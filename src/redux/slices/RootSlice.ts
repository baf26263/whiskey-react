import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: "Name",
        origin: "Origin",
        bottle_size: "Bottle Size",
        year_made: "Year Made"
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload},
        chooseOrigin: (state, action) => { state.origin = action.payload},
        chooseSize: (state, action) => { state.bottle_size = action.payload},
        chooseYear: (state, action) => { state.year_made = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const { chooseName, chooseOrigin, chooseSize, chooseYear} = rootSlice.actions