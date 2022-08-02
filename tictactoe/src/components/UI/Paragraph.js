import React from 'react'

const Paragraph = (props) => {
  return (
    <p className={props.classes}>{props.children}</p>
  )
}

export default Paragraph