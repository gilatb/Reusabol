import React from 'react';

import Image from './atomic-components/Image';
import Burger from './atomic-components/Burger';

export default function Header() {
  return (
    <div>
      <h3>Header</h3>
      <Image />
      <Burger />
    </div>
  )
}
