// src/layouts/MainLayout.tsx
import React from 'react';
import Header from '../components/Header/Header';
import './MainLayout.scss';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="main-layout">
      <Header />
      <main className="main-layout__content">{children}</main>
    </div>
  );
};

export default MainLayout;
