import React from 'react';
import { connect } from 'react-redux';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import './UserConfirmModal.css';
import Title from '../atomic-components/Title/Title';
import SquareBtn from '../atomic-components/SquareBtn/SquareBtn';
import { toggleUserConfirm } from '../../redux/actions/UI';
import Lottie from 'react-lottie';
import animationData from '../../assets/checkmark.json';


export function UserConfirmModal ({ UIState, toggleUserConfirm, updatedCurrentTransaction }) {

  let open = UIState.userConfirmModal;
  console.log('updatedCurrentTransaction: ', updatedCurrentTransaction);
  const restoName = updatedCurrentTransaction && updatedCurrentTransaction.name;
  const numBols = updatedCurrentTransaction && updatedCurrentTransaction.numBols;

  const defaultOptions = {
    loop: false,
    autoplay: true,
    path: 'checkmark.json',
    animationData: animationData,
  };

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
            <div className="checkmark">
              <Lottie options={defaultOptions} height={150} width={150}/>
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