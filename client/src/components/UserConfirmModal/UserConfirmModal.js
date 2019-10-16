import React from 'react';
import { connect } from 'react-redux';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Lottie from 'react-lottie';

import './UserConfirmModal.css';
import Title from '../atomic-components/Title/Title';
import SquareBtn from '../atomic-components/SquareBtn/SquareBtn';
import { toggleUserConfirm } from '../../redux/actions/UI';
import animationData from '../../assets/checkmark.json';
import services from '../../services';

export function UserConfirmModal ({ UIState, toggleUserConfirm, updatedCurrentTransaction }) {

  let open = UIState.userConfirmModal;
  const restoName = updatedCurrentTransaction && updatedCurrentTransaction.name;
  const numBols = updatedCurrentTransaction && updatedCurrentTransaction.numBols;

  const defaultOptions = {
    loop: false,
    autoplay: true,
    path: 'checkmark.json',
    animationData: animationData,
  };
  const confirmClickHandler = (e) => {
    toggleUserConfirm();
    services.db.createPreviousTransaction(updatedCurrentTransaction);
    services.db.deletePendingTransaction(updatedCurrentTransaction);

    updatedCurrentTransaction.exchangeType === 'Take'
      &&
      services.db.updateInventoryTake(updatedCurrentTransaction);

    updatedCurrentTransaction.exchangeType === 'Return'
      &&
      services.db.updateInventoryReturn(updatedCurrentTransaction);
  }

  const cancelClickHandler = (e) => {
    toggleUserConfirm()
    services.db.deletePendingTransaction(updatedCurrentTransaction);
  }

  return (
    <div className="user-confirm-modal">
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
          <div className="paper-user-confirm">
            <div className="row-user-confirm-text">
              <Title text={updatedCurrentTransaction && updatedCurrentTransaction.exchangeType === 'Take' ? `${restoName} has provided ${numBols} ${numBols > 1 ? 'bowls' : 'bowl'}.` : `You have returned ${numBols} ${numBols > 1 ? 'bowls' : 'bowl'}.`} />
            </div>
            <div className="checkmark">
              <Lottie options={defaultOptions} height={110} width={110}/>
            </div>
            <div className="row">
              <SquareBtn text={'CONFIRM'} onClick={confirmClickHandler} />
              <SquareBtn text={'CANCEL'} onClick={cancelClickHandler} />
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  )
}
// style={el.exchangeType === 'Take' ? '#93CA99' : '#C9DA88'}

const mapStateToProps = (state) => {
  return {
    UIState: state.UI.user,
    updatedCurrentTransaction: state.transaction.updatedCurrentTransaction,
  }
}

const mapDispatchToProps = (dispatch) => ({
  toggleUserConfirm: () => dispatch(toggleUserConfirm()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserConfirmModal);