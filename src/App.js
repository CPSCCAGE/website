import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";

class CustInfo extends Component {
  render() {
    return (
      <div id="wrapper">
        <div className="centered">
          <h1>Order Form</h1>
        </div>
        <div className="forms">
          <form>
            <div>
              <label>
                Name: <input type="text" name="name" />
              </label>
            </div>
            <div>
              <label>
                Phone: <input type="text" name="phone" />
              </label>
            </div>
            <div>
              <label>
                Email: <input type="text" name="email" />
              </label>
            </div>
          </form>
        </div>
        <div id="name"> </div>
        <div id="phoneNumber"> </div>
        <div id="email"> </div>
        <div id="pickupDate"> </div>
        <div id="additionalNotes"> </div>
      </div>
    );
  }
}

class FillForm extends Component {
  constructor(props) {
    super(props);
    this.showStuff3 = this.createTDs.bind(this);
    this.createTRs = this.createTRs.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  state = {
    headers: ["Product Code", "Product Name", "Quantity", "Additional notes"],
    items: [
      ["Firstname ", "Lastname ", "", "hello "],
      ["Firstname ", "Lastname ", "", "hello "],
      ["Firstname ", "Lastname ", "", "hello "],
      ["Firstname ", "Lastname ", "", "hello "],
      ["Firstname ", "Lastname ", "", "hello "],
      ["Firstname1 ", "Lastname1 ", "", "hello1 "]
    ]
  };

  handleClick() {
    console.log(this.state.items[0]);
  }

  //creates all the Rows in given item as <tr> and children as <td>
  createTRs(items) {
    var rows = [];
    for (var i = 0; i < items.length; i++) {
      rows.push(<tr key={i}>{this.createTDs(items[i])}</tr>);
    }

    return rows;
  }

  //gives all the columns in a given param as array of tds
  createTDs(items) {
    let cols = [];
    for (var i = 0; i < items.length; i++) {
      cols.push(
        <td
          key={i}
          className="text-center "
          contentEditable={items[i] === "" ? true : false}
        >
          {items[i]}
        </td>
      );
    }
    return cols;
  }
  //gives all the columns in a given param as array of tds
  createTHs(items) {
    let cols = [];
    for (var i = 0; i < items.length; i++) {
      cols.push(
        <th key={i} className="text-center ">
          {items[i]}
        </th>
      );
    }
    return cols;
  }

  render() {
    return (
      <div>
        <div className="centered ">
          <table className="table table-editable table-bordered table-hover table-striped table-responsive-md">
            <thead>
              <tr>{this.createTHs(this.state.headers)}</tr>
            </thead>
            <tbody>{this.createTRs(this.state.items)}</tbody>
          </table>
        </div>
        <div className="centered ">
          <button onClick={this.handleClick}>Send Order</button>
        </div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div id="homePage">
        <CustInfo />
        <FillForm />
      </div>
    );
  }
}

export default App;
