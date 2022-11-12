import React, { useState } from "react";
import PropTypes from "prop-types";

import ""


export default function Textform(props) {
  const UpperCase = () => {
    setText(text.toUpperCase());
    props.Alert_func("Successfully converted to UpperCase","success");
  };
  
  const LowerCase = () => {
    setText(text.toLowerCase());
    props.Alert_func("Successfully converted to LowerCase","success");
  };
  
  // const ClearText = () => {
  //   let gettext;
  //   gettext = text;
  //   setText(gettext = "");
  //   props.Alert_func("All Text is Cleared","success");
  // };

  const OnChange = (event) => {
    setText(event.target.value);
  };


  const [text, setText] = useState("Enter your text here...");

  return (
    <>
      <div className={`container mt-5 text-${props.mode === 'dark'?'light':'dark'}`}>
        <h1 align="center" style={{color: props.mode==='dark'?'white':'black'}} >{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="textarea" className="form-label font-size: 17px my-3">
            {props.textareaHeading}
          </label>

          <textarea
            className="form-control"
            value={text}
            style={{backgroundColor: props.mode==='dark'? 'Grey': 'white', color:props.mode=== 'dark'?'white': 'black'}}
            onChange={OnChange}
            id="textarea"
            rows="7"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={UpperCase}>
          UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={LowerCase}>
          LowerCase
        </button>
        {/* <button className="btn btn-primary mx-1" onClick={ClearText}>
          Clear Text
        </button> */}
        {/* <button className="btn btn-primary m-4" onClick={}>UpperCase</button>
        <button className="btn btn-primary m-4" onClick={}>UpperCase</button> */}
      </div>

      <div className={`container text-${props.mode === 'dark'?'light':'dark'} `}>
        <h1>Your Summary is : </h1>
        <p>
          {/* split(" ") will return array containing words */}
          Number of Words are : {text.split(' ').length}
          <br />
          {/* Returns total length of text */}
          Number of Characters are : {text.length}
        </p>
        <hr />
      </div>

      <div className={`container text-${props.mode === 'dark'?'light':'dark'} `}>
        <h3>Preview :</h3>
        <br />
        <p>{text}</p>
      </div>
    </>
  );
}

Textform.propTypes = {
  heading: PropTypes.string.isRequired,
  textareaHeading: PropTypes.string.isRequired,
};

Textform.defaultProps = {
  heading: "heading",
  textareaHeading: "textareaHeading",
};

