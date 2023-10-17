"user client"

import React , { Fragment } from "react"
import ReactDOM from 'react-dom'
import Card from "./Card"
import { useModalContext } from "../../context/modal-context"
import styles from './modal.module.css'



const Modal = ({className, children}) => {
    const {showModal, closeModalHandler} = useModalContext();
    const [domReady, setDomReady] = React.useState(false)

    React.useEffect(() => {
      setDomReady(true)
    }, [])
  return (
    <Fragment>
        {
          (showModal && domReady ) && ReactDOM.createPortal(<>
              <section id="backdrop" className={styles.backdrop} onClick={closeModalHandler}></section>
              <Card className={`${className} `}>{children}</Card>
              </>, document.querySelector('#overlays'))
        }
    </Fragment>
  )
}

export default Modal