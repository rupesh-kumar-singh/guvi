import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import React, { useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Addmovie from "./components/Addmovie";
import { BasicForm } from "./components/BasicForm";
import { Addcolor } from "./components/Color";
import Editmovie from "./components/Editmovie";
import Home from "./components/Home";
import Moviedetail from "./components/Moviedetail";
import Movielist from "./components/Movielist";
import Pagenot from "./components/Pagenot";
function App() {
  const [theme, settheme] = useState("light");
  const [movielist, setmovielist] = useState([]);
  const darkTheme = createTheme({
    palette: {
      mode: theme,
    },
  });
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={darkTheme}>
      <Paper sx={{ minHeight: "100vh" }} elevation={6}>
        <div className="App">
          <AppBar position="static">
            <Toolbar>
              <Button color="inherit" onClick={() => navigate("/")}>
                Home
              </Button>
              <Button color="inherit" onClick={() => navigate("/movies")}>
                Movielist
              </Button>
              <Button color="inherit" onClick={() => navigate("/movies/add")}>
                Addmovie
              </Button>
              <Button color="inherit" onClick={() => navigate("/color")}>
                color game
              </Button>
              <Button
                sx={{ marginLeft: "auto" }}
                color="inherit"
                onClick={() => settheme(theme === "light" ? "dark" : "light")}
              >
                {theme === "light" ? "dark" : "light"}-mode
              </Button>
            </Toolbar>
          </AppBar>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/film" element={<Navigate to="/movies" />} />
            <Route path="/movies" element={<Movielist />} />
            <Route path="/movies/:id" element={<Moviedetail />} />
            <Route path="/color" element={<Addcolor />} />
            <Route path="/movies/add" element={<Addmovie />} />
            <Route path="/basicform" element={<BasicForm />} />
            <Route path="/movies/edit/:id" element={<Editmovie />} />
            <Route path="*" element={<Pagenot />} />
          </Routes>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
