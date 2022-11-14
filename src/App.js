import ReactFullpage from '@fullpage/react-fullpage';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Works from './components/Works';
import Contact from './components/Contact';

function App() {
  const anchors = ['hello', 'about', 'skills', 'works', 'contact'];
  const Fullpage = () => (
    <ReactFullpage
      //fullpage options
      anchors={anchors}
      navigation
      navigationTooltips={anchors}
      licenseKey = {'YOUR_KEY_HERE'}
      scrollingSpeed = {1000}
  
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <Header />
              <Hero />
            </div>
            <div className="section about">
              <About />
            </div>
            <div className="section">
              <Skills />
            </div>
            <section className="section works">
              <Works />
            </section>
            <section className="section contact">
              <Contact />
            </section>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
  return (
    <div className="App">
      <Fullpage />
    </div>
  );
}

export default App;
