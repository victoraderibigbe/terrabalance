"use client";

import { validateRegister } from "@/utils/validationSchema";
import { ErrorMessage, Field, Form, Formik } from "formik";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};
const RegisterForm = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validateRegister}
      onSubmit={handleSubmit}
    >
      {({ handleChange, handleBlur, touched, errors }) => (
        <Form>
          <div className="mb-5">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <Field
              type="text"
              placeholder="John"
              className={`${
                touched.firstName && errors.firstName
                  ? "form-input invalid"
                  : "form-input valid"
              }`}
              name="firstName"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <ErrorMessage
              name="firstName"
              component="small"
              className="text-red-500"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <Field
              type="text"
              placeholder="Doe"
              className={`${
                touched.lastName && errors.lastName
                  ? "form-input invalid"
                  : "form-input valid"
              }`}
              name="lastName"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <ErrorMessage
              name="lastName"
              component="small"
              className="text-red-500"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <Field
              type="text"
              placeholder="example@gmail.com"
              className={`${
                touched.email && errors.email
                  ? "form-input invalid"
                  : "form-input valid"
              }`}
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <ErrorMessage
              name="email"
              component="small"
              className="text-red-500"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <Field
              type="password"
              placeholder="Min of 8 characters"
              className={`${
                touched.password && errors.password
                  ? "form-input invalid"
                  : "form-input valid"
              }`}
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <ErrorMessage
              name="password"
              component="small"
              className="text-red-500"
            />
          </div>

          <div className="mb-5">
            <button type="submit" className="form-btn">
              Create my account
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
