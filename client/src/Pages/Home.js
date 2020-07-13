import React, { useState } from "react";
import Navegation from "../Components/Navegation/Navegation";
import Hero from "../Components/Hero/Hero";
import Logo from "../Components/Logos/Logos";
import Card from "../Components/Card/Card";
import ContactForm from "../Components/Forms/ContactForm";
import camera from "../Images/Icons/camera.svg";
import price from "../Images/Icons/price.svg";
import useInterval from "react-useinterval";
import Presentation from "../Components/Presentation/Presentation";
import PresentationSecond from "../Components/Presentation/PresentationSecond";
import Portfolio from "../Components/Portfolio/Portfolio";
import cameraPhoto from "../Images/rosinha2.png";
import Ariane from "../Images/Ariane.png";
import Icons from "../Components/Icons/Icons";
import Footer from "../Components/Footer/Footer";
import "./Home.scss";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ShowFormProvider from "../Context/ShowForm";

const useStyles = makeStyles({
  marginPresentation: {
    margin: "30% 0 3% 0",
    "@media (min-width:900px)": {
      margin: "10% 0 3% 0",
    },
  },
});

export default function Home() {
  const classes = useStyles();

  const [currentInd, setCurrentInd] = useState(0);
  const text = [
    "Lorem ipsum dolor sit amet.",
    "Lorem ipsum dolor sit amet.",
    "Lorem ipsum dolor sit amet.",
  ];
  const nextSlide = () => {
    setCurrentInd((state) => (state + 1) % text.length);
  };
  useInterval(nextSlide, 5000);

  return (
    <Grid container>
      <Grid container style={{ height: "100vh" }}>
        <Grid item xs={12} style={{ height: "10%", position: "absolute" }}>
          <Navegation />
        </Grid>
        <Hero />
        <Grid item xs={12} style={{ height: "20%" }}>
          <Logo />
        </Grid>
      </Grid>

      <Grid
        container
        spacing={2}
        justify="center"
        style={{
          height: "60vh",
          overflow: "hidden",
          margin: "10% 0 0 0",
        }}
      >
        <Grid
          item
          xs={11}
          sm={6}
          md={6}
          lg={5}
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Card
            title="Diferenciais"
            text={text[currentInd]}
            icon={camera}
            currentInd={currentInd}
          />
        </Grid>
        <Grid
          item
          xs={11}
          sm={6}
          md={6}
          lg={5}
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Card
            title="Serviços"
            text={text[currentInd]}
            icon={price}
            currentInd={currentInd}
          />
        </Grid>
      </Grid>
      <Grid container style={{ overflow: "hidden" }}>
        <Grid item style={{ height: "75vh", margin: "3% 0 3% 0" }}>
          <Presentation
            title="Quem escreve?"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo in nibh faucibus purus id sit tortor arcu eu. Quam sed in sed sit in feugiat risus non porta. Nibh nulla at cras in phasellus tincidunt euismod sit. Viverra in sit vestibulum, justo mauris id ultricies proin massa.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo in nibh faucibus purus id sit tortor arcu eu. Quam sed in sed sit in feugiat risus non porta. Nibh nulla at cras in phasellus tincidunt euismod sit. Viverra in sit vestibulum, justo mauris id ultricies proin massa."
            photo={Ariane}
            id="quemescreve"
          />
        </Grid>
        <Grid
          item
          style={{
            background: "#F3D549",
            height: "120vh",
            width: "100%",
            margin: "3% 0 3% 0",
          }}
        >
          <Portfolio />
        </Grid>
        <Grid
          item
          className={classes.marginPresentation}
          style={{ height: "75vh" }}
        >
          <Presentation
            title="Quem somos?"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo in nibh faucibus purus id sit tortor arcu eu. Quam sed in sed sit in feugiat risus non porta. Nibh nulla at cras in phasellus tincidunt euismod sit. Viverra in sit vestibulum, justo mauris id ultricies proin massa.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo in nibh faucibus purus id sit tortor arcu eu. Quam sed in sed sit in feugiat risus non porta. Nibh nulla at cras in phasellus tincidunt euismod sit. Viverra in sit vestibulum, justo mauris id ultricies proin massa."
            photo={cameraPhoto}
            id="quemsomos"
          />
        </Grid>
      </Grid>

      <ShowFormProvider>
        <Icons />
        <ContactForm />
      </ShowFormProvider>
      <Grid container style={{background:"#f3d549", height:"80vh"}} >
        <Footer />
      </Grid>
    </Grid>
  );
}
