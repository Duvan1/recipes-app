import React from 'react';
import MainLayout from './layouts/MainLayout';
import HeroBanner from './components/HeroBanner/HeroBanner';
import RecipeCard from './components/RecipeCard/RecipeCard';

const App: React.FC = () => {
  return (
    <MainLayout>
      <HeroBanner />
      <RecipeCard
        title="Delicious Pizza"
        image="https://via.placeholder.com/300"
        rating={5}
      />
    </MainLayout>
  );
};

export default App;
