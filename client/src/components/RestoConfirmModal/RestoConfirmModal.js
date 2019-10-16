import React from 'react';
import { connect } from 'react-redux';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import './RestoConfirmModal.css';
import Title from '../atomic-components/Title/Title';
import Subtitle from '../atomic-components/Subtitle/Subtitle';
import SquareBtn from '../atomic-components/SquareBtn/SquareBtn';
import RoundBtn from '../atomic-components/RoundBtn/RoundBtn';
import Counter from '../atomic-components/Counter/Counter';
import { toggleRestoConfirm } from '../../redux/actions/UI';
import { updateCounter, clearCounter } from '../../redux/actions/transaction';
import { saveConfirmedTransaction } from '../../redux/actions/transaction';
import services from '../../services';

import giveBowlLeft from '../../assets/give-full-bowl-left.png';
import giveBowlRight from '../../assets/give-full-bowl-right.png';
import bwBowl from '../../assets/bw-bowl.png';


export function RestoConfirmModal ({ UIState, pendingTransactions, currentTransaction, toggleRestoConfirm, counter, updateCounter, saveUpdatedTransaction, clearCounter }) {

  let open = UIState.restoConfirmModal;
  let currentTransDetails = currentTransaction && pendingTransactions.find(el => el.transId === currentTransaction);
  let name = currentTransDetails && `${currentTransDetails.userFirstName} ${currentTransDetails.userLastName}`;

  const confirmClickHandler = (e) => {
    const reqBody = {
      numBols: counter,
      transId: currentTransDetails.transId,
      userId: currentTransDetails.userId,
      restoId: currentTransDetails.restoId,
      name: currentTransaction.name,
    }
    services.db.updateTransaction(reqBody)
      .then(res => saveConfirmedTransaction(res.resto.pendingTrans.find(el => el.transId === currentTransaction)))
    toggleRestoConfirm();
  }

  const cancelClickHandler = (e) => {
    clearCounter();
    toggleRestoConfirm();
  }

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
            <div className="text-container">
              <div className="row">
                {/* <div className="column">
                  <Image alt={'User image'} />
                </div> */}
                {/* <div className="column">
                </div> */}
                <Title text={`Order by ${name}!`} />
              </div>
              <div className="row">
                <Subtitle text={'Please update the number of bowls and click to confirm.'} />
              </div>
              <div className="row counter">
                <Counter value={counter} />
              </div>
              <div className="row-with-bowl">
                <div className="column">
                  <RoundBtn text={'-'} onClick={(e) => updateCounter(e, -1)} />
                </div>
                <div className="column">
                  <img src={bwBowl} alt="bwBowl" className="bwBowl-logo"/>
                </div>
                <div className="column">
                  <RoundBtn text={'+'} onClick={(e) => updateCounter(e, 1)} />
                </div>
              </div>
              <div className="row-with-buttons">
                <div className="cancel-conf-btn" >
                  <SquareBtn text={'CANCEL'} onClick={cancelClickHandler} />
                </div>
                <div className="cancel-conf-btn" >
                  <SquareBtn text={'CONFIRM'} onClick={confirmClickHandler} />
                </div>
              </div>
              </div>
            <div className="image-container">
              <img src={giveBowlLeft} alt="giveBowl" className="giveBowl-logo"/>
              <img src={giveBowlRight} alt="giveBowl" className="giveBowl-logo"/>
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
  clearCounter: () => dispatch(clearCounter()),
  saveConfirmedTransaction: (transactions) => dispatch(saveConfirmedTransaction(transactions)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RestoConfirmModal);