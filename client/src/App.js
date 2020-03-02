import React, { Component } from "react";
import axios from "axios";
import Form from "./Components/Form";
//const axios = require("axios").default;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: " " };
  }

  callAPI() {
    // fetch("http://localhost:5000/testAPI")
    //   .then(res => res.text())
    //   .then(res => this.setState({ apiResponse: res }))
    //   .catch(err => err);
    // axios
    //   .get("http://localhost:5000/testAPI")
    //   // .then(response => console.log(response.data.text))
    //   // .then(response => console.log(response.data))
    //   .then(response => this.setState({ apiResponse: response.data }))
    //   .catch(err => err);
  }

  componentDidMount() {
    //this.callAPI();
    // axios
    //   .post("http://192.168.99.100:5000/testAPI/testPOST", {
    //     dummyData: "some data"
    //   })
    //   .then(response => {
    //     console.log(response);
    //     console.log(response.data);
    //   })
    //   .catch(err => err);
    // axios
    //   .post("http://localhost:5000/testAPI/testPOST", {
    //     dummyData: "some data"
    //   })
    //   .then(response => {
    //     console.log(response);
    //     console.log(response.data);
    //   })
    //   .catch(err => err);
  }

  render() {
    return (
      <div>
        <Form />
      </div>
    );
  }
}

export default App;
