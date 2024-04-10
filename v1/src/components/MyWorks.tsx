import React from "react";

import Description from "./MyWorks.Description";
// images
import buddeImg from "../images/budde-kaffee.jpeg";
import coffeeRecipeImg from "../images/coffee-recipe-app.jpeg";
import myWebSiteImg from "../images/my-web-site.jpeg";
import typingGameImg from "../images/typing_game.jpg";
import slotMachineImg from "../images/slot_machine.jpg";
import newsAppImg from "../images/news-app.jpg";
import stopWatchImg from "../images/stop-watch.jpg";

interface Projects {
  className: string;
  src: string;
  alt: string;
  link: string;
  title: string;
  description: string;
  usedTech: string[];
  gitHub: string | null;
}

const projects: Projects[] = [
  {
    // Nachrichten Heute
    className: "nachrichten-heute",
    src: newsAppImg,
    alt: "News App",
    link: "https://nachrichten-heute.web.app/",
    title: "Nachrichten Heute",
    description: "SPA that displays news from different sources.",
    usedTech: ["TypeScript", "React", "HTML5", "SCSS"],
    gitHub: "https://github.com/kei0528/Nachrichten-Heute",
  },
  {
    // Coffee Recipe Forum
    className: "coffee-recipe-forum",
    src: coffeeRecipeImg,
    alt: "Coffee Recipe Forum",
    link: "https://coffee-app-252a4.web.app/",
    title: "Coffee Recipe Forum",
    description: "A forum which can be post and browse coffee recipes.",
    usedTech: ["TypeScript", "React", "Firebase", "HTML5", "CSS3"],
    gitHub: "https://github.com/kei0528/coffee-recipe-forum",
  },
  {
    // My Website
    className: "my-website",
    src: myWebSiteImg,
    alt: "my website",
    link: "#main-top",
    title: "My Website",
    description: "The page which you are currently visiting.",
    usedTech: ["TypeScript", "React", "HTML5", "SCSS"],
    gitHub: "https://github.com/kei0528/my-web-site",
  },
  {
    // Budde Kaffee Website
    className: "budde-kaffee",
    src: buddeImg,
    alt: "Budde Kaffee Website",
    link: "https://buddekaffee.de/",
    title: "Budde Kaffee Website",
    description: "Static website for local coffee business.",
    usedTech: ["HTML5", "CSS3", "JavaScript"],
    gitHub: null,
  },
  {
    // Typing Game
    className: "typing-name",
    src: typingGameImg,
    alt: "Typing Game",
    link: "https://kei0528.github.io/typing-game/",
    title: "Typing Game",
    description: "Simple typing game developed with vanilla JS.",
    usedTech: ["HTML5", "CSS3", "JavaScript"],
    gitHub: "https://github.com/kei0528/typing-game",
  },
  {
    // Slot Machine
    className: "slot-machine",
    src: slotMachineImg,
    alt: "Slot Machine",
    link: "https://kei0528.github.io/slot-machine/",
    title: "Slot Machine",
    description: "Slot Machine. Enjoy!",
    usedTech: ["HTML5", "CSS3", "JavaScript"],
    gitHub: "https://github.com/kei0528/slot-machine",
  },
  {
    // Stop Watch
    className: "stop-watch",
    src: stopWatchImg,
    alt: "Stop Watch",
    link: "https://kei0528.github.io/stop-watch/",
    title: "Stop Watch",
    description:
      'Stop Watch with "Start", "Stop" and "Reset" button. My very first project.',
    usedTech: ["HTML5", "CSS3", "JavaScript"],
    gitHub: "https://github.com/kei0528/stop-watch",
  },
];

const MyWorks: React.FC = () => {
  const projectsHandler = () => {
    return projects.map((project) => {
      return (
        <Description
          key={Math.random()}
          className={project.className}
          src={project.src}
          alt={project.alt}
          link={project.link}
          title={project.title}
          description={project.description}
          usedTech={project.usedTech}
          gitHub={project.gitHub}
        />
      );
    });
  };
  return (
    <section className="my-works" id="my-works">
      <h2>MY WORKS</h2>
      <div className="my-works-container">{projectsHandler()}</div>
    </section>
  );
};

export default MyWorks;
