import { useState, useEffect } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import MainDisplay from "./components/MainDisplay";
import Footer from "./components/Footer";

function App() {
  const [home, setHome] = useState(true);
  const [about, setAbout] = useState(false);
  const [price, setPrice] = useState(false);
  const [contact, setContact] = useState(false);

  return (
    <div className="App">
      <Navigation />
      <MainDisplay
        home={home}
        setHome={setHome}
        about={about}
        setAbout={setAbout}
        price={price}
        setPrice={setPrice}
        contact={contact}
        setContact={setContact}
      />
      <Footer />
    </div>
  );
}

export default App;
