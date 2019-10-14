import React from 'react';

import './Header.css';
import ImageComp from '../atomic-components/Image/ImageComp';
import { IoMdPower } from 'react-icons/io'

export default function Header() {
  return (
    <div className="header">
      <ImageComp alt={'Logo image'} src={''} />
      <a href='http://localhost:4000/logout'>Logout</a>
      {/* <ImageComp alt={'Burger image'} /> */}
      <IoMdPower className="logout-btn"/>
    </div>
  )
}
