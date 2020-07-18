import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import { CSSTransition } from "react-transition-group";

import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import "./Form.scss";
import colors from "../../global.scss";
import schemas from "../../Helpers/schemasYup";

import FormField from "./FormField";
import { useShowForm } from "../../Context/ShowForm";
import api from "../../Services/api";

function ContactForm() {
  const { register, handleSubmit, control, errors } = useForm({
    resolver: yupResolver(schemas.contactSchema),
  });

  const { showForm, setShowForm } = useShowForm();
  const windowHeight = window.innerHeight;

  const node = useRef();
  const classes = useStyles();

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
  }, []);

  const handleFormSubmit = async (data) => {
    await api.sendMail(data);
    setShowForm(false);
  };

  const handleOutsideClick = (e) => {
    node.current.contains(e.target) && setShowForm(false);
  };

  return (
    <>
      <div
        ref={node}
        className="disable-background"
        style={showForm ? { display: "block" } : { display: "none" }}
      />
      <CSSTransition
        in={showForm}
        timeout={1000}
        classNames="open-form"
        unmountOnExit
      >
        <Container maxWidth="xs" component="main" className={classes.container}>
          <Typography component="h1" variant="h4" className={classes.title}>
            Contato
          </Typography>
          <form
            onSubmit={handleSubmit(handleFormSubmit)}
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
              rows={5}
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
      </CSSTransition>
    </>
  );
}

const useStyles = makeStyles({
  container: {
    backgroundColor: "#EFC249",
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
    "&:hover ": {
      backgroundColor: colors.rosa,
    },
  },
  "@media (orientation:landscape) and (max-height: 600px)": {
    container: {
      height: "90%",
      overflowX: "hidden",
      overflowY: "auto",
    },
  },
});

export default ContactForm;
