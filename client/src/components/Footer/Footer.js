import React from 'react';
import { connect } from 'react-redux';

import './Footer.css';
import SquareBtn from '../atomic-components/SquareBtn/SquareBtn';
import RestoHistoryModal from '../RestoHistoryModal/RestoHistoryModal';
import actions from '../../redux/actions';

export function Footer ({ UIState, toggleOpen }) {


  return (
    <div className="footer">
      <SquareBtn text={'PREVIOUS TRANSACTIONS'} onClick={toggleOpen} />
      <RestoHistoryModal/>
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
