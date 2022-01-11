import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import Amplify from "aws-amplify";
import aws_exports from "./aws-exports";
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div className="App" style={{backgroundColor: "black"}}>
        <div className="card-content card-background-color-dark" id="menu">
          <div className="content">
            <h2 className="has-text-bold has-text-light">Menu</h2>
          </div>
          <div className="container py-6 px-6">
            <div className="columns">
              <div className="column is-half">
                <p
                  style={{ padding: "10px 0", borderRadius: "5px" }}
                  className="has-background-color has-text-centered has-text-light"
                >
                  Drinks
                </p>
                <div className="column is-centered">
                  <img src="/image/modern menu drink 1.png" alt="" />
                </div>
                <div className="column is-centered">
                  <img src="/image/modern menu drink 2.png" alt="" />
                </div>
              </div>
              <div className="column is-half">
                <p
                  style={{ padding: "10px 0", borderRadius: "5px" }}
                  className="has-background-color has-text-centered has-text-light"
                >
                  Foods
                </p>
                <div className="column is-centered">
                  <img src="/image/modern menu food.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
