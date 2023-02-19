import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {moviesService} from "../../services";

const initialState = {
    movies: [],
    // id: null,
    page: 1,
    currentPage: 1,
    total_pages: 500,
    total_results: 0,
    errors: null,
    loading: null
};

const getAllMovies = createAsyncThunk(
    'moviesSlice/getAllMovies',
    async ({currentPage}, thunkAPI) => {
        try {
            const {data} = await moviesService.getAll(currentPage);
            return data
        } catch (e) {
            thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {
        resetPage: (state) => {
            state.currentPage = 1
        },
        setPage: (state, action) => {
            state.currentPage = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAllMovies.fulfilled, (state, action) => {
                state.movies = action.payload.results
                if (action.payload.total_pages <= 500) {
                    state.total_pages = action.payload.total_pages
                } else {
                    state.total_pages = 500
                }
                state.loading = false
            })
            .addCase(getAllMovies.pending, (state, action) => {
                state.loading = true
            })
});

const {reducer: movieReducer, actions: {resetPage, setPage}} = moviesSlice;

const moviesAction = {
    getAllMovies
}

export {
    moviesAction,
    movieReducer,
    resetPage,
    setPage
}

