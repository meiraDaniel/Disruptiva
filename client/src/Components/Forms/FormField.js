import React from "react";

import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import colors from "../../global.scss";

const FormField = ({
  classField = "input",
  label,
  nameId,
  register,
  errors,
  ...props
}) => {
  const classes = useStyles();

  return (
    <div className={classes[classField]}>
      <Typography variant="body2" className={classes.inputLabel}>
        {label}
      </Typography>
      <TextField
        name={nameId}
        variant="outlined"
        error={errors ? true : false}
        inputRef={register}
        className={classes.inputField}
        fullWidth
        InputProps={{
          classes: {
            input: classes.resize,
          },
        }}
        {...props}
      />
      {errors && <p className={classes.errorText}>{errors.message}</p>}
    </div>
  );
};

const useStyles = makeStyles({
  gridField: {
    display: "flex",
    flexDirection: "column",
    width: "45%",
    position: "relative",
  },

  inputLabel: {
    color: colors.branco,
    fontWeight: "bold",
    marginBottom: "1%",
  },

  inputField: {
    backgroundColor: "#FEF5F5",
    borderRadius: 4,
  },

  errorText: {
    color: colors.error,
    position: "absolute",
    bottom: -18,
    margin: "0",
  },

  input: {
    marginBottom: "10%",
    position: "relative",
    width: "100%",
  },
  resize: {
    fontSize: "1rem",
    lineHeight: "1.5rem",
  },
});

export default FormField;
