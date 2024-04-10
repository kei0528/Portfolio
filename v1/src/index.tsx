import React from "react";
import ReactDOM from "react-dom";
import Favicon from "react-favicon";
// import components
import Header from "./components/Header";
import MainTop from "./components/MainTop";
import AboutMe from "./components/AboutMe";
import MyWorks from "./components/MyWorks";
import Contact from "./components/Contact";
// import stylesheet
import "./stylesheet/css/reset.css";
import "./stylesheet/css/index.css";
// favicon
import fav16 from "./images/favicon_io/favicon-16x16.png";
import fav32 from "./images/favicon_io/favicon-32x32.png";
import fav192 from "./images/favicon_io/android-chrome-192x192.png";
import fav512 from "./images/favicon_io/android-chrome-512x512.png";
import favApple from "./images/favicon_io/apple-touch-icon.png";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <section>
          <MainTop />
          <AboutMe />
          <MyWorks />
          <Contact />
        </section>
      </main>
      <footer>
        <p>&copy; Keisuke Tanaka 2021</p>
      </footer>
    </div>
  );
};

const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Favicon url={[fav16, fav32, fav192, fav512, favApple]} />
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

window.onload = render;
