import React from 'react';

import Image from './atomic-components/Image';
import Subtitle from './atomic-components/Subtitle';
import TextField from './atomic-components/TextField';

export default function ListItem ({ title, subtitle }) {

  return (
    <div>
      <Image alt={'image'} />
      <Subtitle text={title} />
      <TextField text={subtitle} />
    </div>
  )
}
