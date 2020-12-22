/* eslint-disable jsx-quotes */
/* eslint-disable no-useless-constructor */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import React from 'react';
import '../assets/styles/components/header/_header.scss';

import logo from '../assets/static/logo-platzi-video-BW2.png';
import userImage from '../assets/static/user-icon.png';

function Header() {
  return (
    <header className="header">
      <img className="header__img" src={logo} alt="Platzi Video" />
      <div className="header__menu">
        <div className="header__menu--profile">
          <img src={userImage} alt="" />
          <p>Perfil</p>
        </div>
        <ul>
          <li><a href="/">Cuenta</a></li>
          <li><a href="/">Cerrar Sesión</a></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
