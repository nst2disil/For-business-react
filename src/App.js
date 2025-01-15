import Benefits from "./components/benefits/Benefits";
import Exchange from "./components/exchange/Exchange";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Trust from "./components/trust/Trust";

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero />
      <Benefits />
      <Exchange />
      <Trust />
      <Footer />
    </div>
  );
}

export default App;
