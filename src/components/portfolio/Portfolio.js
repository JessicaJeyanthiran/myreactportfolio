import React from 'react';


function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
    <h1>Portfolio</h1>

      <div className="container">
        <div className="item">
        <a href="https://deepikabekal.github.io/covid-now-version2/"><img src="./assets/CovidNow.png" alt="project1"/></a>
          <h3>Covid Tracker</h3>
        </div>
        <div className="item">
        <a href="https://github.com/jadejhagru/coding-flashcards.git"><img src="./assets/codingflashcards.jpg" alt="project2"/></a>
          <h3>Coding Flashcards</h3>
        </div>

      </div>
    </div>
  );
  }

export default Portfolio;
