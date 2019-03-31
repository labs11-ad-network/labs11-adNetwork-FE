import React from 'react'

const Controls = props => {
  return (
    <div>
      <input
        type="color"
        name="color"
        onChange={props.customizeElement}
      />
      <input
        type="color"
        name="bg_color"
        onChange={props.customizeElement}
      />
    </div>
  )
}

export default Controls;