import React from 'react'
import Button from '../UI/Button'
import Modal from '../UI/Modal'
import classes from './Menu.module.css'

const Menu = (props) => {
  return (
    <Modal>
        <div className={classes.container}>
            <p>{props.message}</p>
            <h3>{props.heading}</h3>
            <div className={classes.btnContainer}>
                <Button classes={classes.btnFirst}>QUIT</Button>
                <Button classes={classes.btnSecond}>NEXT ROUND</Button>
            </div>
        </div>
    </Modal>
  )
}

export default Menu