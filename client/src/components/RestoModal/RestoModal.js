import React from 'react';

import './RestoModal.css';
import Image from '../atomic-components/Image/Image';
import Title from '../atomic-components/Title/Title';
import Subtitle from '../atomic-components/Subtitle/Subtitle';
import SquareBtn from '../atomic-components/SquareBtn/SquareBtn';
import RoundBtn from '../atomic-components/RoundBtn/RoundBtn';
import Counter from '../atomic-components/Counter/Counter';

export default function RestoModal () {

  //TODO: IMPORT THE USER FIRSTNAME AND LASTNAME FROM REDUX
  const userName = 'Eileen Juergens'

  return (
    <div className="resto-modal">
      <div className="row">
        <div className="column">
          <Image alt={'User image'} />
        </div>
        <div className="column">
          <Title text={`Order by ${userName}!`} />
        </div>
      </div>
      <div className="row">
        <Subtitle text={'Please update the number of bowls and click confirm.'} />
      </div>
      <div className="row">
        <Counter />
      </div>
      <div className="row">
      <div className="column">
        <RoundBtn text={'+'} />
      </div>

      <div className="column">
        <Image alt={'Bowl image'} />
      </div>
      <div className="column">
        <RoundBtn text={'-'} />
      </div>
      </div>
      <div className="row">
        <SquareBtn text={'CONFIRM'} />
        <SquareBtn text={'CANCEL'} />
      </div>Ï
    </div>
  )
}

