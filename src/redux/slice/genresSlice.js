import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genresService} from "../../services";


const initialState = {
    genres: [],
    currentGenre: [],
    // page: 1,
    errors: null,
    loading: false
};

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

const genresSlice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers: {
        selectGenre: (state, action) => {
            state.currentGenre.push(action.payload);
        },
        deleteGenre: (state, action) => {
            const index = state.currentGenre.findIndex(genre => genre.id === action.payload);
            state.currentGenre.splice(index, 1)
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAllGenres.fulfilled, (state, action) => {
                state.genres = action.payload
                state.loading = action.payload
            })
            .addCase(searchByGenre.fulfilled, (state, action) => {
                state.genres = action.payload
                state.loading = action.payload
            })
            .addCase(getAllGenres.pending, (state, action) => {
                state.loading = action.payload
            })
            .addCase(searchByGenre.pending, (state, action) => {
                state.genres = action.payload
                state.loading = action.payload
            })
            .addCase(getAllGenres.rejected, (state, action) => {
                state.errors = action.payload
            })
            .addCase(searchByGenre.rejected, (state, action) => {
                state.errors = action.payload
            })
});

const {
    reducer: genresReducer, actions: {
        // getGenre,
        selectGenre, deleteGenre
    }
} = genresSlice;

const genresAction = {
    getAllGenres,
    searchByGenre,
    selectGenre,
    deleteGenre
}

export {
    genresAction,
    genresReducer
}

