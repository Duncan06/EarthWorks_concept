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

  function nowSetHome() {
    setHome(true);
    setAbout(false);
    setPrice(false);
    setContact(false);
  }

  function nowSetAbout() {
    setHome(false);
    setAbout(true);
    setPrice(false);
    setContact(false);
  }

  function nowSetPrice() {
    setHome(false);
    setAbout(false);
    setPrice(true);
    setContact(false);
  }

  function nowSetContact() {
    setHome(false);
    setAbout(false);
    setPrice(false);
    setContact(true);
  }

  return (
    <div className="App">
      <Navigation
        changeHome={nowSetHome}
        changeAbout={nowSetAbout}
        changePrice={nowSetPrice}
        changeContact={nowSetContact}
      />
      <MainDisplay home={home} about={about} price={price} contact={contact} />
      <Footer />
    </div>
  );
}

export default App;
