import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// ✅ Validation schema using Yup
const validationSchema = Yup.object({
  username: Yup.string()
    .min(3, "Username must be at least 3 characters")
    .required("Username is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const FormikForm = () => {
  return (
    <div>
      <h2>Register (Formik Form)</h2>
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log("Form submitted:", values);
          setSubmitting(false);
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            {/* Username Field */}
            <div>
              <label>Username:</label>
              <Field type="text" name="username" placeholder="Enter username" />
              <ErrorMessage name="username" component="p" style={{ color: "red" }} />
            </div>

            {/* Email Field */}
            <div>
              <label>Email:</label>
              <Field type="email" name="email" placeholder="Enter email" />
              <ErrorMessage name="email" component="p" style={{ color: "red" }} />
            </div>

            {/* Password Field */}
            <div>
              <label>Password:</label>
              <Field type="password" name="password" placeholder="Enter password" />
              <ErrorMessage name="password" component="p" style={{ color: "red" }} />
            </div>

            {/* Submit Button */}
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Register"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;

