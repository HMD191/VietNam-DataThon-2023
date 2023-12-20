import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import InputForm from "./Components/InputForm";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      responseFromBE: null,
      resumeData: {}
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  // this.setState({ responseFromBE: data.responseArray });
  // {"image": "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg" , "title": "imageee"}

  updateResponseFromBE = (newResponseData) => {
    this.setState({ responseFromBE: newResponseData });
  };

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main} />
        <InputForm
          data={this.state.resumeData.resume} 
          updateResponseFromBE={this.updateResponseFromBE}
        />
        <Portfolio responseFromBE={this.state.responseFromBE} />
        <About data={this.state.resumeData.main} />
        {/* <Contact data={this.state.resumeData.main} /> */}
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default App;
