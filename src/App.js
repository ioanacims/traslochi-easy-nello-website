import "./App.css"
import { Contact } from "./components/Contact"
import { Hero } from "./components/Hero"
import { More } from "./components/More"
import { Nav } from "./components/Nav"
import { Service } from "./components/Service"
import { Services } from "./components/Services"

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <Service />
      <More />
      <Contact />
      {/*

<Services />
       */}
    </div>
  ) 
}

export default App

