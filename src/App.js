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
  const [firstTimeAbout, setFirstTimeAbout] = useState(true);
  const [firstTimePrice, setFirstTimePrice] = useState(true);
  const [firstTimeContact, setFirstTimeContact] = useState(true);

  function nowSetHome() {
    setHome(true);
    setAbout(false);
    setPrice(false);
    setContact(false);
    notFirstHome();
  }

  function nowSetAbout() {
    setHome(false);
    setAbout(true);
    setPrice(false);
    setContact(false);
    if (firstTimeAbout) {
      setFirstTimeAbout(false);
    } else {
      notFirstAbout();
    }
  }

  function nowSetPrice() {
    setHome(false);
    setAbout(false);
    setPrice(true);
    setContact(false);
    if (firstTimePrice) {
      setFirstTimePrice(false);
    } else {
      notFirstPrice();
    }
  }

  function nowSetContact() {
    setHome(false);
    setAbout(false);
    setPrice(false);
    setContact(true);
    if (firstTimeContact) {
      setFirstTimeContact(false);
    } else {
      notFirstContact();
    }
  }

  function notFirstHome() {
    document.documentElement.style.setProperty("--animation-time-1", 0);
    document.documentElement.style.setProperty("--animation-time-2", 0);
    document.documentElement.style.setProperty("--animation-time-3", 0);
    document.documentElement.style.setProperty("--animation-time-4", 0);
  }

  function notFirstAbout() {
    document.documentElement.style.setProperty("--animation-time-5", 0);
    document.documentElement.style.setProperty("--animation-time-6", 0);
    document.documentElement.style.setProperty("--animation-time-7", 0);
  }

  function notFirstPrice() {
    document.documentElement.style.setProperty("--animation-time-8", 0);
    document.documentElement.style.setProperty("--animation-time-9", 0);
    document.documentElement.style.setProperty("--animation-time-10", 0);
    document.documentElement.style.setProperty("--animation-time-11", 0);
  }

  function notFirstContact() {
    document.documentElement.style.setProperty("--animation-time-12", 0);
    document.documentElement.style.setProperty("--animation-time-13", 0);
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
