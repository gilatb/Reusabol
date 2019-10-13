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
import { updateCounter } from '../../redux/actions/transaction';

export function RestoConfirmModal ({ UIState, pendingTransactions, currentTransaction, toggleRestoConfirm, counter, updateCounter }) {

  let open = UIState.restoConfirmModal;
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
              <Counter value={counter} />
            </div>
            <div className="row">
              <div className="column">
                <RoundBtn text={'+'} onClick={(e) => updateCounter(e, 1)}/>
              </div>
              <div className="column">
                <Image alt={'Bowl image'} />
              </div>
              <div className="column">
                <RoundBtn text={'-'} onClick={(e) => updateCounter(e, -1)}/>
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
    pendingTransactions: Object.values(state.transaction.pendingTransactions),
    counter: state.transaction.counter,
  }
}

const mapDispatchToProps = (dispatch) => ({
  toggleRestoConfirm: () => dispatch(toggleRestoConfirm()),
  updateCounter: (e, val) => dispatch(updateCounter(e, val)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RestoConfirmModal);