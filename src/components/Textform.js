import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Textform(props) {
  const UpperCase = () => {
    Previewtext = text;
    setText(Previewtext.toUpperCase());
    props.Alert_func("Successfully converted to UpperCase", "success");
  };

  const LowerCase = () => {
    Previewtext = text;
    setText(text.toLowerCase());
    props.Alert_func("Successfully converted to LowerCase", "success");
  };

  const ClearText = () => {
    Previewtext = text;
    setText((Previewtext = ""));
    props.Alert_func("All Text is Cleared", "success");
  };

  const CopyText = () => {
    navigator.clipboard.writeText(text);
    // text.select();
    // document.execCommand("copy");
    props.Alert_func("Your Text hs been copied", "success");
  };

  const ExtractPhone = () => {
    let stringArray = text.match(/\b[\d]{10}\b/g);
    Previewtext = stringArray.toString();
    Previewtext.replace(",", "\n");

    if (stringArray != null) {
      setText(Previewtext);
      props.Alert_func("Phone number Has been Extracted", "success");
    } else if (stringArray == null) {
      props.Alert_func("No Phone Number has been Found", "success");
      setText((Previewtext = "No Phone Number Found!!!"));
    }
  };

  const ExtractEmail = () => {
    let stringArray = text.match(/[\w]+@[\w]+\.[\w]{2,}/g);
    Previewtext = stringArray.toString();

    if (stringArray != null) {
      setText(Previewtext);
      props.Alert_func("Emails Has been Extracted", "success");
    } else if (stringArray == null) {
      props.Alert_func("No Emails Found", "success");
      setText((Previewtext = "No Email Found!!!"));
    }

    // props.Alert_func("Emails Has been Extracted", "success");
  };

  const OnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter your text here...");
  let Previewtext = text;

  return (
    <>
      <div
        className={`container mt-5 text-${
          props.mode === "dark" ? "light" : "dark"
        }`}
      >
        <h1
          align="center"
          style={{ color: props.mode === "dark" ? "white" : "black" }}
        >
          {props.heading}
        </h1>
        <div className="mb-3">
          <label htmlFor="textarea" className="form-label font-size: 17px my-3">
            {props.textareaHeading}
          </label>

          <textarea
            className="form-control"
            value={text}
            style={{
              backgroundColor: props.mode === "dark" ? "Grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
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
        <button className="btn btn-primary mx-1" onClick={ClearText}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={ExtractPhone}>
          Extract Phone
        </button>
        <button className="btn btn-primary mx-1" onClick={ExtractEmail}>
          Extract Email
        </button>
        <button className="btn btn-primary mx-1" onClick={CopyText}>
          Copy Text
        </button>
      </div>

      <div
        className={`container text-${
          props.mode === "dark" ? "light" : "dark"
        } `}
      >
        <h1>Your Summary is : </h1>
        <p>
          {/* split(" ") will return array containing words */}
          Number of Words are : {text.split(" ").length}
          <br />
          {/* Returns total length of text */}
          Number of Characters are : {text.length}
        </p>
        <hr />
      </div>

      <div
        className={`container text-${
          props.mode === "dark" ? "light" : "dark"
        } `}
      >
        <h3>Preview :</h3>
        <br />
        <p value={Previewtext}>{Previewtext} </p>
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
