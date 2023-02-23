import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genresService, moviesService, searchMovieService} from "../../services";

const initialState = {
    movies: [],
    movie: null,
    page: 1,
    genres: [],
    currentGenre: [],
    // show: true,
    errors: null,
    loading: false,
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
    async (id, thunkAPI) => {
        try {
            const {data} = await moviesService.getMovieById(id);
            return data
        } catch (e) {
            thunkAPI.rejectWithValue(e.response?.data)
        }
    }
);

const searchMovie = createAsyncThunk(
    'moviesSlice/searchMovie',
    async (movie, thunkAPI) => {
        try {
            const {data} = await searchMovieService.searchMovie(movie);
            console.log(data);
            return data
        } catch (e) {
            thunkAPI.rejectWithValue(e.response?.data)
        }
    }
);

const getAllGenres = createAsyncThunk(
    'genresSlice/getAllGenres',
    async (_, thunkAPI) => {
        try {
            const {data} = await genresService.getGenres();
            return data
        } catch (e) {
            thunkAPI.rejectWithValue(e.response?.data)
        }
    }
);

const searchByGenre = createAsyncThunk(
    'movieSlice/searchByGenre',
    async ({currentGenre}, {rejectWithValue}) => {
        try {
            const {data} = await genresService.searchByGenre(currentGenre)
            return data;
        } catch (e) {
            rejectWithValue(e.response.data)
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
        // show: (state, action) => {
        //     state.show = action.payload
        // },
        selectGenre: (state, action) => {
            state.currentGenre.push(action.payload);
        },
        deleteGenre: (state, action) => {
            const index = state.currentGenre.findIndex(genre => genre.id === action.payload);
            state.currentGenre.splice(index, 1)
        },
        setPage: (state, action) => {
            state.page = action.payload
        },
    },
    extraReducers: builder =>
        builder
            .addCase(getAllMovies.fulfilled, (state, action) => {
                state.movies = action.payload;
                state.loading = false;
            })
            .addCase(getAllMovies.pending, (state) => {
                state.loading = true
            })
            .addCase(getMovieById.fulfilled, (state, action) => {
                state.movie = action.payload
            })
            .addCase(searchMovie.fulfilled, (state, action) => {
                state.movies = action.payload;
                state.loading = false
            })
            .addCase(getAllGenres.fulfilled, (state, action) => {
                state.genres = action.payload;
                state.loading = false
            })
            .addCase(searchByGenre.fulfilled, (state, action) => {
                state.movies = action.payload;
                state.loading = false;
            })
            // .addCase(getAllMovies.pending, (state) => {
            //     state.loading = true
            // })
            // .addCase(getMovieById.pending, (state) => {
            //     state.loading = true
            // })
            .addCase(searchMovie.pending, (state) => {
                state.loading = true
            })
            // .addCase(getAllGenres.pending, (state, action) => {
            //     state.loading = false
            // })
            .addCase(searchByGenre.pending, (state) => {
                state.loading = true;
            })
            // .addCase(getAllMovies.rejected, (state, action) => {
            //     state.error = action.payload
            //     state.loading = false
            // })
            // .addCase(getMovieById.rejected, (state, action) => {
            //     state.error = action.payload
            //     state.loading = false
            // })
            // .addCase(searchMovie.rejected, (state, action) => {
            //     state.loading = false
            // })
            // .addCase(getAllGenres.rejected, (state, action) => {
            //     state.loading = false
            // })
            // .addCase(searchByGenre.rejected, (state, action) => {
            //     state.loading = true
            // })
});

const {
    reducer: moviesReducer
    , actions: {
        nextPage, prevPage,
        // show,
        setPage,
        selectGenre,
        deleteGenre
    }
} = moviesSlice;

const moviesAction = {
    getAllMovies,
    getMovieById,
    searchMovie,
    getAllGenres,
    searchByGenre,
    nextPage,
    prevPage,
    // show,
    setPage,
    selectGenre,
    deleteGenre
}

export {
    moviesAction,
    moviesReducer
}

