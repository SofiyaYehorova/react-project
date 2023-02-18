import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {moviesService} from "../../services";

const initialState = {
    movies: [],
    id: null,
    page: null,
    results: null,
    total_pages: null,
    total_results: null,
    errors: null,
    loading: null
};

const getAll = createAsyncThunk(
    'moviesSlice/getAll',
    async ({page}, thunkAPI) => {
        try {
            const {data} = await moviesService.getAll(page);
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
                const {id, page, results, total_pages, total_results} = action.payload;
                state.movies = results
                state.page = page
                state.id = id
                state.total_pages = total_pages
                state.total_results = total_results
                // state.movies = action.payload
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

