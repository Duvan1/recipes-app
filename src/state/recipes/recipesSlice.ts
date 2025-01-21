import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RecipesState {
  filter: string; // Parámetro de búsqueda
  label: string; // Etiqueta del filtro
  loading: boolean; // Estado de carga global
}

const initialState: RecipesState = {
  filter: '', // Sin filtro por defecto
  label: 'Todas las Recetas', // Etiqueta por defecto
  loading: false, // No está cargando por defecto
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
      state.loading = action.payload; // Actualiza el estado de carga
    },
  },
});

export const { setFilter, setLoading } = recipesSlice.actions;

export default recipesSlice.reducer;
