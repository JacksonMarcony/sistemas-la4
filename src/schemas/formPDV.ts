import * as Yup from "yup";

export const formPdvSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Nome muito curto.")
    .max(50, "Limite de 50 caracteres.")
    .required('O Nome é obrigatório'),
  email: Yup.string().email("Email inválido").required('O Email é obrigatório.'),
  whatsapp: Yup.string()
    .min(2, "Preencha um número válido.")
    .max(12, "Preencha um número válido.")
    .required("O Whatsapp é obrigatório."),
    segment: Yup.string()
    .max(50, "Limite de 50 caracteres.")
    .required('O Segmento é obrigatório'),
});
