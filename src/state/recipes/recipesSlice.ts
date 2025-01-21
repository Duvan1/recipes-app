import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RecipesState {
  filter: string; // El filtro actual (por ejemplo, "vegetarian")
}

const initialState: RecipesState = {
  filter: '', // Sin filtro por defecto
};

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload; // Actualiza el filtro
    },
  },
});

export const { setFilter } = recipesSlice.actions;

export default recipesSlice.reducer;
