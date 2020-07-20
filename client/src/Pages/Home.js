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
import PresentationQuemEscreve from "../Components/Presentation/PresentationQuemEscreve";

import { text, text2 } from "./services";
import Portfolio from "../Components/Portfolio/Portfolio";
import cameraPhoto from "../Images/ANEXO1.png";
import Ariane from "../Images/FOTO_SITE.png";
import Icons from "../Components/Icons/Icons";
import Footer from "../Components/Footer/Footer";
import "./Home.scss";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ShowFormProvider from "../Context/ShowForm";

const useStyles = makeStyles({
  marginPresentation: {
    height: "90vh",
    margin: "20% 5% 3% 5% ",
    "@media (min-width:600px) and (max-width:900px) and (orientation:landscape)": {
      margin: "30% 5%  3% 5% ",
    },
    "@media (min-width:600px) and (max-width:900px) and (orientation:portrait)": {
      margin: "20% 5%  0% 5% ",
    },
    "@media (min-width:900px)": {
      margin: "15% 5%  3% 5% ",
    },
  },
  logos: {
    height: "50vh",
    display: "block",
    position: "absolute",
    top: "90%",
    overflow: "hidden",
    marginBottom: "15%",
  },
  footer: {
    background: "#f3d549",
    height: "50vh",
    overflow: "hidden",
    "@media (min-width:600px) and (max-width:901px)": {
      height: "50vh",
    },
    "@media (min-width:901px)": {
      height: "60vh",
    },
  },
  navegation: {
    height: "10%",
    position: "absolute",
    "@media (min-width:450px) and (max-width:599px)": {
      height: "15%",
    },
    "@media (min-width:600px) and (max-width:901px)": {
      height: "11%",
    },
    "@media (min-width:901px)": {
      height: "13%",
    },
  },
});

export default function Home() {
  const classes = useStyles();
  const [currentInd, setCurrentInd] = useState(0);
 
 
  const nextSlide = () => {
    setCurrentInd((state) => (state + 1) % text.length);
  };
  useInterval(nextSlide, 4000);

  return (
    <Grid container>
      <Grid container style={{ height: "100vh" }}>
        <Grid item xs={12} className={classes.navegation}>
          <Navegation />
        </Grid>
        <Hero />
        <Grid item xs={12} className={classes.logos}>
          <Logo />
        </Grid>
      </Grid>

      <Grid
        container
        spacing={3}
        justify="center"
        style={{
          height: "60vh",
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
            title="PRODUÇÃO"
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
            title="CURSOS"
            text={text2[currentInd]}
            icon={price}
            currentInd={currentInd}
          />
        </Grid>
      </Grid>
      <Grid
        id="portfolio"
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

      <Grid id="quemsomos" item className={classes.marginPresentation}>
        <Presentation
          title="Quem somos?"
          photo={cameraPhoto}
        />
      </Grid>
      <div className="section--orange"></div>
      <Grid container style={{ overflow: "hidden" }}>
        <Grid
          id="quemescreve"
          item
          style={{ height: "90vh", margin: "3% 5% 3% 5%" }}
        >
          <PresentationQuemEscreve
            title="Quem faz?"
            text="Ariane Gervásio é jornalista com pós-graduação em Marketing Digital e Relações Internacionais. Trabalhou na assessoria de comunicação da Prefeitura de Belo Horizonte e Câmera de Negócios Nigeria-Brazil. Durante 8 anos na TV UFMG, passou por diversas áreas dos setores de edição e redação. Também foi responsável pela criação do Centro de Documentação do canal, compartilhando esses conhecimentos em fóruns nacionais e internacionais.
            Recentemente, foi responsável pelo setor de marketing e comunicação da Associação Brasileira de Preservação Audiovisual e de empresas belo-horiozntinas como Samtek e Instituto Embelleze.
            A Disruptiva é um sonho que se tornou realidade unindo MARKETING e VÍDEO, além de um grupo de roteiristas, cinegrafistas e editores parceiros."
            photo={Ariane}
          />
        </Grid>
      </Grid>

      <ShowFormProvider>
        <Icons />
        <ContactForm />
      </ShowFormProvider>
      <Grid container className={classes.footer}>
        <Footer />
      </Grid>
    </Grid>
  );
}
