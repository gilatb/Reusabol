import React from 'react';
import { connect } from 'react-redux';

import './Footer.css';
import SquareBtn from '../atomic-components/SquareBtn/SquareBtn';
import ModalComp from '../atomic-components/Modal/ModalComp';
import actions from '../../redux/actions';

export function Footer ({ UIState, setOpen }) {


  return (
    <div className="footer">
      <SquareBtn text={'TRANSACTION HISTORY'} onClick={setOpen} />
      <ModalComp />
    </div>
  )
}

const mapStateToProps = (state) => {
  return { UIState: state.UI.UIState, }
}

const mapDispatchToProps = (dispatch) => ({
  setOpen: () => dispatch(actions.UI.setOpen()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
