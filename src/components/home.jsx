import React from "react";
import { Link } from "react-router-dom";

export const Home = () => (
  <div>
    <section className="app-link">
      <Link to="/natours">Natours</Link>
      <Link to="/natours/grid">GridSys</Link>
    </section>
  </div>
);
