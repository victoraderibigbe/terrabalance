"use client";

import { toggleAddressForm } from "@/store/drawerSlice";
import { validateAddress } from "@/utils/validationSchema";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";

const initialValues = {
  country: "",
  state: "",
  city: "",
  street: "",
  zipCode: "",
};

const AddressForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    let addresses = [];

    if (localStorage["addresses"]) {
      addresses = JSON.parse(localStorage["addresses"]);
      addresses.push(values);
      localStorage.setItem("addresses", JSON.stringify(addresses));
      dispatch(toggleAddressForm());
      return;
    }

    addresses.push(values);
    localStorage.setItem("addresses", JSON.stringify(addresses));
    dispatch(toggleAddressForm());
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validateAddress}
      onSubmit={handleSubmit}
    >
      {({ handleChange, handleBlur, touched, errors }) => (
        <Form>
          <div className="mb-3">
            <label htmlFor="country" className="form-label">
              Country
            </label>
            <Field
              type="text"
              placeholder="Nigeria"
              name="country"
              onChange={handleChange}
              onBlur={handleBlur}
              className={`${
                touched.country && errors.country
                  ? "form-input invalid"
                  : "form-input valid"
              }`}
            />
            <ErrorMessage
              name="country"
              component="small"
              className="text-red-500"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="state" className="form-label">
              State
            </label>
            <Field
              type="text"
              placeholder="Oyo"
              name="state"
              onChange={handleChange}
              onBlur={handleBlur}
              className={`${
                touched.state && errors.state
                  ? "form-input invalid"
                  : "form-input valid"
              }`}
            />
            <ErrorMessage
              name="state"
              component="small"
              className="text-red-500"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="city" className="form-label">
              city
            </label>
            <Field
              type="text"
              placeholder="Ogbomoso"
              name="city"
              onChange={handleChange}
              onBlur={handleBlur}
              className={`${
                touched.city && errors.city
                  ? "form-input invalid"
                  : "form-input valid"
              }`}
            />
            <ErrorMessage
              name="city"
              component="small"
              className="text-red-500"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="street" className="form-label">
              Street
            </label>
            <Field
              type="text"
              placeholder="South Africa Street"
              name="street"
              onChange={handleChange}
              onBlur={handleBlur}
              className={`${
                touched.street && errors.street
                  ? "form-input invalid"
                  : "form-input valid"
              }`}
            />
            <ErrorMessage
              name="street"
              component="small"
              className="text-red-500"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="zipCode" className="form-label">
              Zip Code
            </label>
            <Field
              type="text"
              placeholder="Max of 5 digits"
              name="zipCode"
              onChange={handleChange}
              onBlur={handleBlur}
              className={`${
                touched.zipCode && errors.zipCode
                  ? "form-input invalid"
                  : "form-input valid"
              }`}
            />
            <ErrorMessage
              name="zipCode"
              component="small"
              className="text-red-500"
            />
          </div>

          <button type="submit" className="form-btn">
            Add Address
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default AddressForm;
