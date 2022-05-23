import React from 'react'

function AlarmButton(props) {

    let buttonStyle = {
        color: props.color,
        width: props.width,
        height: props.height
    }

  return (<>
  <span>Alarm: </span>
  <button style={buttonStyle}>Alarm!!</button>
  </>
  )
}

export default AlarmButton