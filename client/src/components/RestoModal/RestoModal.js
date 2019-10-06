import React from 'react';

import Image from '../atomic-components/Image/Image';
import Title from '../atomic-components/Title';
import Subtitle from '../atomic-components/Subtitle/Subtitle';
import SquareBtn from '../atomic-components/SquareBtn/SquareBtn';
import RoundBtn from '../atomic-components/RoundBtn/RoundBtn';
import Counter from '../atomic-components/Counter/Counter';

export default function RestoModal () {

  //TODO: IMPORT THE USER FIRSTNAME AND LASTNAME FROM REDUX
  const userName = 'Eileen Juergens'

  return (
    <div>
      <Image alt={'User image'} />
      <Title text={`Order by ${userName}!`} />
      <Subtitle text={'Please update the number of bowls and click confirm.'} />
      <RoundBtn text={'+'} />
      <Counter />
      <Image alt={'Bowl image'} />
      <RoundBtn text={'-'} />
      <SquareBtn text={'CONFIRM'} />
      <SquareBtn text={'CANCEL'} />
    </div>
      )
    }

