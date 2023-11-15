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

export const StorySlice = createSlice({
    name: 'story',
    initialState,
    reducers: {
        setLoading: (state: StateType, action) => {
            state.loading = action.payload;
        }
    }
})

export const { setLoading } = StorySlice.actions;

export const addStory = (data: any) =>async (dispatch: AppDispatch) => {    
    console.log(data);

    axios.defaults.withCredentials = true;
    axios.post(process.env.SERVER_API + '/story/add/', data, {
        headers: {
            'Content-Type': 'application/json'
        },
        withCredentials: true
    }).then((res) => {
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

export default StorySlice.reducer;