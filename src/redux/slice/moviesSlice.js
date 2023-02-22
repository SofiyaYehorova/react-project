import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genresService, moviesService} from "../../services";

const initialState = {
    movies: [],
    movie: null,
    genres: [],
    search: [],
    page: 1,
    total_pages: 500,
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
    'moviesSlice/getMovieById',
    async ({id}, thunkAPI) => {
        try {
            const {data} = await moviesService.getMovieById(id);
            return data
        } catch (e) {
            thunkAPI.rejectWithValue(e.response?.data)
        }
    }
);

const getMoviesByGenre = createAsyncThunk(
    'moviesSlice/getMoviesByGenre',
    async ({page, id}, thunkAPI) => {
        try {
            const {data} = await genresService.getAllGenres(id, page);
            return data
        } catch (e) {
            thunkAPI.rejectWithValue(e.response?.data)
        }
    }
);

const getMovieGenres = createAsyncThunk(
    'moviesSlice/getMovieGenres',
    async (_, thunkAPI) => {
        try {
            const {data} = await genresService.getAllGenres();
            return data
        } catch (e) {
            thunkAPI.rejectWithValue(e.response?.data)
        }
    }
);

const getByMoviesSearch = createAsyncThunk(
    'moviesSlice/getByMoviesSearch',
    async ({search}, thunkAPI) => {
        try {
            const {data} = await moviesService.getByMovieSearch(search);
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
                state.page = action.payload
                state.loading = false
            })
            .addCase(getMovieById.fulfilled, (state, action) => {
                state.movies = action.payload
                state.page = action.payload
                state.loading = false
            })
            .addCase(getMoviesByGenre.fulfilled, (state, action) => {
                state.movies = action.payload
                state.page = action.payload
                state.loading = false
            })
            .addCase(getMovieGenres.fulfilled, (state, action) => {
                state.movies = action.payload
                state.page = action.payload
                state.loading = action.payload
            })
            .addCase(getByMoviesSearch.fulfilled, (state, action) => {
                state.movies = action.payload
                state.page = action.payload
                state.loading = action.payload
            })
            .addCase(getAllMovies.pending, (state) => {
                state.loading = true
            })
            .addCase(getMovieById.pending, (state) => {
                state.loading = true
            })
            .addCase(getMoviesByGenre.pending, (state) => {
                state.loading = true
            })
            .addCase(getMovieGenres.pending, (state) => {
                state.loading = true
            })
            .addCase(getByMoviesSearch.pending, (state) => {
                state.loading = true
            })
            .addCase(getAllMovies.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })
            .addCase(getMovieById.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })
            .addCase(getMoviesByGenre.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })
            .addCase(getMovieGenres.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })
            .addCase(getByMoviesSearch.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })
});

const {
    reducer: moviesReducer
    , actions: {nextPage, prevPage, setPage, setFilterParams}
} = moviesSlice;

const moviesAction = {
    getAllMovies,
    // getMovieById,
    // getMoviesByGenre,
    // getMovieGenres,
    // getByMoviesSearch
    nextPage,
    prevPage,
    setPage,
    setFilterParams
}

export {
    moviesAction,
    moviesReducer
}

