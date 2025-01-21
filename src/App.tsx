import React from 'react';
import { useSelector } from 'react-redux';
import MainLayout from './layouts/MainLayout';
import RecipeList from './components/RecipeList/RecipeList';
import SplashScreen from './components/SplashScreen/SplashScreen';
import { RootState } from './state/store';
import { Route, Routes } from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails/RecipeDetails';

const App: React.FC = () => {
  const loading = useSelector((state: RootState) => state.recipes.loading);

  return (
    <>
      {loading && <SplashScreen />}
      <MainLayout>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <RecipeList />
              </>
            }
          />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </MainLayout>
    </>
  );
};

export default App;
