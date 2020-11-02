import React from "react";
import "./Presentation.scss";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  borderTitle: {
    borderLeft: "3px solid #cf1552",
    paddingLeft: "3%",
  },
});
export default function Presentation({ title, text, photo, id }) {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={2}
      justify="center"
      style={{ height: "100%" }}
    >
      <Grid item xs={10} sm={10} md={5} lg={5} className="text-presentation">
        <Typography
          variant="h4"
          color="primary"
          className={classes.borderTitle}
        >
          {title}
        </Typography>
        <Typography variant="body2">
          A Disruptiva nasceu em janeiro de 2018 e atua em três grandes áreas
          de áudio e vídeo:
                {" "}
             Consultoria,

                {" "}
              Produção Audiovisual,

                {" "}
               Cursos e treinamentos.
               </Typography>

        <Typography variant="body2">
          Acreditamos numa cadeia audiovisual mais sustentável e
          descomplicada, por isso somos DISRUPTIVOS. Criamos histórias com
          personalidade, de forma SIMPLES e horizontal. Sobretudo, acreditamos
          na INTUIÇÃO para criação de conexões sinceras e criativas.
          </Typography>
      </Grid>
      <Grid item xs={10} sm={10} md={5} lg={5} className="image-presentation">
        <img src={photo} alt="team" />
      </Grid>
    </Grid>
  );
}
