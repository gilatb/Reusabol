import React from 'react';

import Image from '../atomic-components/Image/Image';
import Subtitle from '../atomic-components/Subtitle/Subtitle';
import TextField from '../atomic-components/TextField/TextField';

export default function ListItem ({ title, subtitle }) {

  return (
    <div>
      <Image alt={'image'} />
      <Subtitle text={title} />
      <TextField text={subtitle} />
    </div>
  )
}
