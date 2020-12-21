/* eslint-disable jsx-quotes */
/* eslint-disable no-useless-constructor */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import React from 'react';
import '../assets/styles/components/header/_header.scss';

function Header() {
  return (
    <header className="header">
      <img className="header__img" src="https://raw.githubusercontent.com/platzi/curso-frontend-escuelajs/master/platzi-video/curso-frontend-developer/assets/logo-platzi-video-BW2.png" alt="Platzi Video" />
      <div className="header__menu">
        <div className="header__menu--profile">
          <img src="https://raw.githubusercontent.com/platzi/curso-frontend-escuelajs/master/platzi-video/curso-frontend-developer/assets/user-icon.png" alt="" />
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
