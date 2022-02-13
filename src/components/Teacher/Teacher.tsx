import React from 'react';
import './style.scss'

export const Teacher = () => {
  return (
    <div className='Teacher'>
      <h3>Наши преподаватели</h3>
      <div className='Teacher__box'>
        <div className='Teacher__content'>
          <div className='Teacher__content-item'>
            <div className='Teacher__content-item'>
              <img src="./1.png" alt=""/>
              <div className='Teacher__content-subFon' />
              <div className='Teacher__content-info'>
                <h5>Преподаватель Python</h5>
                <h4>Александр Хархота</h4>
              </div>
            </div>


          </div>
        </div>
        <svg className='Teacher__fon' width="1920" height="760" viewBox="0 0 1920 760" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 699L1920 760V61.0714L0 0V699Z" fill="url(#paint0_linear_864_2)"/>
          <defs>
            <linearGradient id="paint0_linear_864_2" x1="960" y1="760" x2="960" y2="112.108" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2F364B"/>
              <stop offset="1" stopColor="#262B3D"/>
            </linearGradient>
          </defs>
        </svg>

      </div>

    </div>
  );
};