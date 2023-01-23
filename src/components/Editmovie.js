import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
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

const Editmovie = () => {
  const [movie, setmovie] = useState(null);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetch(`https://6364a4ce8a3337d9a2fb22b2.mockapi.io/posts/${id}`)
      .then((out) => out.json())
      .then((res) => setmovie(res));
  }, [id]);

  //   console.log(movie);
  //   console.log(movie.name);
  return movie ? <Editmovieform movie={movie} id={id} /> : <h2>loading....</h2>;
};

function Editmovieform({ movie, id }) {
  const navigate = useNavigate();
  const { handleSubmit, handleBlur, values, touched, errors, handleChange } =
    useFormik({
      initialValues: {
        name: movie.name,
        poster: movie.poster,
        rating: movie.rating,
        summary: movie.summary,
        trailer: movie.trailer,
      },

      validationSchema: formvalidationSchema,
      onSubmit: (newmovie) => {
        console.log(newmovie);
        outputdata(newmovie);
      },
    });

  const outputdata = (newmovie) => {
    fetch(`https://6364a4ce8a3337d9a2fb22b2.mockapi.io/posts/${id}`, {
      method: "PUT",
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
            Edit movie
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Editmovie;
