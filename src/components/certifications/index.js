import React from 'react';
import './styles.scss';
import ReactAdvanced from '../../assets/graphics/ReactAdvanced.jpg';
import TypeScript6_2019 from '../../assets/graphics/TypeScript6_2019.jpg';
import Linux6_2019 from '../../assets/graphics/Linux6_2019.jpg';
import Cplusplus6_2019 from '../../assets/graphics/Cplusplus6_2019.jpg';
import Java6_2019 from '../../assets/graphics/Java6_2019.jpg';
import Angular5_2019 from '../../assets/graphics/Angular5_2019.jpg';
import Rails12_2018 from '../../assets/graphics/Rails12_2018.jpg';
import HTMLCSS12_2018 from '../../assets/graphics/HTMLCSS12_2018.jpg';
import PHP12_2018 from '../../assets/graphics/PHP12_2018.jpg';
import JS8_2018 from '../../assets/graphics/JS8_2018.jpg';
import AJAX8_2018 from '../../assets/graphics/AJAX8_2018.jpg';
import AJAX5_2018 from '../../assets/graphics/AJAX5_2018.jpg';
import AngularFour5_2018 from '../../assets/graphics/AngularFour5_2018.jpg';

const Certifications = props => {
  return (
    <header>
      <div className="wrap">
        <div className="logo">
          <img src={ReactAdvanced} alt="ReactAdvanced" />
          <img src={TypeScript6_2019} alt="TypeScript" />
          <img src={Linux6_2019} alt="Linux" />
          <img src={Cplusplus6_2019} alt="CPlusPlus" />
          <img src={Java6_2019} alt="Java" />
          <img src={Angular5_2019} alt="Angular.123TypeScript" />
          <img src={Rails12_2018} alt="Rails" />
          <img src={HTMLCSS12_2018} alt="H.T.M.L.123C.S.S." />
          <img src={PHP12_2018} alt="PHP" />
          <img src={JS8_2018} alt="JavaScript" />
          <img src={AJAX8_2018} alt="AJAX" />
          <img src={AJAX5_2018} alt="AJAX" />
          <img src={AngularFour5_2018} alt="Angular" />
        </div>
      </div>
    </header>
  );
};

export default Certifications;
