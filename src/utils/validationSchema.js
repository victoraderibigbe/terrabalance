import * as Yup from "yup";

export const validateLogin = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Enter a minimum of 8 characters"),
});

export const validateRegister = Yup.object({
  firstName: Yup.string().required("Field is required"),
  lastName: Yup.string().required("Field is required"),
  email: Yup.string().required("Field is required"),
  password: Yup.string()
    .required("Field is required")
    .min(8, "Enter a minimum of 8 characters"),
});
