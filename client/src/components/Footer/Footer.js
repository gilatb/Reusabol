import React from 'react';
import { connect } from 'react-redux';

import './Footer.css';
import SquareBtn from '../atomic-components/SquareBtn/SquareBtn';
import ModalComp from '../atomic-components/Modal/ModalComp';
import actions from '../../redux/actions';

export function Footer ({ UIState, toggleOpen }) {


  return (
    <div className="footer">
      <SquareBtn text={'TRANSACTION HISTORY'} onClick={toggleOpen} />
      <ModalComp />
    </div>
  )
}

const mapStateToProps = (state) => {
  return { UIState: state.UI.UIState, }
}

const mapDispatchToProps = (dispatch) => ({
  toggleOpen: () => dispatch(actions.UI.toggleOpen()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
