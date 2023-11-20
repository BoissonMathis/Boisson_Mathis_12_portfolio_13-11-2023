import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import {
  home,
  booki,
  ohmyfood,
  alafrancaise,
  palettedugout,
  noteenchantee,
  delicedessens,
} from "./routes/routes";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import Footer from "./components/Footer/Footer.js";
import Home from "./pages/Home/App.jsx";
import Booki from "./pages/booki/booki.jsx";
import Ohmyfood from "./pages/ohmyfood/ohmyfood.jsx";
import Alafrancaise from "./pages/ohmyfood/restaurants/alafrancaise.jsx";
import Palettedugout from "./pages/ohmyfood/restaurants/palettedugout.jsx";
import Noteenchantee from "./pages/ohmyfood/restaurants/noteenchantee.jsx";
import Delicedessens from "./pages/ohmyfood/restaurants/delicedessens.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path={home} />
        <Route element={<Booki />} path={booki} />
        <Route element={<Ohmyfood />} path={ohmyfood} />
        <Route element={<Alafrancaise />} path={alafrancaise} />
        <Route element={<Palettedugout />} path={palettedugout} />
        <Route element={<Noteenchantee />} path={noteenchantee} />
        <Route element={<Delicedessens />} path={delicedessens} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
