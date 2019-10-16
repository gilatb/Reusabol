import services from '../../services';

export function setExchangeType (exchangeType) {
  return {
    type: 'SET_EXCHANGE_TYPE',
    setExchangeType,
  }
}

export function setCurrentTransaction (id) {
  return {
    type: 'SET_CURRENT_TRANSACTION',
    id,
  }
}

export function updateCounter (e, val) {
  return {
    type: 'UPDATE_COUNTER',
    val,
  }
}

export function clearCounter () {
  return {
    type: 'CLEAR_COUNTER',
  }
}

export const saveNewTransaction = (reqBody) => dispatch => {
  services.db.createPendTrans(reqBody)
    .then((transactions) => {
      dispatch({
        type: 'SAVE_NEW_TRANSACTION',
        transactions
      })
      dispatch({
        type: 'UPDATE_CURRENT_TRANSACTION',
        transactions
      })
    })
}

export const saveUpdatedTransaction = (transaction) => {
  return {
    type: 'SAVE_UPDATED_TRANSACTION',
    transaction
  }
}

export const saveConfirmedTransaction = (transaction) => {
  return {
    type: 'SAVE_CONFIRMED_TRANSACTION',
    transaction
  }
}


