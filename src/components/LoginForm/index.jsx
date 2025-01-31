"use client";

import { loginUser } from "@/store/authSlice";
import { validateLogin } from "@/utils/validationSchema";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const initialValues = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { loading, error } = useSelector((state) => state.auth);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (values) => {
    try {
      const login = await dispatch(loginUser(values));

      if (!loginUser.fulfilled.match(login)) {
        toast.error(login.payload || "Something went wrong!");
        return;
      }

      toast.success("Login successful");
      router.push("/");
    } catch (error) {
      console.log(error);
      toast.error("Failed to create account");
    }
  };

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
            <button type="submit" className="form-btn" disabled={loading}>
              {loading ? "Logging in..." : "Login to my account"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
