import React from 'react'

export default function Title ({ text, id }) {
  return (
    <div id={id}>
      <span>{text}</span>
    </div>
  )
}
