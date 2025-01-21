// src/pages/Home/Home.tsx
import React from 'react';
import Header from '../../components/Header/Header';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import './Home.scss';

const Home: React.FC = () => {
  return (
    <div className="home">
      <Header />
      <HeroBanner />
      {/* Aquí puedes incluir otros componentes como RecipeList o Sponsors */}
    </div>
  );
};

export default Home;
