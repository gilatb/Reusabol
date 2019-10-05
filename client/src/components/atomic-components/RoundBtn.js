import React from 'react';
import { Fab } from '@material-ui/core';

export default function SquareBtn ({ text }) {
  return (
    <div>
      <Fab
        variant="fab-button"
        color="default"
        size="large"
        children={text}
    />
    </div>
  )
}
