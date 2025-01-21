import React from 'react';
import MainLayout from './layouts/MainLayout';
import HeroBanner from './components/HeroBanner/HeroBanner';
import RecipeList from './components/RecipeList/RecipeList';
import Sponsor from './components/Sponsors/Sponsors';

const App: React.FC = () => {
  return (
    <MainLayout>
      <HeroBanner />
      <RecipeList />
      <Sponsor />
    </MainLayout>
  );
};

export default App;
