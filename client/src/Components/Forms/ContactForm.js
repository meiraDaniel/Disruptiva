import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";

import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import colors from "../../global.scss";
import schemas from "../../Helpers/schemasYup";

import FormField from "./FormField";

function ContactForm() {
  const { register, handleSubmit, control, errors } = useForm({
    resolver: yupResolver(schemas.contactSchema),
  });

  const classes = useStyles();

  return (
    <Container component="main" className={classes.container}>
      <Typography component="h1" variant="h4" className={classes.title}>
        Contato
      </Typography>
      <form
        onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}
        className={classes.form}
      >
        <div className={classes.grid}>
          <FormField
            nameId="name"
            label="Nome"
            register={register}
            classField="gridField"
            errors={errors.name}
          />
          <FormField
            nameId="phone"
            label="Telefone"
            register={register}
            classField="gridField"
            errors={errors.phone}
          />
        </div>
        <FormField
          nameId="email"
          label="Email"
          register={register}
          errors={errors.email}
        />
        <FormField
          nameId="textMessage"
          label="Mensagem"
          register={register}
          errors={errors.textMessage}
          multiline={true}
          rows={8}
        />

        <div className={classes.btnContainer}>
          <Button
            type="submit"
            variant="contained"
            size="large"
            className={classes.btn}
          >
            Enviar
          </Button>
        </div>
      </form>
    </Container>
  );
}

const useStyles = makeStyles({
  container: {
    backgroundColor: "#EFC249",
    width: "40%",
    position: "fixed",
    bottom: 0,
    right: "2%",
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    color: colors.branco,
    fontWeight: "bold",
    marginBottom: "5%",
  },
  form: {
    width: "90%",
  },

  grid: {
    display: "flex",
    justifyContent: "space-between",
    height: "100%",
    marginBottom: "10%",
  },
  btnContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: "5%",
  },
  btn: {
    backgroundColor: colors.rosa,
    color: colors.branco,
    width: "50%",
  },
});

export default ContactForm;
