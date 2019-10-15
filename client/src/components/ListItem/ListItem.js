import React from 'react';

import './ListItem.css';
// import Image from '../atomic-components/Image/Image';
import bowl from '../../assets/bowl-white.png';
import Subtitle from '../atomic-components/Subtitle/Subtitle';
import TextField from '../atomic-components/TextField/TextField';
import RestoConfirmModal from '../RestoConfirmModal/RestoConfirmModal';

export default function ListItem ({ title, subtitle, image }) {

  return (
      <div className="list-item-row">
        <div className="column-img">
          <img src={bowl} alt="bowl" className="bowl-logo"/>
          {/* <Image alt={'image'} /> */}
        </div>
        <div className="column-text">
          <Subtitle text={title} />
          <TextField text={subtitle} />
        </div>
      </div>
  )
}
