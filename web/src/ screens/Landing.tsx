import React from 'react';
import {FiArrowRight} from 'react-icons/fi';     // biblioteca instalada  (yarn add react-icons)
import {Link} from 'react-router-dom';           // não deixa toda a página ser carregada (SINGLE PAGE)


import '../styles/pages/landing.css';
import logoImg from '../images/logo.svg';


function Landing() {
  return (
    <div id="page-landing">
     <div className="content-wrapper">
        <img src={logoImg} alt="Happy"/>

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças</p>
        </main>

        <div className="location">
          <strong>Vila Velha</strong>
          <span>Espírito Santo</span>
        </div>

        <Link to="/app" className="enter-app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)"/>
        </Link>
     </div>
    </div>
  );
}

export default Landing;