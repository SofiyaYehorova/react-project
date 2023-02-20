import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {moviesService} from "../../services";

const initialState = {
    movies: [],
    page: 1,
    errors: null,
    loading: false,
    filterParams: ''
};

const getAllMovies = createAsyncThunk(
    'moviesSlice/getAllMovies',
    async ({page}, thunkAPI) => {
        try {
            const {data} = await moviesService.getAll(page);
            return data
        } catch (e) {
            thunkAPI.rejectWithValue(e.response?.data)
        }
    }
);

const getMovieById = createAsyncThunk(
    'moviesSlice/getById',
    async ({id}, thunkAPI) => {
        try {
            const {data} = await moviesService.getById(id);
            return data
        } catch (e) {
            thunkAPI.rejectWithValue(e.response?.data)
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
        },
        setPage: (state, action) => {
            state.page = action.payload
        },
        setFilterParams: (state, action) => {
            state.filterParams = action.payload
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
            .addCase(getAllMovies.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })
});

const {reducer: moviesReducer, actions: {nextPage, prevPage, setPage, setFilterParams}} = moviesSlice;

const moviesAction = {
    getAllMovies,
    nextPage,
    prevPage,
    setPage,
    setFilterParams
}

export {
    moviesAction,
    moviesReducer,
    moviesSlice,
    getMovieById
}

