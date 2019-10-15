import React from 'react';
import { Button } from '@material-ui/core';
import './SquareBtn.css';

export default function SquareBtn ({ text, onClick }) {
  return (
    <div>
      <Button
        className="sqr-btn"
        variant="contained"
        size="small"
        children={text}
        onClick={onClick}
    />
    </div>
  )
}
