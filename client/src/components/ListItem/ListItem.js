import React from 'react';

import './ListItem.css';
import Image from '../atomic-components/Image/Image';
import Subtitle from '../atomic-components/Subtitle/Subtitle';
import TextField from '../atomic-components/TextField/TextField';
import RestoConfirmModal from '../RestoConfirmModal/RestoConfirmModal';

export default function ListItem ({ title, subtitle, data }) {

  return (
    <div className="list-item" key={id}>
      <div className="row">
        <div className="column">
          <Image alt={'image'} />
        </div>
        <div className="column">
          <Subtitle text={title} />
          <TextField text={subtitle} />
        </div>
      </div>
      <RestoConfirmModal />
    </div>
  )
}
