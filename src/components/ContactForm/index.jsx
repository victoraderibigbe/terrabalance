"use client";

import { validateContact } from "@/utils/validationSchema";
import { Spinner } from "flowbite-react";
import { Field, Form, Formik } from "formik";
import { useState } from "react";

const initialValues = {
  fullName: "",
  email: "",
  message: "",
};

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (values, { resetForm }) => {
    setIsLoading(true);
    try {
      console.log(values);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validateContact}
      onSubmit={handleSubmit}
    >
      {({ handleChange, handleBlur, touched, errors }) => (
        <Form>
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">
              Full Name
            </label>
            <Field
              type="text"
              placeholder="Enter your full name"
              className={`${
                touched.fullName && errors.fullName
                  ? "contact-invalid"
                  : "contact-valid"
              }`}
              name="fullName"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <Field
              type="text"
              placeholder="Enter your email address"
              className={`${
                touched.email && errors.email
                  ? "contact-invalid"
                  : "contact-valid"
              }`}
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <Field
              as="textarea"
              type="text"
              placeholder="Enter your message"
              className={`${
                touched.message && errors.message
                  ? "text-area contact-invalid"
                  : "text-area contact-valid"
              }`}
              name="message"
              onChange={handleChange}
              onBlur={handleBlur}
              rows="6"
            />
          </div>
          <div>
            <button
              type="submit"
              className={`${
                isLoading
                  ? "form-btn-disabled"
                  : "w-full h-14 rounded-lg bg-white text-primaryBrown font-semibold"
              }`}
              disabled={isLoading}
            >
              {isLoading ? (
                <div>
                  <span>
                    <Spinner size={"sm"} />
                  </span>
                  <span className="ml-2">Submitting...</span>
                </div>
              ) : (
                <span>Send my message</span>
              )}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
