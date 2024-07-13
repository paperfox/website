import React from 'react';
import Footer from './Footer';

function App() {
  return (
    <main>
      <div className="container">
        <div className="row pt-5 justify-content-center">
          <div className="col-3 col-sm-4 col-md-5 align-self-center"><hr/></div>
          <div className="col-4 col-sm-4 col-md-2 align-self-center">
            <img src="https://paperfox.github.io/images/paperfoxlogo.svg" alt="placeholder" className="m-5 mt-0 mb-0"/>
          </div>
          <div className="col-3 col-sm-4 col-md-5 align-self-center"><hr/></div>
        </div>

        <div className="row justify-content-center mt-3">
          <div className="col-sm-7 col-md-12 col-lg-8 mt-5">
            <h1>Paperfox</h1>
          </div>
        </div>
        <div className="row justify-content-center mt-3 mb-5">
          <div className="col-sm-7 col-md-6 col-lg-4">
            <h2>Art by Nathalie Garfinkle</h2>
            <div className="mb-5">
              <p>Paperfox is mainly the home of my evolving <a href="https://paperfox.github.io" target="_blank" rel="noreferrer">Tarot app</a>. As a developer professionally and an artist by passion it'd so rewarding to work on something that makes use of such a wide range of my skills. If I'm not poking away at this, I'm likely doodling up some of the card images, playing with my dog, or out in my garden.</p>
              <p>You can find me around on the internet at these links!</p>
            </div>
          </div>
          <div className="col-sm-7 col-md-6 col-lg-4 paperfox-links">
            <h2 class="mb-4">Tarot</h2>
            <ul className="list-unstyled">
              <li className="mb-4 w-100">
                <a href="https://paperfox.github.io" target="_blank" rel="noreferrer" className="p-4">
                  <img src="https://paperfox.github.io/images/paperfoxlogo.svg" alt="" className="convert-to-white me-3" />
                  <span>Paperfox Tarot App</span>
                </a>
              </li>
            </ul>

            <h2 class="mb-4">Art</h2>
            <ul className="list-unstyled d-flex mb-0">
              <li className="mb-4 w-50">
                <a href="https://www.instagram.com/paperfoxmakesart/" target="_blank" rel="noreferrer" className="p-4">
                  <img src="../images/instagramlogo.svg" alt="" className="me-3" />
                  <span>Instagram</span>
                </a>
              </li>
              <li className="mb-4 w-50">
                <a href="https://cara.app/paperfox" target="_blank" rel="noreferrer" className="p-4">
                  <img src="../images/cara-app-logo-circle-White.svg" alt="" className="me-3" />
                  <span>Cara</span>
                </a>
              </li>
            </ul>

            <h2 class="mb-4">Dev</h2>
            <ul className="list-unstyled">
              <li className="mb-4 w-100">
                <a href="https://github.com/paperfox" target="_blank" rel="noreferrer" className="p-4">
                  <img src="../images/github-mark.svg" alt="" className="me-3" />
                  <span>GitHub</span>
                </a>
              </li>
            </ul>
          </div>
        </div>


        {/* <div className="row justify-content-center mt-3 mb-5">
          <div className="col-sm-7 col-md-6 col-lg-4">
            <h2>Art by Nathalie Garfinkle</h2>
            <div className="mb-5">
              <p>Paperfox is mainly the home of my evolving <a href="https://paperfox.github.io" target="_blank" rel="noreferrer">Tarot app</a>. As a developer professionally and an artist by passion it'd so rewarding to work on something that makes use of such a wide range of my skills. If I'm not poking away at this, I'm likely doodling up some of the card images, playing with my dog, or out in my garden.</p>
              <p>You can find me around on the internet at these links!</p>
            </div>
          </div>
          <div className="col-sm-7 col-md-6 col-lg-4 paperfox-links">
            <h2 class="mb-4">Tarot</h2>
            <a href="https://paperfox.github.io" target="_blank" rel="noreferrer" className="btn btn-secondary p-3 mb-4 w-100">
              <img src="https://paperfox.github.io/images/paperfoxlogo.svg" alt="" className="convert-to-white me-3" />
              <span>Paperfox Tarot App</span>
            </a>
            <h2 class="mb-4">Art</h2>
            <div class="btn-group w-100 mb-4" role="group" aria-label="Basic example">
              <a href="https://www.instagram.com/paperfoxmakesart/" target="_blank" rel="noreferrer" className="btn btn-secondary p-3 w-50">
                <img src="../images/instagramlogo.svg" alt="" className="me-3 convert-to-goldenrod" />
                <span>Instagram</span>
              </a>
              <a href="https://cara.app/paperfox" target="_blank" rel="noreferrer" className="btn btn-secondary p-3 w-50">
                <img src="../images/cara-app-logo-circle-White.svg" alt="" className="me-3" />
                <span>Cara</span>
              </a>
            </div>

            <h2 class="mb-4">Dev</h2>
            <a href="https://github.com/paperfox" target="_blank" rel="noreferrer" className="btn btn-secondary p-3 mb-4 w-100">
              <img src="../images/github-mark.svg" alt="" className="me-3" />
              <span>GitHub</span>
            </a>
          </div>
        </div> */}



        {/* <div className="row justify-content-center">
          <div className="col-sm-7 col-md-6 col-lg-4">
            <h1>Some Kind of Title</h1>

            <p>In my free time, I'm working on paintings and illustrations of the many things I love (books, games, my lovely doggos, and more!). I've also started gardening, because who hasn't in some form these last couple years?</p>

            <p>I decided to start building a tarot app since it pulls together my development and design skills, while also giving me a place to showcase my art. Plus, its fun to build with lots of places I can expand it!</p>
            <div className="mb-5">
              <p>Paperfox is mainly the home of my evolving <a href="https://paperfox.github.io" target="_blank" rel="noreferrer">Tarot app</a>. As a developer professionally and an artist by passion it'd so rewarding to work on something that makes use of such a wide range of my skills. If I'm not poking away at this, I'm likely doodling up some of the card images, playing with my dog, or out in my garden.</p>
              <p>You can find me around on the internet at the links below!</p>
            </div>

            <ul className="list-unstyled d-flex justify-content-center">
              <li className="mb-4">
                <a href="https://paperfox.github.io" target="_blank" rel="noreferrer">
                  <img src="https://paperfox.github.io/images/paperfoxlogo.svg" alt="Paperfox Tarot App" className="convert-to-white me-3" />
                </a>
              </li>
              <li className="mb-4">
                <a href="https://www.instagram.com/paperfoxmakesart/" target="_blank" rel="noreferrer">
                  <img src="../images/instagramlogo.svg" alt="instagram" className="me-3" />
                </a>
              </li>
              <li className="mb-4">
                <a href="https://cara.app/paperfox" target="_blank" rel="noreferrer">
                  <img src="../images/cara-app-logo-circle-White.svg" alt="cara" className="me-3" />
                </a>
              </li>
              <li className="mb-4">
                <a href="https://github.com/paperfox" target="_blank" rel="noreferrer">
                  <img src="../images/github-mark.svg" alt="github" className="me-3" />
                </a>
              </li>
            </ul>
          </div>
        </div> */}
      </div>
      <Footer />
    </main>
  );
}

export default App;
