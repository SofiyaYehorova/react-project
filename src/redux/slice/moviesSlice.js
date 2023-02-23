import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genresService, moviesService, searchMovieService} from "../../services";

const initialState = {
    movies: [],
    movie: null,
    // genres: [],
    // search: [],
    // currentGenres: [],
    page: 1,
    // show: true,
    // total_pages: 500,
    errors: null,
    loading: false,
    // filterParams: ''
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
//
// const getMoviesByGenre = createAsyncThunk(
//     'moviesSlice/getMoviesByGenre',
//     async (_, thunkAPI) => {
//         try {
//             const {data} = await genresService.getGenres();
//             return data
//         } catch (e) {
//             thunkAPI.rejectWithValue(e.response?.data)
//         }
//     }
// );
//
// const searchMovieGenres = createAsyncThunk(
//     'moviesSlice/searchMovieGenres',
//     async ({currentGenres}, thunkAPI) => {
//         try {
//             const {data} = await genresService.searchByGenre(currentGenres);
//             return data
//         } catch (e) {
//             thunkAPI.rejectWithValue(e.response?.data)
//         }
//     }
// );
//
const searchMovie = createAsyncThunk(
    'moviesSlice/searchMovie',
    async (movie, thunkAPI) => {
        try {
            const {data} = await searchMovieService.searchMovie(movie);
            // const {data} = await searchMovieService.getBySearchMovie(arg);

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
            // if (state.page < 500) state.page += action.payload
            state.page += 1;

        },
        prevPage: (state, action) => {
            // if (state.page > 1) state.page -= action.payload
            state.page -= -1
        },
        // show: (state, action) => {
        //     state.show = action.payload
        // },
        // selectGenre: (state, action) => {
        //     state.currentGenres.push(action.payload)
        // },
        // deleteGenres: (state, action) => {
        //     const index = state.currentGenre.findIndex(genre => genre.id === action.payload);
        //     state.currentGenres.splice(index, 1)
        // }
        setPage: (state, action) => {
            state.page = action.payload
        },
        // setFilterParams: (state, action) => {
        //     state.filterParams = action.payload
        // }
    },
    extraReducers: builder =>
        builder
            .addCase(getAllMovies.fulfilled, (state, action) => {
                state.movies = action.payload
                // state.page = action.payload
                state.loading = false
            })
            .addCase(getMovieById.fulfilled, (state, action) => {
                state.movies = action.payload
                // state.page = action.payload
                state.loading = false
            })
            // .addCase(getMoviesByGenre.fulfilled, (state, action) => {
            //     state.movies = action.payload
            //     // state.page = action.payload
            //     state.loading = false
            // })
            // .addCase(searchMovieGenres.fulfilled, (state, action) => {
            //     state.movies = action.payload
            //     // state.page = action.payload
            //     state.loading = action.payload
            // })
            .addCase(searchMovie.fulfilled, (state, action) => {
                state.movies = action.payload
                // state.page = action.payload
                state.loading = action.payload
            })
            .addCase(getAllMovies.pending, (state) => {
                state.loading = true
            })
            .addCase(getMovieById.pending, (state) => {
                state.loading = true
            })
            // .addCase(getMoviesByGenre.pending, (state) => {
            //     state.loading = true
            // })
            // .addCase(searchMovieGenres.pending, (state) => {
            //     state.loading = true
            // })
            .addCase(searchMovie.pending, (state) => {
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
            // .addCase(getMoviesByGenre.rejected, (state, action) => {
            //     state.error = action.payload
            //     state.loading = false
            // })
            // .addCase(searchMovieGenres.rejected, (state, action) => {
            //     state.error = action.payload
            //     state.loading = false
            // })
            .addCase(searchMovie.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })
});

const {
    reducer: moviesReducer
    , actions: {
        nextPage, prevPage,
        // show, deleteGenres,
        setPage
        // , setFilterParams
    }
} = moviesSlice;

const moviesAction = {
    getAllMovies,
    getMovieById,
    // getMoviesByGenre,
    // searchMovieGenres,
    searchMovie,
    nextPage,
    prevPage,
    // show,
    // deleteGenres,
    setPage,
    // setFilterParams
}

export {
    moviesAction,
    moviesReducer
}

