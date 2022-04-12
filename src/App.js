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
  const [option1, setOption1] = useState(false);
  const [option2, setOption2] = useState(false);
  const [option3, setOption3] = useState(false);
  const [option4, setOption4] = useState(false);
  const [option5, setOption5] = useState(false);
  const [notHome, setNotHome] = useState(false);

  const setPages = [setHome, setAbout, setPrice, setContact];
  const setOptions = [
    setOption1,
    setOption2,
    setOption3,
    setOption4,
    setOption5,
  ];

  function nowSetHome() {
    setHome(true);
    const otherPages = setPages.splice(1, 3);
    otherPages.map((func) => func(false));
    setOptions.map((func) => func(false));
    notFirstHome();
  }

  function changeOption1() {
    setOption1(true);
    // Set remaining values to false (This is repeated in multiple lines).
    setOptions.filter((name) => name !== setOption1).map((func) => func(false));
    notFirstHome();
  }

  function changeOption2() {
    setOption2(true);
    setOptions.filter((name) => name !== setOption2).map((func) => func(false));
    notFirstHome();
  }

  function changeOption3() {
    setOption3(true);
    setOptions.filter((name) => name !== setOption3).map((func) => func(false));
    notFirstHome();
  }

  function changeOption4() {
    setOption4(true);
    setOptions.filter((name) => name !== setOption4).map((func) => func(false));
    notFirstHome();
  }

  function changeOption5() {
    setOption5(true);
    setOptions.filter((name) => name !== setOption5).map((func) => func(false));
    notFirstHome();
  }

  function next() {
    if (option1) {
      changeOption2();
    } else if (option2) {
      changeOption3();
    } else if (option3) {
      changeOption4();
    } else if (option4) {
      changeOption5();
    } else if (option5) {
      nowSetHome();
    } else {
      changeOption1();
    }
  }

  function previous() {
    if (option1) {
      nowSetHome();
    } else if (option2) {
      changeOption1();
    } else if (option3) {
      changeOption2();
    } else if (option4) {
      changeOption3();
    } else if (option5) {
      changeOption4();
    } else {
      changeOption5();
    }
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
        notHome={notHome}
        about={about}
        price={price}
        contact={contact}
        option1={option1}
        changeOption1={changeOption1}
        option2={option2}
        changeOption2={changeOption2}
        option3={option3}
        changeOption3={changeOption3}
        option4={option4}
        changeOption4={changeOption4}
        option5={option5}
        changeOption5={changeOption5}
        next={next}
        previous={previous}
      />
      <Footer />
    </div>
  );
}

export default App;
