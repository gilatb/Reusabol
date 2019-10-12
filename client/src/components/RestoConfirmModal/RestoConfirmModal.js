import React from 'react';
import { connect } from 'react-redux';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import './RestoConfirmModal.css';
import Image from '../atomic-components/Image/Image';
import Title from '../atomic-components/Title/Title';
import Subtitle from '../atomic-components/Subtitle/Subtitle';
import SquareBtn from '../atomic-components/SquareBtn/SquareBtn';
import RoundBtn from '../atomic-components/RoundBtn/RoundBtn';
import Counter from '../atomic-components/Counter/Counter';
import { toggleRestoConfirm } from '../../redux/actions/UI';

export function RestoConfirmModal ({ UIState, data, title, pendingTransactions, currentTransaction, toggleRestoConfirm }) {

  let open = UIState.restoConfirm;
  let currTransDetails = currentTransaction && pendingTransactions.filter(el => el.id === currentTransaction);
  let name = currTransDetails && `${currTransDetails[0].userFirstName} ${currTransDetails[0].userLastName}`;

  return (
    <div className="resto-confirm-modal">
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal"
        open={open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className="paper">
            <div className="row">
              <div className="column">
                <Image alt={'User image'} />
              </div>
              <div className="column">
                <Title text={`Order by ${name}!`} />
              </div>
            </div>
            <div className="row">
              <Subtitle text={'Please update the number of bowls and click confirm.'} />
            </div>
            <div className="row">
              <Counter />
            </div>
            <div className="row">
              <div className="column">
                <RoundBtn text={'+'} />
              </div>
              <div className="column">
                <Image alt={'Bowl image'} />
              </div>
              <div className="column">
                <RoundBtn text={'-'} />
              </div>
            </div>
            <div className="row">
              <SquareBtn text={'CONFIRM'} />
              <SquareBtn text={'CANCEL'} onClick={toggleRestoConfirm} />
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    UIState: state.UI.resto,
    currentTransaction: state.transaction.currentTransaction,
    pendingTransactions: Object.values(state.transaction.pendingTransactions)
  }
}

const mapDispatchToProps = (dispatch) => ({
  toggleRestoConfirm: () => dispatch(toggleRestoConfirm()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RestoConfirmModal);