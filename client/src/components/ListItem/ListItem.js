import React from 'react';

import './ListItem.css';
// import Image from '../atomic-components/Image/Image';
import bowl from '../../assets/bowl-white.png';
import Subtitle from '../atomic-components/Subtitle/Subtitle';
import TextField from '../atomic-components/TextField/TextField';
import Pretitle from '../atomic-components/Pretitle/Pretitle';

export default function ListItem ({ pretitle, title, subtitle }) {

  return (
      <div className="list-item-row">
        <div className="column-img">
          <img src={bowl} alt="bowl" className="bowl-logo"/>
        </div>
        <div className="column-text">
          <Pretitle text={pretitle}/>
          <Subtitle text={title} />
          <TextField text={subtitle} />
        </div>
      </div>
  )
}
