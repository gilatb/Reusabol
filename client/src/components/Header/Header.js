import React from 'react';

import './Header.css';
import Image from '../atomic-components/Image/Image';

export default function Header() {
  return (
    <div className="header">
      <Image alt={'Logo image'} />
      <Image alt={'Burger image'} />
    </div>
  )
}
