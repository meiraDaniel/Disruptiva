import React from "react";
import linkedin from "../../Images/Icons/white/linkedin_white.svg";
import instagram from "../../Images/Icons/white/instagram_white.svg";
import youtube from "../../Images/Icons/white/youtube_white.svg";
import facebook from "../../Images/Icons/white/facebook_white.svg";
import logo from "../../Images/logo_branco.png";
import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footer-main">
      <div className="footer-top">
        <div className="footer-left-endereco">
          <h2 >Endereço</h2>
          <p>Rua Peçanha, 161,</p>
          <p>Bloco 11 Sala 202</p>
          <p>Carlos Prates</p>
          <p>Belo Horizonte</p>
          <p>Minas Gerais</p>
        </div>
        <div className="footer-center-conta">
          <h2>Contato</h2>
          <p>audiovisualdisruptiva@gmail.com</p>
          <p>31 997139306</p>
        </div>
        <div className="footer-right-img">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="footer-bottom">
        <a
          href="http://www.linkedin.com/company/disruptiva-audiovisual"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <img src={linkedin} alt="linkedin" />
        </a>
        <a
          href="http://www.instagram.com/disruptivaaudiovisual"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagram} alt="instagram" />
        </a>
        <a
          href="http://www.youtube.com/channel/UCevh_khIWxGnjhL1CMbdi7A?view_as=subscriber  "
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={youtube} alt="youtube" />
        </a>
        <a
          href="http://www.facebook.com/disruptivaaudiovisual"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <img src={facebook} alt="facebook" />
        </a>
      </div>
      <p id="copyrights">	 Copyright &#xA9; 2020 Lidas </p>
    </div>
  );
}
