import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './UserHome.css';
import Header from '../Header/Header';
import Title from '../atomic-components/Title/Title';
import Map from '../Map/Map';
import actions from '../../redux/actions';

export function UserHome ({ userData, getUserData }) {

  //TODO: DELETE THIS VARIABLE ONCE YOU SET UP THE CONNECTION TO THE LOGIN
  const userId = '5d9b6dcf50187122380a9203';

  useEffect(() => {
    getUserData(userId);
  }, []);

  return (
    <div className="user-home">
      <Header />
      {userData && <Title text={`Hi ${userData.firstName}!`} />}
      <Map />
    </div>
  )
}

const mapStateToProps = (state) => {
  return { userData: state.user.userData, }
}

const mapDispatchToProps = (dispatch) => ({
  getUserData: (userId) => dispatch(actions.user.getUserData(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserHome);
