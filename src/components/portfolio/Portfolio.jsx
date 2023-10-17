import "./portfolio.css";
import portfolio1 from "../../assets/portfolio1.jpeg";
import portfolio2 from "../../assets/portfolio2.jpeg";
import portfolio3 from "../../assets/portfolio3.jpeg";
import portfolio4 from "../../assets/portfolio4.jpeg";
import portfolio5 from '../../assets/portfolio5.jpeg';
import portfolio6 from '../../assets/portfolio6.jpeg';

const data = [
{
  id: 1,
    image: portfolio1,
    title: "Health4TheWorld Website",
    demo: "https://health4theworld.org/academy/",
},
  {
    id: 2,
    image: portfolio2,
    title: "Recipe Finder App",
    demo: "https://shobi-recipe-finder.netlify.app/",
  },
  {
    id: 3,
    image: portfolio3,
    title: "Chat App",
    demo: "https://shobi-chat-app.netlify.app",
  },
  {
    id: 4,
    image: portfolio4,
    title: "Weather App",
    demo: "https://shobi-weather-app.netlify.app",
  },
  {
    id: 5,
    image: portfolio5,
    title: "Youtube Cloning App",
    demo: "https://shobi-jsm-media.netlify.app",
  },
  {
    id: 6,
    image: portfolio6,
    title: "React CRUD App",
    demo: "https://shobi-reactcrudapp.netlify.app/",
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5 aria-level="1">My Recent Work</h5>
      <h2 aria-level="2">Portfolio</h2>
      <div className="container portfolio__container" role="navigation">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                  role="button"
                >
                  Live Demo
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
