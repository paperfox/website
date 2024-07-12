import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import AboutPage from './About';
import Footer from './Footer';

function App() {
  return (
    <main>
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
      <Footer />
    </main>
  );
}

export default App;
