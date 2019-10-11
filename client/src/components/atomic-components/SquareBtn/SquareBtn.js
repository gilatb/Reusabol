import React from 'react';
import { Button } from '@material-ui/core';

export default function SquareBtn ({ text, onClick, disabled }) {
  return (
    <div>
      <Button
        variant="contained"
        color="default"
        size="small"
        children={text}
        disabled={disabled}
        onClick={onClick}
    />
    </div>
  )
}
