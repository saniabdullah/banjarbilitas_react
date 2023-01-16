import React from 'react';
import SocialMedia from './SocialMedia';

const AppWrap = (Component, classNames) => function HOC() {
  return (
    <div className={`app__container ${classNames}`}>
      {/* <SocialMedia /> */}
      <div className="app__wrapper app__flex">
        <Component />

        <div className="copyright">
          <p className="p-text">@2022 BanjarBilitas</p>
          <p className="p-text">All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default AppWrap;
