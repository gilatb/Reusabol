import React from 'react';
import { connect } from 'react-redux';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import './UserConfirmModal.css';
import Title from '../atomic-components/Title/Title';
import SquareBtn from '../atomic-components/SquareBtn/SquareBtn';
import { toggleUserConfirm } from '../../redux/actions/UI';

export function UserConfirmModal ({ UIState, toggleUserConfirm }) {

  let open = UIState.userConfirmModal;
  console.log('open in USERCONFIRMMODAL: ', open);

  //TODO: IMPORT THE RESTO NAME AND NUMBOLS FROM REDUX
  const restoName = 'La Bodegueta';
  const numBols = 2;

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
          <div className="paper">
            <div className="row">
              <Title text={`${restoName} has provided ${numBols} bowls.`} />
            </div>
            <div className="row">
              <SquareBtn text={'CONFIRM'} />
              <SquareBtn text={'CANCEL'} onClick={toggleUserConfirm} />
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    UIState: state.UI.user,
    // currentTransaction: state.transaction.currentTransaction,
    // pendingTransactions: Object.values(state.transaction.pendingTransactions),
    // counter: state.transaction.counter,
  }
}

const mapDispatchToProps = (dispatch) => ({
  toggleUserConfirm: () => dispatch(toggleUserConfirm()),
  // updateCounter: (e, val) => dispatch(updateCounter(e, val)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserConfirmModal);