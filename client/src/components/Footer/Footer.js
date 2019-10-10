import React from 'react';
import { connect } from 'react-redux';

import './Footer.css';
import SquareBtn from '../atomic-components/SquareBtn/SquareBtn';
import RestoHistoryModal from '../RestoHistoryModal/RestoHistoryModal';
import actions from '../../redux/actions';

export function Footer ({ toggleOpen }) {

  return (
    <div className="footer">
      <SquareBtn text={'PREVIOUS TRANSACTIONS'} onClick={toggleOpen('restoHistory')} />
      <RestoHistoryModal/>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  toggleOpen: (modalName) => dispatch(actions.UI.toggleOpen(modalName)),
});

export default connect(null, mapDispatchToProps)(Footer);
