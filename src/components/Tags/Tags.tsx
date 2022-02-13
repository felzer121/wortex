import React from 'react';
import './style.scss'

interface TagsProps {
  tags: string[]
}

const Tags = ({tags}: TagsProps) => {
  return (
    <div className='tags'>
      {tags.map(item => ( <div key={item} className='tags__item'>
        <span>{item}</span>
      </div>))}
    </div>
  );
};

export default Tags;