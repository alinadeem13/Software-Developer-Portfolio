import "./App.css";
import { Layout } from "./components/Layout";
import { About } from "./sections/About/About";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
// import './index.css'

function App() {
  return (
    <div>
      <Layout>
        <Hero />
        <About />
        <Projects />
      </Layout>
    </div>
  );
}

export default App;
