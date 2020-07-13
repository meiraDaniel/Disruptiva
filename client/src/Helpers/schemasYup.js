import * as yup from "yup";

const contactSchema = yup.object().shape({
  name: yup.string().required("Digite um nome"),
  phone: yup.string(),
  email: yup
    .string()
    .email("Digite um email válido")
    .required("Digite um email"),
  textMessage: yup.string().required("Digite uma mensagem"),
});

export default {
  contactSchema,
};
