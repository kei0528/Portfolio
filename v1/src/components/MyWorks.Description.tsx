import React from "react";
import codeLogo from "../images/coding.png";

interface Prop {
  className: string;
  src: string;
  alt: string;
  link: string;
  title: string;
  description: string;
  usedTech: string[];
  gitHub: string | null;
}

const Description: React.FC<Prop> = ({
  className,
  src,
  alt,
  link,
  title,
  description,
  usedTech,
  gitHub,
}) => {
  const UsedTech = () => {
    return usedTech.map((tech) => {
      return <li key={Math.random()}>{tech}</li>;
    });
  };
  return (
    <section className={"my-works-window" + " " + className}>
      <div className="my-works-window-img-container">
        <img src={src} alt={alt} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>{UsedTech()}</ul>
      <div className="mw-button-container">
        <a
          href={link}
          className="mw-go-to-page"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Got Interested? */}
        </a>
        {gitHub ? (
          <a
            href={gitHub}
            className="mw-read-code"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={codeLogo} alt="read more" />
          </a>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default Description;
