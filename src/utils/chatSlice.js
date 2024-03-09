import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constants";

const chatSlice = createSlice({
    name:'chat',
    initialState: {
        messages:[]
    },
    reducers:{
        addMessage : (state,action) =>{
            state.messages.splice(LIVE_CHAT_COUNT, 1);
            state.messages.push(action.payload); // push is using for the new content should display at bottom and the previous one at top
        }
    }
})

export const {addMessage} = chatSlice.actions; 
export default chatSlice.reducer;