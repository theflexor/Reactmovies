import React from 'react'
import './button.scss'

const Button = () => {
     return (
          <button
               className={` btn ${props.className}`}
               onClick={props.onClick ? () => props.onClick() : null}>
               {props.children}
          </button>
     )
}

const OutlineButton = props => {
     return (
          <Button
               className={` btn-outline ${props.className}`}
               onClick={props.onClick ? () => props.onClick() : null}>
                    {props.children}
          </Button>
     )
}

export default Button