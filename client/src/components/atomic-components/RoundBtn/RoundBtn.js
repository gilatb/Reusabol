import React from 'react';
import { Fab } from '@material-ui/core';
import './RoundBtn.css'

export default function RoundBtn ({ text, onClick, disabled }) {
  return (
    <div>
      <Fab
        className="round-btn"
        variant="round"
        color="default"
        size="large"
        children={text}
        onClick={onClick}
        disabled={disabled}
    />
    </div>
  )
}
