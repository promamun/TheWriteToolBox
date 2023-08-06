import React from 'react'

function TextArea({Label}) {
  return (
    <>
    <textarea></textarea>
    <label>{Label}</label>
    <span className="focus-border" />
    </>
  )
}

export default TextArea;