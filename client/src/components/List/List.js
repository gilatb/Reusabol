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
          <ListItem key={array[el]} title={`${el.userFirstName} ${el.userLastName}`} subtitle={`Order placed at ${el.orderTime}`} />
        </ButtonBase>
      })}
    </div>
  )
}





