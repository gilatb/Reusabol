import React from 'react'
import './Title.css';

export default function Title ({ text, id }) {
  return (
    <div id={id}>
      <span className="text-before-checkmark" >{text}</span>
    </div>
  )
}
