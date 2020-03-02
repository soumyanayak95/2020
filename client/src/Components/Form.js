import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import Deploy from "./Deploy";
import { Formik } from "formik";

function Form() {
  const [r, saveResponse] = useState(["initial response"]);
  //const listResponse = r.map(r => <li>{r}</li>);

  // function handleSubmit(e) {
  //   console.log(e.target.url.value);
  //   axios
  //     .post("http://localhost:5000/testAPI/", {
  //       // url: e.target.url.value
  //       url: e
  //     })
  //     .then(res => saveResponse(r.push("response from node...")))
  //     // .then(response => {

  //     //   console.log(response);
  //     //   console.log(response.data);
  //     // })
  //     .then(console.log(r))
  //     .catch(err => err);
  // }

  return (
    <Router>
      <div>
        <Formik
          initialValues={{ url: " " }}
          onSubmit={(data, event) => {
            console.log(event.target.name.value);
            console.log("submit: ", data);
            axios
              .post("http://localhost:5000/testAPI/", {
                // url: e.target.url.value
                url: data
              })
              .then(res => saveResponse(r.push("response from node...")))
              .then(console.log(r))
              .catch(err => err);
          }}
        >
          {({ values, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <label>
                Git Repository URL:
                <input type="text" name="url" />
              </label>
              <button type="submit" value={values.url}>
                Build Image{" "}
              </button>
            </form>
          )}
        </Formik>
        {/* <ul>
          {r.map(r => (
            <li>{r}</li>
          ))}
        </ul> */}
      </div>
    </Router>
  );
}

export default Form;
