import React from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
import { connect } from 'react-redux';

import './List.css';
import ListItem from '../ListItem/ListItem';
import RestoConfirmModal from '../RestoConfirmModal/RestoConfirmModal';
import { toggleRestoConfirm } from '../../redux/actions/UI';
import { setCurrentTransaction, setExchangeType } from '../../redux/actions/transaction';
import { request } from 'http';

export function List ({ array, UIState, toggleRestoConfirm, setCurrentTransaction, currentTransaction, pendingTransactions, setExchangeType }) {

  // let currentTransDetails = currentTransaction && pendingTransactions.filter(el => el.transId === currentTransaction);
  // let requestType = currentTransaction && currentTransDetails.exchangeType;
  // requestType && setExchangeType(requestType);

  let requestType = currentTransaction.exchangeType.toUpperCase();

  const clickHandler = (e, el) => {
    toggleRestoConfirm();
    setCurrentTransaction(el);
  }

  return (
    <div className="list">
      {array && array.map(el => {
        return <div><ButtonBase className="list-item" type="button" onClick={(e) => clickHandler(e, el)}>
          <ListItem
            key={array[el]}
            requestTypeText={`${requestType}-A-BOL`}
            name={`${el.userFirstName} ${el.userLastName}`}
            subtitle={`Order placed at ${el.orderTime}`}
            // image={el.googleImage}
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
  setExchangeType: (exchangeType) => dispatch(setExchangeType(exchangeType)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);



