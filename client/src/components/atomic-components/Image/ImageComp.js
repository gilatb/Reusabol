import React from 'react';
import Image from 'material-ui-image';

export default function ImageComp ({ alt, src }) {
  return (
    <div>
      <Image src={src} alt={alt}/>
    </div>
  )
}
