import React from 'react';

import './Footer.css';
import SquareBtn from '../atomic-components/SquareBtn/SquareBtn';

export default function () {
  return (
    <div className="footer">
      <SquareBtn text={'PENDING'} />
      <SquareBtn text={'COMPLETE'} />
    </div>
  )
}
