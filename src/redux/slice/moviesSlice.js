import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {moviesService} from "../../services";

const initialState = {
    movies: [],
    page: 1,
    errors: null,
    loading: false
};

const getAllMovies = createAsyncThunk(
    'moviesSlice/getAllMovies',
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
    reducers: {
        nextPage: (state, action) => {
            state.page += 1;

        },
        prevPage: (state, action) => {
            state.page -= -1
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAllMovies.fulfilled, (state, action) => {
                state.movies = action.payload
                state.loading = false
            })
            .addCase(getAllMovies.pending, (state) => {
                state.loading = true
            })
});

const {reducer: movieReducer, actions: {nextPage, prevPage}} = moviesSlice;

const moviesAction = {
    getAllMovies,
    nextPage,
    prevPage
}

export {
    moviesAction,
    movieReducer
}

