import "./styles/styles.css";
import Footer from './components/Footer';
import Home from "./pages/Home";
import Header from "./components/Header";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "../script.js"; // Caminho do seu script
    script.async = true;
    document.body.appendChild(script);

    
  }, []);

  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  )
}



export default App
