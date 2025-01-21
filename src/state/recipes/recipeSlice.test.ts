import recipesReducer, { setFilter, setLoading } from './recipesSlice';

describe('recipesSlice', () => {
  const initialState = {
    filter: '',
    label: 'Todas las Recetas',
    loading: false,
  };

  it('should return the initial state when no action is passed', () => {
    const result = recipesReducer(undefined, { type: '@@INIT' }); // Usamos una acción válida
    expect(result).toEqual(initialState);
  });

  it('should handle setFilter action', () => {
    const action = setFilter({ filter: 'vegetarian', label: 'Vegetarianos' });
    const result = recipesReducer(initialState, action);

    expect(result).toEqual({
      filter: 'vegetarian',
      label: 'Vegetarianos',
      loading: false,
    });
  });

  it('should handle setLoading action (true)', () => {
    const action = setLoading(true);
    const result = recipesReducer(initialState, action);

    expect(result).toEqual({
      filter: '',
      label: 'Todas las Recetas',
      loading: true,
    });
  });

  it('should handle setLoading action (false)', () => {
    const action = setLoading(false);
    const result = recipesReducer(
      { ...initialState, loading: true },
      action
    );

    expect(result).toEqual({
      filter: '',
      label: 'Todas las Recetas',
      loading: false,
    });
  });
});
