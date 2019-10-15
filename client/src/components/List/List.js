import React from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
import { connect } from 'react-redux';

import './List.css';
import ListItem from '../ListItem/ListItem';
import RestoConfirmModal from '../RestoConfirmModal/RestoConfirmModal';
import { toggleRestoConfirm } from '../../redux/actions/UI';
import { setCurrentTransaction } from '../../redux/actions/transaction';

export function List ({ array, UIState, toggleRestoConfirm, setCurrentTransaction, currentTransaction, pendingTransactions }) {

  let currentTransDetails = currentTransaction && pendingTransactions.filter(el => el._id === currentTransaction);
  let name = currentTransDetails && `${currentTransDetails.userFirstName} ${currentTransDetails.userLastName}`;


  const clickHandler = (e, el) => {
    toggleRestoConfirm();
    setCurrentTransaction(el.transId);
  }

  return (
    <div className="list">
      {array && array.map(el => {
        return <div><ButtonBase className="list-item" type="button" onClick={(e) => clickHandler(e, el)}>
          <ListItem
            key={array[el]}
            title={`Order by ${el.userFirstName} ${el.userLastName}`} subtitle={`Order placed at ${el.orderTime}`}
            image={el.googleImage}
          />
        </ButtonBase>
          <RestoConfirmModal title={el.userFirstName} />
        </div>
      })}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    UIState: state.UI.UIState,
    currentTransaction: state.transaction.currentTransaction,
    pendingTransactions: Object.values(state.transaction.pendingTransactions),
  }
}

const mapDispatchToProps = (dispatch) => ({
  toggleRestoConfirm: () => dispatch(toggleRestoConfirm()),
  setCurrentTransaction: (id) => dispatch(setCurrentTransaction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);



