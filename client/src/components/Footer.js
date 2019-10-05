import React from 'react';

import SquareBtn from './atomic-components/SquareBtn';

export default function () {
  return (
    <div>
      <SquareBtn text={'PENDING'} />
      <SquareBtn text={'COMPLETE'} />
    </div>
  )
}
