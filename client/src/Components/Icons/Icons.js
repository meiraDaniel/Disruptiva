import React from 'react'
import "./Icons.scss"
import whatsapp from '../../Images/Icons/whatsapp.svg'
import message from '../../Images/Icons/message.svg'

export default function Icons(){
    return(
        <div className="icons-main">
 <a href="https://api.whatsapp.com/send?phone=5531997139306"><img src={whatsapp} alt="whatsapp"/></a> 
<img src={message} alt="message"/>

        </div>
    )
}