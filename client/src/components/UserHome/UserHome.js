import React from 'react';
import { connect } from 'react-redux';

import './UserHome.css';
import Header from '../Header/Header';
import Map from '../Map/Map';
import actions from '../../redux/actions/index';

export function UserHome ({ userData, getUserData }) {

  const userId = '1';

  return (
    <div className="user-home">
      <Header />
      <Map />
    </div>
  )
}

const mapStateToProps = (state) => ({
  userData: state.userData,
});

//TODO: DELETE
const mapDispatchToProps = (dispatch) => ({
  //CODE
});

export default connect(mapStateToProps, mapDispatchToProps)(UserHome);
