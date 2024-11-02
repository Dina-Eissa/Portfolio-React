// src/Work.js
import React from 'react';
import '../assets/style.css';

const Work = () => {
  const projects = [
    {
      link: "https://www.click-group.com/",
      imgSrc: "assets/img/fashion.jpg",
      altText: "work",
      caption: "Fashion Freaks"
    },
    {
      link: "https://www.click-group.com/",
      imgSrc: "assets/img/click.jpg",
      altText: "work",
      caption: "IT Website"
    },
    {
      link: "#",
      imgSrc: "assets/img/concept.jpg",
      altText: "work",
      caption: "Painting Website"
    },
    {
      link: "#",
      imgSrc: "assets/img/monafsa.png",
      altText: "work",
      caption: "Project 3"
    },
    {
      link: "#",
      imgSrc: "assets/img/decor.png",
      altText: "work",
      caption: "Project 4"
    },
  ];

  return (
    <section className="about_contain" id="work">
      <h2 className="side_head">My Works</h2>
      <div className="container_work">
        {projects.map((project, index) => (
          <figure className={`work_box ${index === 0 ? 'first' : ''}`} key={index}>
            <a href={project.link}>
              <img src={project.imgSrc} alt={project.altText} />
            </a>
            <figcaption className="work_caption">{project.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Work;
