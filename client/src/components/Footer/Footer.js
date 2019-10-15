import React from 'react';
import { connect } from 'react-redux';

import './Footer.css';
// import SquareBtn from '../atomic-components/SquareBtn/SquareBtn';
import RestoHistoryModal from '../RestoHistoryModal/RestoHistoryModal';
import actions from '../../redux/actions';

export function Footer ({ toggleOpenHistory }) {

  return (
    <div className="footer">
      <button
        className="footer-btn"
        onClick={toggleOpenHistory}
        >PREVIOUS TRANSACTIONS</button>
      {/* <SquareBtn text={'PREVIOUS TRANSACTIONS'} onClick={toggleOpen('restoHistory')} /> */}
      <RestoHistoryModal/>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  toggleOpenHistory: () => dispatch(actions.UI.toggleOpenHistory()),
});

export default connect(null, mapDispatchToProps)(Footer);
