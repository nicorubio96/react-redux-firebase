import { configureStore } from "@reduxjs/toolkit";
import { uiReducer } from "./reducers/uiReducer";
import {authReducer} from './reducers/authReducer'
import { notesReducer } from "./reducers/notesReducer";



export const store = configureStore(
{
    reducer:{
        ui: uiReducer,
        auth:authReducer,
        notes: notesReducer
        
    }
}    
)