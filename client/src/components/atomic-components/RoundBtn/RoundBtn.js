import React from 'react';
import { Fab } from '@material-ui/core';

export default function RoundBtn ({ text, onClick }) {
  return (
    <div>
      <Fab
        variant="fab-button"
        color="default"
        size="large"
        children={text}
        onClick={onClick}
    />
    </div>
  )
}
