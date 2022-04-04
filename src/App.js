import { useState } from "react";
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
  const [option1, setOption1] = useState(false);
  const [option2, setOption2] = useState(false);
  const [option3, setOption3] = useState(false);
  const [option4, setOption4] = useState(false);
  const [option5, setOption5] = useState(false);

  function nowSetHome() {
    setHome(true);
    setAbout(false);
    setPrice(false);
    setContact(false);
    setOption1(false);
    setOption2(false);
    setOption3(false);
    setOption4(false);
    setOption5(false);
    notFirstHome();
  }

  function changeOption1() {
    setOption1(true);
    setOption2(false);
    setOption3(false);
    setOption4(false);
    setOption5(false);
    notFirstHome();
  }

  function changeOption2() {
    setOption1(false);
    setOption2(true);
    setOption3(false);
    setOption4(false);
    setOption5(false);
    notFirstHome();
  }

  function changeOption3() {
    setOption1(false);
    setOption2(false);
    setOption3(true);
    setOption4(false);
    setOption5(false);
    notFirstHome();
  }

  function changeOption4() {
    setOption1(false);
    setOption2(false);
    setOption3(false);
    setOption4(true);
    setOption5(false);
    notFirstHome();
  }

  function changeOption5() {
    setOption1(false);
    setOption2(false);
    setOption3(false);
    setOption4(false);
    setOption5(true);
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
      changeOption2();;
    } else if (option4) {
      changeOption3();
    } else if (option5) {
      changeOption4();
    } else {
      changeOption5();
    }
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
      <MainDisplay
        home={home}
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
