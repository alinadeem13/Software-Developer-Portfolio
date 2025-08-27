import "./App.css";
import { Layout } from "./components/Layout";
import { About } from "./sections/About/About";
import Contact from "./sections/Contact/Contact";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route
          path="/home"
          element={
            <div>
              <section id="hero"><Hero /></section>
              <section id="about"><About /></section>
              <section id="projects"><Projects /></section>
              <section id="contact"><Contact /></section>
            </div>
          }
        />
        <Route
          path="*"
          element={<h2 style={{ padding: "2rem" }}>Page Not Found</h2>}
        />
      </Routes>
    </Layout>
  );
}

export default App;
