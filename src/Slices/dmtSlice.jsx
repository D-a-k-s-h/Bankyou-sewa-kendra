import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dmtData: localStorage.getItem("dmtData") ? JSON.parse(localStorage.getItem("dmtData")) : []
};

const dmtSlice = createSlice({
    name:"dmt",
    initialState: initialState,
    reducers:{
        addDmtData(state,value){
            state.dmtData.push(value.payload);
            localStorage.setItem('dmtData',JSON.stringify(state.dmtData));
            //console.log(state.dmtData);
        }
    }
});

export const{addDmtData} = dmtSlice.actions;
export default dmtSlice.reducer;