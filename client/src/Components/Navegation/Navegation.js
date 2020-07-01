import React, {useState} from "react";
import logo from '../../Images/logo_color.png'
import "./Navegation.scss"

export default function Navegation() {
  const[ flag, set] = useState(false)

  return (
    <div className="navegation-main">
        <div className="navegation--left-logo">
            <img className="logo" src={logo} alt="disruptiva"/>

        </div>
      <ul className={!flag?"display_none":"navegation"}>
        <a onClick={()=> set(false)} href="#quemsomos">Quem somos</a>
        <a onClick={()=> set(false)} href="#quemescreve">Quem escreve</a>
        <a onClick={()=> set(false)} href="#quemescreve">Portfólio</a>
      </ul>
      <div onClick={()=> set(!flag)} className={!flag?"hamburguer--menu":"hamburguer--menu-close"}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
