import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "../store";
import axios from "axios";
import { toast } from "react-toastify";

interface Story {
    id: Number,
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
    start_time: Date,
    created_at: Date,
    read_count: Number,
    sales: Number,
    likes: Number,
}

interface StateType {
    loading: boolean,
    stories: Story[],
    selectedStory: Story
}

const initialState: StateType = {
    loading: true,
    stories: [],
    selectedStory: {
        id: 0,
        name: '',
        description: '',
        genre: '',
        type: '',
        collection: '',
        author: '',
        chapters: '',
        word_count: 0,
        cover_imave: '',
        title_color: '',
        age_group: '',
        start_time: new Date(),
        created_at: new Date(),
        read_count: 0,
        sales: 0,
        likes: 0,
    }
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
        },
        setSelectedStory: (state: StateType, action) => {            
            state.selectedStory = action.payload
        },
    }
})

export const { setLoading, setStories, setSelectedStory } = StorySlice.actions;

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
    axios.post('/serverAPI/story/get', data)
        .then((res) => {
            if (res.data.status == 'success') {
                dispatch(setStories(res.data.stories))
            } else {
                console.log(res.data.msg);
            }
        })
}

export const updateStory = (data: any) =>async (dispatch:AppDispatch) => {
    axios.post('/serverAPI/story/update', data)
        .then((res) => {
            if (res.data.status == 'success') {
                dispatch(setSelectedStory(res.data.story));
                toast('Updated successfully!', {
                    autoClose: 2000,
                    type: 'success',
                    theme: 'dark'
                })
            }
        })
}

export const getStoryById = (id: any) =>async (dispatch:AppDispatch) => {
    const data = {
        id: id
    }
    axios.post('/serverAPI/story/getStoryById?id=', data)
        .then((res) => {
            if (res.data.status == 'success') {
                dispatch(setSelectedStory(res.data.story));
                console.log("res.data.story => ", res.data.story);
                
            }
        })
}

export default StorySlice.reducer;
