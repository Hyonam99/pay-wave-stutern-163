import React from 'react';
import logo from 'assets/images/Logo-full.svg';
import style from "styles/components/builders/Ministyles.module.scss"

const Logo = () => {
  return (
    <div className={style["logo-container"]}>
      <img
        src={logo}
        alt="pay-wave app logo"
        className={style["logo-image"]}
      />
    </div>
  );
};

export default Logo;
