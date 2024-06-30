import React from 'react'

const Btn = (props) => {
  return (
    <button className={props.className} onClick={props.funcion}>
      Page {props.text}
    </button>
  )
}

export default Btn
