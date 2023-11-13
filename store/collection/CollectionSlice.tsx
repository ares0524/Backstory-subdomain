import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "../store";
import axios from "axios";
import { toast } from "react-toastify";

interface StateType {
    loading: boolean
}

const initialState: StateType = {
    loading: true
}

export const CollectionSlice = createSlice({
    name: 'collection',
    initialState,
    reducers: {
        setLoading: (state: StateType, action) => {
            state.loading = action.payload;
        }
    }
})

export const { setLoading } = CollectionSlice.actions;

export const addCollection = (data: any) =>async (dispatch: AppDispatch) => {    
    axios.post(process.env.SERVER_API + '/collection/add', data)
        .then((res) => {
            
            if (res.data.status == 'fail') {
                console.log(res.data);
                toast(res.data.msg, {
                    autoClose: 2000,
                    type: 'warning',
                    theme: 'dark'
                })
            } else {
                toast(res.data.msg, {
                    autoClose: 2000,
                    type: 'success',
                    theme: 'dark'
                })
            }
        })
        .catch(err => {
            console.log("error => ", err);
        })
}

export default CollectionSlice.reducer;