import React from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
import { connect } from 'react-redux';

import './List.css';
import ListItem from '../ListItem/ListItem';
import RestoConfirmModal from '../RestoConfirmModal/RestoConfirmModal';
import { toggleRestoConfirm } from '../../redux/actions/UI';
import { setCurrentTransaction } from '../../redux/actions/transaction';

export function List ({ array, UIState, toggleRestoConfirm, setCurrentTransaction }) {

  //FIXME: FIX THE KEY IN THE ARRAY.MAP, IT SHOULD BE A UNIQUE ID OF SORTS THAT IS NOT THE INDEX OF THE ARRAY ITEM

  const clickHandler = (e, el) => {
    toggleRestoConfirm();
    console.log('el in List: ', el);
    setCurrentTransaction(el._id);
  }

  //THIS GETS AN ARRAY OF THE USER IDS
  // let res = [];
  // if (array) {
  //   for (let i = 0; i < array.length; i++) {
  //     res.push(array[i].userId)
  //   }
  // }
  // console.log('res: ', res);

  return (
    <div className="list">
      {array && array.map(el => {
        return <div><ButtonBase className="list-item" type="button" onClick={(e) => clickHandler(e, el)}>
          <ListItem key={array[el]} title={`Order by ${el.userFirstName} ${el.userLastName}`} subtitle={`Order placed at ${el.orderTime}`} image={el.googleImage} />
        </ButtonBase>
          <RestoConfirmModal />
        </div>
      })}
    </div>
  )
}

const mapStateToProps = (state) => {
  return { UIState: state.UI.UIState, }
}

const mapDispatchToProps = (dispatch) => ({
  toggleRestoConfirm: () => dispatch(toggleRestoConfirm()),
  setCurrentTransaction: (id) => dispatch(setCurrentTransaction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);



