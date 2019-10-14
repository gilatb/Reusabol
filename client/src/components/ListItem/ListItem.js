import React from 'react';

import './ListItem.css';
import ImageComp from '../atomic-components/Image/ImageComp';
import Subtitle from '../atomic-components/Subtitle/Subtitle';
import TextField from '../atomic-components/TextField/TextField';
import RestoConfirmModal from '../RestoConfirmModal/RestoConfirmModal';

export default function ListItem ({ title, subtitle, image }) {

  return (
    <div className="list-item" >
      <div className="row">
        <div className="column">
          <ImageComp alt={'Google profile picture'} src={image} />
        </div>
        <div className="column">
          <Subtitle text={title} />
          <TextField text={subtitle} />
        </div>
      </div>
    </div>
  )
}
