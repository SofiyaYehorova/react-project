import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {moviesService} from "../../services";

const initialState = {
    movies: [],
    errors: null,
    loading: null
};

const getAll = createAsyncThunk(
    'moviesSlice/getAll',
    async (_, thunkAPI) => {
        try {
            const {data} = await moviesService.getAll();
            return data
        } catch (e) {
            thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload
            })
});

const {reducer: movieReducer} = moviesSlice;

const moviesAction = {
    getAll
}

export {
    moviesAction,
    movieReducer
}

