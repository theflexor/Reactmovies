import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import './modal.scss'
const Modal = props => {

     const [active, setActive] = useState(falsex)

     useEffect(() => {
          setActive(props.active)
     }, [props.active])

     return (
          <div id={props.id} className={`modal ${active ? 'active' : ''}`}>
               {props.chilred}
          </div>
     )
}

Modal.propTypes = {
     active: PropTypes.bool,
     id: PropTypes.string
}

export const ModalContent = props => {
     const contentRef = useRef(null)

     const closeModal = () => {
          contentRef.current.parentNode.classList.remove('active')
          if (props.onClose) props.onClose()

     }
     return (
          <div className='modal__content'>
               {props.children}
               <div className='modal__content__close' onClick={closeModal}></div>
               <i className='bx bx-x'></i>
          </div>
     )
}

ModalContent.propTypes = {
     onClose: PropTypes.func
}

export default Modal