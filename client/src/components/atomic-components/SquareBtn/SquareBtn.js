import React from 'react';
import { Button } from '@material-ui/core';

export default function SquareBtn ({ text, onClick }) {
  return (
    <div>
      <Button
        variant="contained"
        color="default"
        size="small"
        children={text}
        onClick={onClick}
    />
    </div>
  )
}
