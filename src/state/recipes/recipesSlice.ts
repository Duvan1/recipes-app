import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RecipesState {
  filter: string;
  label: string;
  loading: boolean;
}

const initialState: RecipesState = {
  filter: '',
  label: 'Todas las Recetas',
  loading: false,
};

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<{ filter: string; label: string }>) => {
      state.filter = action.payload.filter;
      state.label = action.payload.label;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setFilter, setLoading } = recipesSlice.actions;

export default recipesSlice.reducer;
