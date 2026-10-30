import Header from "./components/Header";
import Hero from "./components/Hero";
import { Courses, PythonPlan, MathsSoon } from "./components/Courses";
import { Mission, Why, CtaBand } from "./components/About";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Courses />
        <PythonPlan />
        <MathsSoon />
        <Mission />
        <Why />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}