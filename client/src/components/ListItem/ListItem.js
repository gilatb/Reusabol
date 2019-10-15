import React from 'react';

import './ListItem.css';
import ImageComp from '../atomic-components/Image/ImageComp';
import Subtitle from '../atomic-components/Subtitle/Subtitle';
import TextField from '../atomic-components/TextField/TextField';
import RestoConfirmModal from '../RestoConfirmModal/RestoConfirmModal';

export default function ListItem ({ title, subtitle, image }) {

  return (
      <div className="row">
        <div className="column-img">
          <ImageComp alt={'image'} src={image} />
        </div>
        <div className="column-text">
          <Subtitle text={title} />
          <TextField text={subtitle} />
        </div>
      </div>
  )
}
