import React from 'react';

import './ListItem.css';
import Image from '../atomic-components/Image/Image';
import Subtitle from '../atomic-components/Subtitle/Subtitle';
import TextField from '../atomic-components/TextField/TextField';

export default function ListItem ({ title, subtitle }) {

  return (
    <div className="list-item">
      <div class="row">
        <div class="column">
          <Image alt={'image'} />
        </div>
        <div class="column">
          <Subtitle text={title} />
          <TextField text={subtitle} />
        </div>
      </div>
    </div>
  )
}
