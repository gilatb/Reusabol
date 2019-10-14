import React from 'react';

import './Header.css';
import ImageComp from '../atomic-components/Image/ImageComp';

export default function Header() {
  return (
    <div className="header">
      <ImageComp alt={'Logo image'} />
      <a href='http://localhost:4000/logout'>Logout</a>
      {/* <ImageComp alt={'Burger image'} /> */}
    </div>
  )
}
