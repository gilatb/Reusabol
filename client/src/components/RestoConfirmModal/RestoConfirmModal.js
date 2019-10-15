import React from 'react';
import { connect } from 'react-redux';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import './RestoConfirmModal.css';
import ImageComp from '../atomic-components/Image/ImageComp';
import Title from '../atomic-components/Title/Title';
import Subtitle from '../atomic-components/Subtitle/Subtitle';
import SquareBtn from '../atomic-components/SquareBtn/SquareBtn';
import RoundBtn from '../atomic-components/RoundBtn/RoundBtn';
import Counter from '../atomic-components/Counter/Counter';
import { toggleRestoConfirm } from '../../redux/actions/UI';
import { updateCounter } from '../../redux/actions/transaction';
import { saveUpdatedTransaction } from '../../redux/actions/transaction';
import services from '../../services';

export function RestoConfirmModal ({ UIState, pendingTransactions, currentTransaction, toggleRestoConfirm, counter, updateCounter, saveUpdatedTransaction }) {

  let open = UIState.restoConfirmModal;
  // let currentTransDetails = currentTransaction && pendingTransactions.filter(el => el.transId === currentTransaction);
  let currentTransDetails = currentTransaction && pendingTransactions.find(el => el.transId === currentTransaction);
  let name = currentTransDetails && `${currentTransDetails.userFirstName} ${currentTransDetails.userLastName}`;

  const confirmClickHandler = (e) => {
    console.log('currentTransDetails: ', currentTransDetails);
    console.log('currentTransaction: ', currentTransaction);
    const reqBody = {
      numBols: counter, 
      transId: currentTransDetails.transId, //'5da4b2577a66863763cd4673', // local db: "9e8535e3-5b02-487a-ae14-7866cc7e301e 
      userId: currentTransDetails.userId, // '5da4b1deb34632f2e3cd437c', local db: "5d9ef44a0c0bdb07274aef73", 
      restoId: currentTransDetails.restoId, // '5da4a94bb34632f2e3ca344d', // local db: "5da4496cb7c099f6d8125054 
    }
    services.db.updateTransaction(reqBody)
    // .then(res => console.log('res in RestoConfirmModal: ', res))
    .then(res => saveUpdatedTransaction(res.resto.pendingTrans))
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
            <div className="row">
              <div className="column">
                <ImageComp alt={'User image'} />
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
                <RoundBtn text={'+'} onClick={(e) => updateCounter(e, 1)} />
              </div>
              <div className="column">
                <ImageComp alt={'Bowl image'} />
              </div>
              <div className="column">
                <RoundBtn text={'-'} onClick={(e) => updateCounter(e, -1)} />
              </div>
            </div>
            <div className="row">
              <SquareBtn text={'CONFIRM'} onClick={confirmClickHandler} />
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
  saveUpdatedTransaction: (transactions) => dispatch(saveUpdatedTransaction(transactions)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RestoConfirmModal);