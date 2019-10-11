import React from 'react';
import SquareBtn from '../atomic-components/SquareBtn/SquareBtn';
import './Header.css';
import Image from '../atomic-components/Image/Image';
import { connect } from 'react-redux';
import { logout } from '../../redux/actions/user'

function Header(props) {
  return (
    <div className="header">
      <Image alt={'Logo image'} />
      <SquareBtn onClick={() => props.logout() } text="Logout"/>
      {/* <Image alt={'Burger image'} /> */}
    </div>
  )
}

export default connect(null, { logout })(Header);