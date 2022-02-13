import React from 'react';
import './style.scss'

interface ButtonProps {
  text: string
}

export const Button = ({text}:ButtonProps) => {
  return (
    <div className='boxButton'>
      <div className='button' >{text}</div>
      <div className='button-btn' />
    </div>
  );
}