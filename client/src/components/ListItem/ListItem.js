import React from 'react';

import './ListItem.css';
// import Image from '../atomic-components/Image/Image';
import bowl from '../../assets/bowl-white.png';
import Subtitle from '../atomic-components/Subtitle/Subtitle';
import TextField from '../atomic-components/TextField/TextField';

export default function ListItem ({ subtitle, requestTypeText, name, style }) {

  return (
      <div className="list-item-row">
        <div className="column-img" style={{background:`${style}`}}>
          <img src={bowl} alt="bowl" className="bowl-logo"/>
        </div>
        <div className="column-text">
          <Subtitle text={requestTypeText} />
          <Subtitle text={name} />
          <TextField text={subtitle} />
        </div>
      </div>
  )
}
