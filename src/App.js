import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import AboutPage from './About';
import Footer from './Footer';

function App() {
  return (
    <main>
      <div className="row">
        <div className="col-md-3">
          {/* <img src="../images/paperfoxlogo.svg" alt="placeholder" /> */}
          <img src="https://paperfox.github.io/images/paperfoxlogo.svg" alt="placeholder" />

          <ul class="nav flex-column">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="https://paperfox.github.io">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://paperfox.github.io">Artwork</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://paperfox.github.io/tarot">Tarot</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://paperfox.github.io">About & Contact</a>
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
      </div>

      <Footer />
    </main>
  );
}

export default App;
