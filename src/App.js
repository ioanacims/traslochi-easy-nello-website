import "./App.css";
import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import { More } from "./components/More";
import { Nav } from "./components/Nav";
import { Service } from "./components/Service";
import { Gallery } from "./components/Gallery";

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <Service />
      <Gallery />
      <More />
      <Contact />
    </div>
  );
}

export default App;
