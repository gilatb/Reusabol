import React from 'react';

import ListItem from '../ListItem/ListItem';

export default function List ({ array }) {

  //FIXME: FIX THE KEY IN THE ARRAY.MAP, IT SHOULD BE A UNIQUE ID OF SORTS THAT IS NOT THE INDEX OF THE ARRAY ITEM

  return (
    <div>
      {array.map(el => {
        return <ListItem key={array[el]} title={'title'} subtitle={'subtitle'}/>
      })}
    </div>
  )
}





