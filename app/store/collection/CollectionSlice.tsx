import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "../store";
import axios from "axios";
import { toast } from "react-toastify";

interface Collection {
    id: Number,
    name: string,
    description: string,
    created_at: Date,
    stories: String
}

interface StateType {
    loading: boolean,
    collections: Collection[],
    selectedCollection: Collection
}

const initialState: StateType = {
    loading: true,
    collections: [],
    selectedCollection: {
        id: 0,
        name: '',
        description: '',
        created_at: new Date,
        stories: ''
    }
}

export const CollectionSlice = createSlice({
    name: 'collection',
    initialState,
    reducers: {
        setLoading: (state: StateType, action) => {
            state.loading = action.payload;
        },
        setCollections: (state: StateType, action) => {            
            state.collections = action.payload
        },
        setSelectedCollection: (state: StateType, action) => {            
            state.selectedCollection = action.payload
        }
    }
})

export const { setLoading, setCollections, setSelectedCollection } = CollectionSlice.actions;

export const addCollection = (data: any) =>async (dispatch: AppDispatch) => {    
    axios.post('/serverAPI/collection/add/', data, {
        headers: {
            'Content-Type': 'application/json'
        },
        withCredentials: true
    })
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

export const getCollection = () =>async (dispatch: AppDispatch) => {    
    axios.get('serverAPI/collection/get')
        .then((res) => {
            if (res.data.status == 'success') {
                dispatch(setCollections(res.data.collections))
            } else {
                console.log(res.data.msg);
            }
        })
}


export default CollectionSlice.reducer;

