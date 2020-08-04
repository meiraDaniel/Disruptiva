import React from 'react'
import "./Loading.scss"

function Loading() {
    return (
        <div className="main-loading">
      <svg   width="70%" viewBox="0 0 100 100" >
            <circle 
           cx="50" cy="50" r="47" stroke="white" fill="transparent"/>
        </svg>
        <div className="dot">
            <span></span>
            <span></span>
            <span></span>
        </div>
  
        </div>
    )
}

export default Loading