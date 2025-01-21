import React from 'react';
import MainLayout from './layouts/MainLayout';
import HeroBanner from './components/HeroBanner/HeroBanner';
import RecipeList from './components/RecipeList/RecipeList';

const App: React.FC = () => {
  return (
    <MainLayout>
      <HeroBanner />
      <RecipeList />
    </MainLayout>
  );
};

export default App;
