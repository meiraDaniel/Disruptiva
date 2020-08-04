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
      alignItems="flex-start"
      style={{ height: "100%" }}
    >
      <Grid item xs={10} sm={8} lg={5}   className="text-presentation-quemSomos">
        <Grid item xs={12} sm={12} className="title-presentation">
          <Typography
            variant="h4"
            color="primary"
            className={classes.borderTitle}
          >
            {title}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} className="subtitle-presentation">
          <Typography variant="body2">
            A Disruptiva nasceu em janeiro de 2018 e atua em três grandes áreas
            de áudio e vídeo:
          
          <ul >
            <li>
              {" "}
             Consultoria
            </li>
            <li>
              {" "}
              Produção Audiovisual
            </li>
            <li>
              {" "}
               Cursos e treinamentos
            </li>
          </ul>

            Acreditamos numa cadeia audiovisual mais sustentável e
            descomplicada, por isso somos DISRUPTIVOS. Criamos histórias com
            personalidade, de forma SIMPLES e horizontal. Sobretudo, acreditamos
            na INTUIÇÃO para criação de conexões sinceras e criativas.
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={8} sm={4} lg={4} className="image-presentation">
        <img src={photo} alt="team" />
      </Grid>
    </Grid>
  );
}
