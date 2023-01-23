import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const formvalidationSchema = yup.object({
  email: yup
    .string()
    .min(6, "need to longer email 😄")
    .required("why no fill this email 😄"),
  password: yup
    .string()
    .min(8, "need to longer password 😄")
    .max(12, "too much longer 😄")
    .required("why not fill this password😄"),
});
export function BasicForm() {
  const { handleSubmit, handleBlur, values, touched, errors, handleChange } =
    useFormik({
      initialValues: {
        name: "",
        password: "",
      },

      validationSchema: formvalidationSchema,
      onSubmit: (e) => {
        console.log(e);
      },
    });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={values.email}
          type="email"
          placeholder="email"
          name="email"
          onBlur={handleBlur}
        />
        {touched.email && errors.email ? errors.email : null}
        <br></br>
        <input
          onChange={handleChange}
          value={values.password}
          placeholder="password"
          name="password"
          type="password"
          onBlur={handleBlur}
        />
        {touched.password && errors.password ? errors.password : null}
        <br></br>
        <button type="submit"> submit</button>
        {/* <div>
          error
          <pre>{JSON.stringify(errors)}</pre>
          touch
          <pre>{JSON.stringify(touched)}</pre>
        </div> */}
      </form>
    </>
  );
}
