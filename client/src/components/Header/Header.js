import React from 'react';

import './Header.css';
import Image from '../atomic-components/Image/Image';
import Drawer from '../Drawer/Drawer';

export default function Header() {
  return (
    <div className="header">
      <Image alt={'Logo image'} />
      <Drawer/>
    </div>
  )
}




