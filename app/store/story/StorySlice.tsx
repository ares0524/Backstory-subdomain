import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "../store";
import axios from "axios";
import { toast } from "react-toastify";

interface Story {
    name: string,
    description: string,
    genre: string,
    type: string,
    collection: string,
    author: string,
    chapters: string,
    word_count: number,
    cover_imave: string,
    title_color: string,
    age_group: string,
    start_time: Date
}

interface StateType {
    loading: boolean,
    stories: Story[]
}

const initialState: StateType = {
    loading: true,
    stories: []
}

export const StorySlice = createSlice({
    name: 'story',
    initialState,
    reducers: {
        setLoading: (state: StateType, action) => {
            state.loading = action.payload;
        },
        setStories: (state: StateType, action) => {            
            state.stories = action.payload
        }
    }
})

export const { setLoading, setStories } = StorySlice.actions;

export const addStory = (data: any) =>async (dispatch: AppDispatch) => {    
    console.log(data);

    axios.defaults.withCredentials = true;
    axios.post('/serverAPI/story/add/', data, {
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

export const getStories = (stories_id: any) =>async (dispatch:AppDispatch) => {
    const parsed_id = JSON.parse(stories_id?.toString() || '{}');
    const data = {
        stories_id: parsed_id
    }
    axios.post('serverAPI/story/get', data)
        .then((res) => {
            if (res.data.status == 'success') {
                dispatch(setStories(res.data.stories))
            } else {
                console.log(res.data.msg);
            }
        })
}

export default StorySlice.reducer;
