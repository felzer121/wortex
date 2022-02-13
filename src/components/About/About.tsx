import React from 'react';
import './style.scss'
import Tags from "../Tags/Tags";

const About = () => {
  const tags = [
    '#программированию',
    '#разработке игр',
    '#компьютерной граммотности',
    '#самостоятельности',
    '#командной работе',
    '#алгоритмичному мышлению',
  ]
  return (
    <div className='about'>
      <svg className='about__fon' width="1920" height="760" viewBox="0 0 1920 760" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 760H1920V157.941C1920 103.951 1877.14 59.7082 1823.18 57.9917L0 1.36239e-05V760Z" fill="#2F364B"/>
      </svg>
      <div className='about__content'>
        <div className='about__box'>
          <div className='about__video'>
            <img src="./child-1.png" className='about__child-1' alt=""/>
            <img src="./child-2.jpg" className='about__child-2' alt=""/>
            <img src="./child-3.jpg" className='about__child-3' alt=""/>
            <video width="630" height="400" controls={true} poster="./started.png">
            </video>
          </div>
          <div className='about__info'>
            <div className='about__info-container'>
              <h2>Hello <span className='about__info-subtitle'>Тетриум!</span></h2>
              <p>Мы учим практическим навыкам, которые
                будут полезны в будущем:</p>
              <Tags tags={tags} />
              <p>Занятия проходят онлайн, а вместо скучных контрольных ребята создают реальные проекты.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;