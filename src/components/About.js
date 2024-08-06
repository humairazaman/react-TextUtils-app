import React from "react";

function About(props) {
  return (
    <div
      className="container my-3"
      style={{
        backgroundColor: props.mode === "dark" ? "#042743" : "white",
        color: props.mode === "dark" ? "white" : "black",
      }}
    >
      <h1>About Us</h1>
      <p>
        Welcome to TextUtils! This application is designed to help you
        manipulate and analyze your text effortlessly. Whether you need to
        convert text to uppercase, lowercase, capitalize the first letter of
        each word, or remove extra spaces, TextUtils has got you covered.
      </p>
      <h2>Features</h2>
      <ul>
        <li>Convert text to uppercase or lowercase</li>
        <li>Capitalize the first letter of each word</li>
        <li>Remove extra spaces from text</li>
        <li>Copy text to clipboard</li>
        <li>Clear text area with a single click</li>
      </ul>
      <h2>About the Developer</h2>
      <p>
        This application was developed by [Your Name]. I am passionate about
        creating useful and user-friendly applications. Feel free to contact me
        if you have any questions or feedback.
      </p>
      <h2>Contact</h2>
      <p>
        You can reach me at:{" "}
        <a href="mailto:your.email@example.com">your.email@example.com</a>
      </p>
    </div>
  );
}

export default About;
