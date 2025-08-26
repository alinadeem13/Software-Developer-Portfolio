import "./App.css";
import { Layout } from "./components/Layout";
import { About } from "./sections/About/About";
import Hero from "./sections/Hero/Hero";
// import './index.css'

function App() {
  return (
    <div>
      <Layout>
        <Hero />
        <About />
      </Layout>
    </div>
  );
}

export default App;
