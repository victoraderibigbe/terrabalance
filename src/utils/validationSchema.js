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

export const validateContact = Yup.object({
  fullName: Yup.string()
    .min(2, "Full Name must be at least 2 characters long")
    .max(50, "Full Name must be 50 characters or less")
    .required("Full Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  message: Yup.string()
    .min(10, "Message must be at least 10 characters long")
    .required("Message is required"),
});

export const validateAddress = Yup.object({
  country: Yup.string().required("Country is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  street: Yup.string().required("Street is required"),
  zipCode: Yup.string()
    .required("Zip Code is required")
    .matches(/^[0-9]{6}$/, "Zip Code must be 6 digits long"),
});
