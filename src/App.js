import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"

// import ReactDOM from "react-dom/client";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // default mode
  const [alert, newAlert] = useState(null)

  const Alert_func = (message, type) => {

    newAlert({
      msg: message,
      type: type
    });


    setTimeout(() => {
      newAlert(null);
    }, 1500);

  }

  const togglemode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.background = "white";
      Alert_func("Light Mode is been Enabbled...", "success")
    } else {
      setMode("dark");
      document.body.style.background = "#0b032a";
      Alert_func("Dark Mode is been Enabbled...", "success")
    }
  };

  return (
    <>
      <Navbar
        title="TEXT UTILS"
        item1="HOME"
        item2="ABOUT US"
        mode={mode}
        togglemode={togglemode}
      />

      <Alert alert={alert} />

      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Textform
            heading="Welcome To TEXT UTILS"
            textareaHeading="Enter the text to analyze"
            mode={mode}
            Alert_func={Alert_func}
          />}>
            <Route index element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter> */}



      <Textform
        heading="Welcome To TEXT UTILS"
        textareaHeading="Enter the text to analyze"
        mode={mode}
        Alert_func={Alert_func}
      />
      <About />

    </>
  );
}

export default App;
