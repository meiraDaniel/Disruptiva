import React from 'react'
import "./Icons.scss"
import whatsapp from '../../Images/Icons/whatsapp.svg'
import message from '../../Images/Icons/message.svg'

export default function Icons(){
    return(
        <div className="icons-main">
<img src={whatsapp} alt="whatsapp"/>
<img src={message} alt="message"/>

        </div>
    )
}