import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import WeatherSearch from "./WeatherSearch";


import "./App.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div class="container">
    <div id="weather" class="weather-container">
    </div>
    <header>
    <ul class="navigation-items space-bwteen">
          <a href="/lisbon">Lisbon</a>
        <a href="/paris">Paris</a>
        <a href="/sydney">Sydney</a>
        <a href="/san-francisco">San Francisco</a>
      </ul>
    </header>
  <div className="App">
    <WeatherSearch />
  </div>
  </div>
  <footer>
        This project was coded by
        <a href="https://github.com/akhona-mazingisa" target="_blank"> Akhona Mazingisa</a> and is
        <a href="https://github.com/akhona-mazingisa?tab=repositories" target="_blank"> on GitHub</a> and
        <a href="https://week8-shecodes-weather-forecast.netlify.app/" target="_blank"> hosted on Netlify</a>
    </footer>
</StrictMode>
);

