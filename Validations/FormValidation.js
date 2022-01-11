import * as yup from 'yup';

export const formSchema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    phone: yup.string().required(),
    email:yup.string().email().required(),
    message:yup.string().required()
  });
