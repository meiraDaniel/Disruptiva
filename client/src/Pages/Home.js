import React, { useState } from "react";
import Navegation from "../Components/Navegation/Navegation";
import Hero from "../Components/Hero/Hero";
import Logo from "../Components/Logos/Logos";
import Card from "../Components/Card/Card";
import camera from "../Images/Icons/camera.svg";
import price from "../Images/Icons/price.svg";
import useInterval from "react-useinterval";
import Presentation from "../Components/Presentation/Presentation";
import PresentationSecond from "../Components/Presentation/PresentationSecond";
import Portfolio from "../Components/Portfolio/Portfolio";
import cameraPhoto from "../Images/cameraPhoto.png";
import Ariane from "../Images/Ariane.png";
import Icons from "../Components/Icons/Icons";
import Footer from "../Components/Footer/Footer";
import "./Home.scss";

export default function Home() {
  const [currentInd, setCurrentInd] = useState(0);
  const text = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.",
  ];
  const nextSlide = () => {
    setCurrentInd((state) => (state + 1) % text.length);
  };
  useInterval(nextSlide, 5000);

  return (
    <div className="home-main">
      <Navegation />
      <Hero />
      <Logo />
      <Icons />

      <div className="home--cards">
        <Card
          title="Diferenciais"
          text={text[currentInd]}
          icon={camera}
          currentInd={currentInd}
        />
        <Card
          title="Serviços"
          text={text[currentInd]}
          icon={price}
          currentInd={currentInd}
        />
      </div>
      <PresentationSecond
        title="Quem escreve?"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo in nibh faucibus purus id sit tortor arcu eu. Quam sed in sed sit in feugiat risus non porta. Nibh nulla at cras in phasellus tincidunt euismod sit. Viverra in sit vestibulum, justo mauris id ultricies proin massa."
        photo={Ariane}
        id="quemescreve"
      />
            <Portfolio />

      <Presentation
        title="Quem somos?"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo in nibh faucibus purus id sit tortor arcu eu. Quam sed in sed sit in feugiat risus non porta. Nibh nulla at cras in phasellus tincidunt euismod sit. Viverra in sit vestibulum, justo mauris id ultricies proin massa."
        photo={cameraPhoto}
        id="quemsomos"
      />
     
      <Footer />
    </div>
  );
}
