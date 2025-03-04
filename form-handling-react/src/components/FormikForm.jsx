import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Validation Schema using Yup
const validationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const FormikForm = () => {
  return (
    <div>
      <h2>Register (Formik Form)</h2>
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("Form submitted:", values);
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label>Username:</label>
              <Field type="text" name="username" />
              <ErrorMessage name="username" component="p" style={{ color: "red" }} />
            </div>

            <div>
              <label>Email:</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="p" style={{ color: "red" }} />
            </div>

            <div>
              <label>Password:</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="p" style={{ color: "red" }} />
            </div>

            <button type="submit" disabled={isSubmitting}>Register</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;
