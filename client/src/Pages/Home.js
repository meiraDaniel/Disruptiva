import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./Home.scss";

//images 
import camera from "../Images/Icons/camera.svg";
import price from "../Images/Icons/price.svg";
import cameraPhoto from "../Images/ANEXO1.png";
import Ariane from "../Images/FOTO_SITE.png";

import Navegation from "../Components/Navegation/Navegation";
import Hero from "../Components/Hero/Hero";
import Logo from "../Components/Logos/Logos";
import Card from "../Components/Card/Card";
import ContactForm from "../Components/Forms/ContactForm";

import useInterval from "react-useinterval";
import Presentation from "../Components/Presentation/Presentation";
import PresentationQuemEscreve from "../Components/Presentation/PresentationQuemEscreve";
import { text, text2 } from "./services";
import Portfolio from "../Components/Portfolio/Portfolio";
import Icons from "../Components/Icons/Icons";
import Footer from "../Components/Footer/Footer";
import ShowFormProvider from "../Context/ShowForm";
import ArticleCard from '../Components/Article/ArticleCard';
import { Container } from '@material-ui/core/Container';

const useStyles = makeStyles({
  marginPresentation: {
    height: "120vh",
    marginTop: "5%",

    "@media (min-width:600px) and (orientation:landscape) and (max-width:900px)": {
      height: "60vh"
    },

    "@media (width:1024px) and (height:1366px)": {
      height: "30vh",
    },
    "@media (min-width:1020px)": {
      height: "75vh",
      marginTop: "0%",

    },
    "@media (min-width:1300px)": {
      height: "90vh",
      marginTop: "1%",

    }
  },
  portfolio: {

    background: "#F3D549",
    height: "120vh",
    width: "100%",
    margin: "3% 0 5% 0",
    "@media (width:568px) and (height:320px)": {
      height: "150vh",
    },
    "@media (min-width:600px) and (max-width:900px) and (orientation:landscape)": {
      margin: "3% 0 30% 0",

    },
    "@media (min-width:600px) and (max-width:900px) and (orientation:portrait)": {
      margin: "3% 0 20% 0",
    },
    "@media (min-width:901px) and (max-width:1030px)": {
      margin: "3% 0 20% 0",

    },
    "@media (width:1024px) and (height:1366px)": {
      margin: "3% 0 5% 0",

    },
    "@media (min-width:1031px)": {
      margin: "3% 0 20% 0",


    }
  },
  cards: {
    height: "60vh",
    margin: "10% 0 0 0",
    "@media (max-width:568px) and (max-height:320px)": {
      height: "100vh",
      margin: "10% 0 0 0",
    },
  },
  articles: {
    minHeight: '60vh',
    margin: "5% 0% 5% 0%",
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
  borderTitle: {
    borderLeft: "3px solid #cf1552",
    paddingLeft: "3%",
  },
});

export default function Home({ articles }) {
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
        className={classes.cards}
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
        className={classes.portfolio}
      >
        <Portfolio />
      </Grid>
      <Grid container alignItems="center" className={classes.marginPresentation}>
        <Grid id="quemsomos" item style={{ height: "90%" }}>
          <Presentation
            title="Quem somos?"
            photo={cameraPhoto}
          />
        </Grid>
      </Grid>
      <Grid container justify="center" spacing={2} className={classes.articles}
      >
        <Grid
          item xs={9}>
          <Typography
            variant="h4"
            color="primary"
            className={classes.borderTitle}
          >
            Blog Post
        </Typography>
        </Grid>
        <Grid container spacing={4} justify='center' alignItems='center'  >

          {articles.map(({ link, thumbnail, title }, index) =>
            <Grid
              item
              xs={8}
              sm={5}
              lg={3}

              key={index}
            >
              <ArticleCard
                link={link}
                thumbnail={thumbnail}
                title={title}

              />
            </Grid>
          )}
        </Grid>

      </Grid>
      <Grid container alignItems="center" className={classes.marginPresentation}>
        <Grid
          id="quemescreve"
          style={{ height: "90%" }}
        >
          <PresentationQuemEscreve
            title="Quem faz?"
            text="Jornalista com pós-graduação em Marketing Digital e Relações Internacionais. Trabalhou na assessoria de comunicação da Prefeitura de Belo Horizonte e Câmera de Negócios Nigeria-Brazil. Durante 8 anos na TV UFMG, passou por diversas áreas dos setores de edição e redação. Também foi responsável pela criação do Centro de Documentação do canal, compartilhando esses conhecimentos em fóruns nacionais e internacionais.
            Recentemente, foi responsável pelo setor de marketing e comunicação da Associação Brasileira de Preservação Audiovisual e de empresas belo-horizontinas como Samtek e Instituto Embelleze."

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
    </Grid >
  );
}
