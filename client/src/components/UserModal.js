import React from 'react';

import Title from './atomic-components/Title';
import SquareBtn from './atomic-components/SquareBtn';

export default function UserModal () {

  //TODO: IMPORT THE RESTO NAME AND NUMBOLS FROM REDUX
  const restoName = 'La Bodegueta';
  const numBols = 2;

  return (
    <div>
      <Title text={`${restoName} has provided ${numBols} bowls.`} />
      <SquareBtn text={'CONFIRM'} />
      <SquareBtn text={'CANCEL'} />
    </div>
  )
}
