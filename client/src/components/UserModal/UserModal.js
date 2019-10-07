import React from 'react';

import './UserModal.css';
import Title from '../atomic-components/Title/Title';
import SquareBtn from '../atomic-components/SquareBtn/SquareBtn';

export default function UserModal () {

  //TODO: IMPORT THE RESTO NAME AND NUMBOLS FROM REDUX
  const restoName = 'La Bodegueta';
  const numBols = 2;

  return (
    <div className="user-modal">
      <div className="row">
        <Title text={`${restoName} has provided ${numBols} bowls.`} />
      </div>
      <div className="row">
          <SquareBtn text={'CONFIRM'} />
          <SquareBtn text={'CANCEL'} />
      </div>
    </div>
  )
}
