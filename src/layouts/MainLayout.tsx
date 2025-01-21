import React from 'react';
import Header from '../components/Header/Header';
import './MainLayout.scss';
import HeroBanner from '../components/HeroBanner/HeroBanner';
import Sponsor from '../components/Sponsors/Sponsors';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="main-layout">
      <Header />
      <HeroBanner />
      <main className="main-layout__content">{children}</main>
      <Sponsor />
    </div>
  );
};

export default MainLayout;
