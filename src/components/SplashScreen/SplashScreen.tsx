import React from 'react';
import './SplashScreen.scss';

const SplashScreen: React.FC = () => {
  return (
    <div className="splash-screen" role="status">
      <div className="splash-screen__spinner"></div>
    </div>
  );
};

export default SplashScreen;
