import React from 'react'

const Controls = props => {
  return (
    <div>
      <button
        name="bold"
        onClick={props.toggleElementStyle}
      >
        <i className="fas fa-bold" />
      </button>
      <button
        name="italic"
        onClick={props.toggleElementStyle}
      >
        <i className="fas fa-italic" />
      </button>
      <button
        name="align"
        value="left"
        onClick={props.customizeElement}
      >
        <i className="fas fa-align-left" />
      </button>
      <button
        name="align"
        value="center"
        onClick={props.customizeElement}
      >
        <i className="fas fa-align-center" />
      </button>
      <button
        name="align"
        value="right"
        onClick={props.customizeElement}
      >
        <i className="fas fa-align-right" />
      </button>
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
    </div>
  )
}

export default Controls;