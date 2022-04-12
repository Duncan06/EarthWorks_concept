import { useState } from "react";
import "./App.css";
// Lazy load of components seems to slow down mobile performance.
import Navigation from "./components/Navigation";
import MainDisplay from "./components/MainDisplay";
import Footer from "./components/Footer";
import "typeface-cormorant-sc";
import "typeface-roboto";

function App() {
  const [home, setHome] = useState(true);
  const [about, setAbout] = useState(false);
  const [price, setPrice] = useState(false);
  const [contact, setContact] = useState(false);
  const [firstTimeAbout, setFirstTimeAbout] = useState(true);
  const [firstTimePrice, setFirstTimePrice] = useState(true);
  const [firstTimeContact, setFirstTimeContact] = useState(true);
  const [notHome, setNotHome] = useState(false);

  const setPages = [setHome, setAbout, setPrice, setContact];

  function nowSetHome() {
    setHome(true);
    // Set remaining values to false (This is repeated in multiple lines).
    setPages.filter((name) => name !== setHome).map((func) => func(false));
    notFirstHome();
  }

  function nowSetAbout() {
    setAbout(true);
    setNotHome(true);
    setPages.filter((name) => name !== setAbout).map((func) => func(false));
    if (firstTimeAbout) {
      setFirstTimeAbout(false);
    } else {
      notFirstAbout();
    }
  }

  function nowSetPrice() {
    setPrice(true);
    setNotHome(true);
    setPages.filter((name) => name !== setPrice).map((func) => func(false));
    if (firstTimePrice) {
      setFirstTimePrice(false);
    } else {
      notFirstPrice();
    }
  }

  function nowSetContact() {
    setContact(true);
    setNotHome(true);
    setPages.filter((name) => name !== setContact).map((func) => func(false));
    if (firstTimeContact) {
      setFirstTimeContact(false);
    } else {
      notFirstContact();
    }
  }

  // Stop animations
  function notFirstHome() {
    const animationList = [
      "--animation-time-1",
      "--animation-time-2",
      "--animation-time-3",
      "--animation-time-4",
    ];
    animationList.map((item) =>
      document.documentElement.style.setProperty(item, 0)
    );
  }

  function notFirstAbout() {
    const animationList = [
      "--animation-time-5",
      "--animation-time-6",
      "--animation-time-7",
    ];
    animationList.map((item) =>
      document.documentElement.style.setProperty(item, 0)
    );
  }

  function notFirstPrice() {
    const animationList = [
      "--animation-time-8",
      "--animation-time-9",
      "--animation-time-10",
      "--animation-time-11",
    ];
    animationList.map((item) =>
      document.documentElement.style.setProperty(item, 0)
    );
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
      <MainDisplay
        home={home}
        about={about}
        price={price}
        contact={contact}
        notHome={notHome}
        nowSetHome={nowSetHome}
        notFirstHome={notFirstHome}
        applyNotHomeOption={() => setNotHome(false)}
      />
      <Footer />
    </div>
  );
}

export default App;
