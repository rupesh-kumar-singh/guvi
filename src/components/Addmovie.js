import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import * as yup from "yup";

const formvalidationSchema = yup.object({
  name: yup
    .string()
    .min(6, "need to longer name 😄")
    .required("why no fill this  😄"),
  poster: yup
    .string()

    .required("why not fill this password😄"),
  rating: yup.number().min(0).max(10).required("why not fill this 😄"),
  summary: yup
    .string()
    .min(20, "need to longer summary 😄")

    .required("why not fill this state😄"),
  trailer: yup.string().min(5).required("why not fill this state😄"),
});

const Addmovie = () => {
  const { handleSubmit, handleBlur, values, touched, errors, handleChange } =
    useFormik({
      initialValues: {
        name: "",
        poster: "",
        rating: "",
        summary: "",
        trailer: "",
      },

      validationSchema: formvalidationSchema,
      onSubmit: (newmovie) => {
        console.log(newmovie);
        outputdata(newmovie);
      },
    });
  const navigate = useNavigate();

  const outputdata = (newmovie) => {
    fetch(`https://6364a4ce8a3337d9a2fb22b2.mockapi.io/posts`, {
      method: "POST",
      body: JSON.stringify(newmovie),
      headers: { "Content-Type": "application/json" },
    }).then(() => navigate(`/movies`));
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit} className="input_field">
          <TextField
            required
            value={values.name}
            name="name"
            className="text"
            label="Name"
            variant="outlined"
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.name && errors.name ? true : false}
            helperText={touched.name && errors.name ? errors.name : null}
          />

          <TextField
            required
            value={values.poster}
            name="poster"
            className="text"
            label="poster"
            variant="outlined"
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.poster && errors.poster ? true : false}
            helperText={touched.poster && errors.poster ? errors.poster : null}
          />

          <TextField
            required
            value={values.rating}
            name="rating"
            className="text"
            label="rating"
            variant="outlined"
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.rating && errors.rating ? true : false}
            helperText={touched.rating && errors.rating ? errors.rating : null}
          />

          <TextField
            required
            value={values.summary}
            name="summary"
            className="text"
            label="summary"
            variant="outlined"
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.summary && errors.summary ? true : false}
            helperText={
              touched.summary && errors.summary ? errors.summary : null
            }
          />

          <TextField
            required
            value={values.trailer}
            name="trailer"
            className="text"
            label="trailer"
            variant="outlined"
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.trailer && errors.trailer ? true : false}
            helperText={
              touched.trailer && errors.trailer ? errors.trailer : null
            }
          />

          <Button type="submit" className="text" variant="contained">
            Add movie
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Addmovie;
