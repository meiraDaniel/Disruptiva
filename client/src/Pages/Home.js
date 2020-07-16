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
import{text,text2} from "./services"
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
    margin: "20% 0 3% 0",
    "@media (min-width:600px) and (max-width:900px) and (orientation:landscape)": {
      margin: "30% 0 3% 0",
    },
    "@media (min-width:600px) and (max-width:900px) and (orientation:portrait)": {
      margin: "20% 0 3% 0",
    },
    "@media (min-width:900px)": {
      margin: "15% 0 3% 0",
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
  footer:{
    background: "#f3d549",
     height: "50vh", 
     overflow: "hidden",
     "@media (min-width:600px) and (max-width:901px)": {
      height: "80vh", 
 
    },
      "@media (min-width:901px)": {
        height: "60vh", 
       
      },
  }

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
        <Grid item xs={12} style={{ height: "13%", position: "absolute" }}>
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
            title="Consultoria"
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
            title="Produção"
            text={text2[currentInd]}
            icon={price}
            currentInd={currentInd}
          />
        </Grid>
      </Grid>
      <Grid container style={{ overflow: "hidden" }}>
        <Grid
          id="quemescreve"
          item
          style={{ height: "75vh", margin: "3% 0 3% 0" }}
        >
          <Presentation
            title="Quem escreve?"
            text="Meu nome é Ariane Gervásio. Sou jornalista com pós-graduação em Marketing Digital e Relações Internacionais. Já atuei na área administrativa, assessoria de comunicação, internacional e no marketing de empresas como Instituto Embelleze e Samtek. Durante 8 anos trabalhei em televisão nos setores de produção, reportagem, edição de imagens, coordenação de programa e CEDOC – fui responsável pela criação do arquivo audiovisual da emissora. A Disruptiva é um sonho que se tornou realidade com duas coisas que eu amo: marketing e vídeo. Não faço isso sozinha, mas com finalistas, editores, cinegrafistas e roteiristas parceiros.
            "
            photo={Ariane}
          />
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
        <Grid
          id="quemsomos"
          item
          className={classes.marginPresentation}
          style={{ height: "75vh" }}
        >
          <Presentation
            title="Quem somos?"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo in nibh faucibus purus id sit tortor arcu eu. Quam sed in sed sit in feugiat risus non porta. Nibh nulla at cras in phasellus tincidunt euismod sit. Viverra in sit vestibulum, justo mauris id ultricies proin massa.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo in nibh faucibus purus id sit tortor arcu eu. Quam sed in sed sit in feugiat risus non porta. Nibh nulla at cras in phasellus tincidunt euismod sit. Viverra in sit vestibulum, justo mauris id ultricies proin massa."
            photo={cameraPhoto}
          />
        </Grid>
      </Grid>

      <ShowFormProvider>
        <Icons />
        <ContactForm />
      </ShowFormProvider>
      <Grid
        container
        className={classes.footer}
      >
        <Footer />
      </Grid>
    </Grid>
  );
}
