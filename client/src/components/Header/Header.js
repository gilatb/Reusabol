import React from 'react';

import './Header.css';
import Image from '../atomic-components/Image/Image';
import { IoIosMenu } from 'react-icons/io'

export default function Header() {
  return (
    <div className="header">
      <a href='http://localhost:4000/logout'>Logout</a>
      <Image alt={'Logo image'} />
      <IoIosMenu className="menu-btn"/>
    </div>
  )
}




