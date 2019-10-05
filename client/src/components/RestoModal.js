import React from 'react';
import { Button } from '@material-ui/core';

import Image from './atomic-components/Image';
import Title from './atomic-components/Title';
import Subtitle from './atomic-components/Subtitle';
import SquareBtn from '../components/atomic-components/SquareBtn';
import RoundBtn from './atomic-components/RoundBtn';
import Counter from './atomic-components/Counter';

export default function RestoModal () {

  //TODO: IMPORT THE USER FIRSTNAME AND LASTNAME FROM REDUX
  const name = 'Eileen Juergens'

  return (
    <div>
      <Image alt={'User image'} />
      <Title text={'Order by ' + name + '!'} />
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

