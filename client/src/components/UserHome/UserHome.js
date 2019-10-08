import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './UserHome.css';
import Header from '../Header/Header';
import Map from '../Map/Map';
import actions from '../../redux/actions';

export function UserHome ({ userData, getUserData }) {

  //TODO: DELETE THIS VARIABLE ONCE YOU SET UP THE CONNECTION TO THE LOGIN
  const userId = '5d9b6dcf50187122380a9203';
console.log('userData: ', userData);
  useEffect(() => {
    getUserData(userId);
  }, []);

  return (
    <div className="user-home">
      <Header />
      <Map />
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log('state: ', state);
 return { userData: state.user.userData,}
}

const mapDispatchToProps = (dispatch) => ({
  getUserData: (userId) => dispatch(actions.user.getUserData(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserHome);
