import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genresService} from "../../services";


const initialState = {
    genres: [],
    genre: null,
    errors: null,
    loading: null
};

const getAllGenres = createAsyncThunk(
    'genresSlice/getAll',
    async (_, thunkAPI) => {
        try {
            const {data} = await genresService.getAll();
            return data
        } catch (e) {
            thunkAPI.rejectWithValue(e.response?.data)
        }
    }
);
const genresSlice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers: {
        getGenre: (state, action) => {
            state.genre = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAllGenres.fulfilled, (state, action) => {
                state.genres = action.payload
            })
            .addCase(getAllGenres.pending, (state, action) => {
                state.loading = action.payload
            })
            .addCase(getAllGenres.rejected, (state, action) => {
                state.errors = action.payload
            })
});

const {reducer: genresReducer, action: {getGenre}} = genresSlice;

const genresAction = {
    getAllGenres,
    getGenre
}

export {
    genresAction,
    genresReducer
}

