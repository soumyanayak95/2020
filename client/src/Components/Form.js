import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import Deploy from "./Deploy";
import { useFormik } from "formik";

function Form() {
  const [r, saveResponse] = useState(["initial response"]);
  const listResponse = r.map(r => <li>{r}</li>);

  function handleSubmit(e) {
    console.log(e.target.url.value);
    axios
      .post("http://localhost:5000/testAPI/", {
        // url: e.target.url.value
        url: e.target.url.value
      })
      //.then(res => saveResponse(r.push("response from node...")))
      // .then(response => {

      //   console.log(response);
      //   console.log(response.data);
      // })
      .then(res => console.log(res))
      .catch(err => err);
  }

  // const formik = useFormik({
  //   initialValues: {
  //     url: ""
  //   },
  //   onSubmit: values => {
  //     alert(JSON.stringify(values, null, 2));
  //     console.log("submit: ", values.url);
  //     axios
  //       .post("http://localhost:5000/testAPI/", {
  //         // url: e.target.url.value
  //         url: values
  //       })
  //       .then(res => saveResponse(r.push("response from node...")))
  //       .then(console.log(r))
  //       .catch(err => err);
  //   },
  //   onReset: values => {
  //     console.log("on reset !!!!");
  //   }
  // });

  return (
    <Router>
      <div>
        <form>
          <label>
            Git Repository URL:
            <input type="text" name="url" />
          </label>
          <button type="submit" onClick={handleSubmit}>
            Build Image{" "}
          </button>
        </form>
        <ul>
          {r.map(r => (
            <li>{r}</li>
          ))}
        </ul>
      </div>
    </Router>
  );
}

export default Form;
