import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Frontend Accounting Project",
    github: "https://github.com/danu999/migas-accounting-fe",
  },
  {
    id: 2,
    image: IMG2,
    title: "E-Commerce Catalog Frinz Store",
    github: "https://github.com/danu999/Project-E-commerce",
  },
  {
    id: 3,
    image: IMG3,
    title: "Figma design for website",
    github: "https://www.figma.com/file/T5bYUkTvbWli1qHOwtAV9w/Sistem-Akuntasi?type=design&node-id=0-1&t=cKPrrcHedXKT8TvI-0",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github }) => {
          if ( id === 3) {
            return (
              <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Figma
                </a>
              </div>
            </article>
            )
          }
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
