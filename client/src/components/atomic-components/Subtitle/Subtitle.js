import React from 'react';
import './Subtitle.css';

export default function Subtitle ({ text }) {
  return (
    <div className="subtitle">
      <span>{text}</span>
    </div>
  )
}
