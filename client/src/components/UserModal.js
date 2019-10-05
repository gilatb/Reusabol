import React from 'react';

import Title from './atomic-components/Title';

export default function UserModal() {

  //TODO: IMPORT THE RESTO NAME FROM REDUX
  const restoName = 'La Bodegueta';
  const numBols = 2;

  return (
    <div>
      <Title text={`${restoName} has provided ${numBols} bowls`}/>
    </div>
  )
}
