import React from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';

import './List.css';
import ListItem from '../ListItem/ListItem';

export default function List ({ array }) {

  //FIXME: FIX THE KEY IN THE ARRAY.MAP, IT SHOULD BE A UNIQUE ID OF SORTS THAT IS NOT THE INDEX OF THE ARRAY ITEM

  return (
    <div className="list">
      {array.map(el => {
        return <ButtonBase className="list-item">
          <ListItem 
          key={array[el]} 
          // key={el.id} 
          // key={el.id.toString()} 
          id={el.id}
          title={`${el.userFirstName} ${el.userLastName}`} 
          subtitle={`Order placed at ${el.orderTime}`} />
        </ButtonBase>
      })}
    </div>
  )
}

// const mapStateToProps = (state) => {
//   return { UIState: state.UI.UIState, }
// }

// const mapDispatchToProps = (dispatch) => ({
//   toggleOpen: () => dispatch(actions.UI.toggleOpen()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(List);



