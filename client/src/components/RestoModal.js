import React from 'react';
import { Button } from '@material-ui/core';

import Image from './atomic-components/Image';
import Title from './atomic-components/Title';
import Subtitle from './atomic-components/Subtitle';
import SquareBtn from '../components/atomic-components/SquareBtn';

export default function RestoModal () {

  //TODO: IMPORT THE USER FIRSTNAME AND LASTNAME FROM REDUX
  const name = 'Eileen Juergens'

  return (
    <div>
      <Image alt={'User picture'} />
      <Title text={'Order by ' + name + '!'} />
      <Subtitle text={'Please update the number of bowls and click confirm.'} />

      <SquareBtn text={'CONFIRM'} />
      <SquareBtn text={'CANCEL'} />

    </div>
      )
    }

