import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import AboutPage from './About';
import Footer from './Footer';

function App() {
  return (
    <main>
      <div className="container">
        <div className="row pt-5">
          <div className="col-md-5 pt-5"><hr/></div>
          <div className="col-md-2">
            <img src="https://paperfox.github.io/images/paperfoxlogo.svg" alt="placeholder" className="m-5 mt-0"/>
          </div>
          <div className="col-md-5 pt-5"><hr/></div>
        </div>
        <h1></h1>
        <h2>Art</h2>
        <p>You can find my art up on Instagram or Cara.</p>
        <div className="row">
          <div className="col-sm">
            <a href="">
            <div className="mx-4 build-deck">
                <img src="https://paperfox.github.io/images/cards/back.jpg" className="deck-card-stack" alt="" />
                <img src="https://paperfox.github.io/images/cards/back.jpg" className="deck-card-stack" alt="" />
                <img src="https://paperfox.github.io/images/cards/back.jpg" className="deck-card-stack" alt="" />
                <img src="https://paperfox.github.io/images/cards/back.jpg" className="deck-card-stack" alt="" />
                <img src="https://paperfox.github.io/images/cards/back.jpg" className="deck-card-stack" alt="" />
                <img src="https://paperfox.github.io/images/cards/back.jpg" className="deck-card-stack " alt="" id="top" />
              </div>
            </a>
          </div>
          <div className="col-sm">
            <a href="">
              <img src="https://paperfox.github.io/images/cards/back.jpg"  className="w-100" />
            </a>
          </div>
          <div className="col-sm">
            <a href="">
              <img src="https://paperfox.github.io/images/cards/back.jpg"  className="w-100" />
            </a>
          </div>

        </div>
        <h2>Tarot</h2>
        <h2>Where to Find Me</h2>
        <p>Looking to connect? You can find me in any of these places.</p>

        <ul className="list-unstyled d-flex justify-content-center">
          <li className="m-3">
              <a href="https://www.instagram.com/paperfoxmakesart/" target="_blank" rel="noreferrer"><img src="../images/instagramlogo.svg" alt="instagram" /></a>
          </li>
          <li className="m-3">
              <a href="https://cara.app/paperfox" target="_blank" rel="noreferrer"><img src="../images/cara-app-logo-circle-White.svg" alt="cara" /></a>
          </li>
          <li className="m-3">
              <a href="https://github.com/paperfox" target="_blank" rel="noreferrer"><img src="../images/github-mark.svg" alt="github"/></a>
          </li>
          <li className="m-3">
              <a href="https://www.linkedin.com/in/paperfox/" target="_blank" rel="noreferrer"><img src="../images/linkedinlogo.svg" alt="linked in" /></a>
          </li>
        </ul>
      </div>
      {/* <div className="row">
        <div className="col-md-3">
          <img src="../images/paperfoxlogo.svg" alt="placeholder" />
          <img src="https://paperfox.github.io/images/paperfoxlogo.svg" alt="placeholder" />

          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="https://paperfox.github.io">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://paperfox.github.io">Artwork</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://paperfox.github.io/tarot">Tarot</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://paperfox.github.io">About & Contact</a>
            </li>
          </ul>
        </div>

        <div className="col-md">
          <Tabs
            defaultActiveKey="TarotAboutPage"
            id="paperfox-"
            className="mb-3"
          >
            <Tab eventKey="TarotAboutPage" title="About">
              <AboutPage />
            </Tab>
            <Tab eventKey="InstagramFeed" title="Sketchbook">

            </Tab>
          </Tabs>
        </div>
      </div> */}

      <Footer />
    </main>
  );
}

export default App;
