import { configureStore } from "@reduxjs/toolkit";
import CollectionSlice from "./collection/CollectionSlice";
import { combineReducers } from "redux";
import {
  useDispatch as useAppDispatch,
  useSelector as useAppSelector,
  TypedUseSelectorHook,
} from "react-redux";
import StorySlice from "./story/StorySlice";

export const store = configureStore({
  reducer: {
    collection: CollectionSlice,
    story: StorySlice
  },
});

const rootReducer = combineReducers({
  collection: CollectionSlice,
  story: StorySlice
});

export type AppState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const { dispatch } = store;
export const useDispatch = () => useAppDispatch<AppDispatch>();
export const useSelector: TypedUseSelectorHook<AppState> = useAppSelector;

export default store;

