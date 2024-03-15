import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import WeatherSearch from "./WeatherSearch";

import "./App.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <h1>Weather App</h1>
      <div class="container">
      <nav class="d-flex justify-content-between">
        <a href="/" title="Homepage">
        </a>
        <ul>
          <li>
            <a href="/" title="Homepage"> Home</a>
          </li>
          <li class="active">
            <a href="/about.html" title="Lisbon"> Lisbon</a>
          </li>
          <li>
            <a href="/work.html" title="Paris"> Paris</a>
          </li>
          <li>
            <a href="/contact.html" title="Sydney"> Sydney</a>
          </li>
          <li>
            <a href="/contact.html" title="San Francisco"> San Francisco</a>
          </li>
        </ul>
      </nav>
      <WeatherSearch />
      </div>
    </div>
      </StrictMode>
);
