import React from 'react';
import { connect } from 'react-redux';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import './UserConfirmModal.css';
import Title from '../atomic-components/Title/Title';
import SquareBtn from '../atomic-components/SquareBtn/SquareBtn';
import { toggleUserConfirm } from '../../redux/actions/UI';

export function UserConfirmModal ({ UIState, toggleUserConfirm, updatedCurrentTransaction }) {

  let open = UIState.userConfirmModal;

  const restoName = updatedCurrentTransaction && updatedCurrentTransaction.restoId;
  const numBols = updatedCurrentTransaction && updatedCurrentTransaction.numBols;
  
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
    updatedCurrentTransaction: state.transaction.updatedCurrentTransaction,
  }
}

const mapDispatchToProps = (dispatch) => ({
  toggleUserConfirm: () => dispatch(toggleUserConfirm()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserConfirmModal);