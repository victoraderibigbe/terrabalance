"use client";

import { validateLogin } from "@/utils/validationSchema";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Link from "next/link";
import { useState } from "react";

const initialValues = {
  email: "",
  password: "",
};

const handleSubmit = (values) => {
  console.log(values);
};

const LoginForm = () => {
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validateLogin}
      onSubmit={handleSubmit}
    >
      {({ handleChange, handleBlur, touched, errors }) => (
        <Form>
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

          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <input
                id="rememberMe"
                type="checkbox"
                className="check-box"
                name="rememberMe"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <label htmlFor="rememberMe" className="check-label">
                Remember me
              </label>
            </div>
            <div>
              <Link href="#">Forgot Password?</Link>
            </div>
          </div>

          <div className="mb-5">
            <button type="submit" className="form-btn">
              Login to my account
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
