import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";

let id = 0;
class Portfolio extends Component {

  // constructor(props) {
  //   super(props);
  //   console.log("constructor: ", this.props.responseFromBE);
  //   this.state = {
  //     responseFromBEState: this.props.responseFromBE
  //   };
  // }

  // componentDidMount() {
  //   this.interval = setInterval(() => {
  //     // Call a function to fetch updated data every second
  //     // For example:
  //     // this.fetchUpdatedData();
  //     console.log('Re-rendering every 1 second');
  //     console.log("componentDidMount: ", this.props.responseFromBE);
  //     console.log("componentDidMount: ", this.state.responseFromBEState);

  //     if (this.props.responseFromBE !== this.state.responseFromBEState) {
  //       this.setState({
  //         responseFromBEState: this.props.responseFromBE
  //       });
  //       this.forceUpdate();
  //       console.log("responseFromBE has changed:", this.props.responseFromBE);
  //     }
  //      // Force re-render
  //   }, 2000);
  // }

  // componentWillUnmount() {
  //   clearInterval(this.interval); // Clear the interval on component unmount
  // }


  render() {
    console.log("oke1");
    console.log(this.props.responseFromBE);
    if(!this.props.responseFromBE)
      return null;

    console.log("oke");
    // if (!this.props.data) return null;

    const hats = this.props.responseFromBE.map(function (project) {
    // const projects = this.props.data.projects.map(function (project) {
      // let projectImage = "images/portfolio/" + project.image;
      let projectImage = project.image;

      return (
        <div style={{ display: 'inline-block', marginRight: '10px' , marginLeft: '10px'}}>
          <Zmage alt={project.title} src={projectImage} style={{ width: '100%', maxWidth: '200px' }} />
          <div style={{ textAlign: "center" }}>{project.title}</div>
        </div>
      );
    });

    // const shirts = this.props.responseFromBE.shirts.map(function (project) {
    //   let projectImage = "images/portfolio/" + project.image;

    //   return (
    //     <div style={{ display: 'inline-block', marginRight: '10px' , marginLeft: '10px'}}>
    //       <Zmage alt={project.title} src={projectImage} style={{ width: '100%', maxWidth: '200px' }} />
    //       <div style={{ textAlign: "center" }}>{project.title}</div>
    //     </div>
    //   );
    // });

    // const pants = this.props.responseFromBE.pants.map(function (project) {
    //   let projectImage = "images/portfolio/" + project.image;
    //   // let projectImage = project.image;

    //   return (
    //     <div style={{ display: 'inline-block', marginRight: '10px' , marginLeft: '10px'}}>
    //       <Zmage alt={project.title} src={projectImage} style={{ width: '100%', maxWidth: '200px' }} />
    //       <div style={{ textAlign: "center" }}>{project.title}</div>
    //     </div>
    //   );
    // });

    // const shoes = this.props.responseFromBE.shoes.map(function (project) {
    //   let projectImage = "images/portfolio/" + project.image;
    //   // let projectImage = project.image;

    //   return (
    //     <div style={{ display: 'inline-block', marginRight: '10px' , marginLeft: '10px'}}>
    //       <Zmage alt={project.title} src={projectImage} style={{ width: '100%', maxWidth: '200px' }} />
    //       <div style={{ textAlign: "center" }}>{project.title}</div>
    //     </div>
    //   );
    // });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div>
            <h1>hats</h1>
            <div className="smoothscroll" style={{ whiteSpace: 'nowrap', overflowX: 'auto', WebkitOverflowScrolling: 'touch'}}>
              {hats}
            </div>

            {/* <h1>shirts</h1>
            <div className="smoothscroll" style={{ whiteSpace: 'nowrap', overflowX: 'auto' }}>
              {projects}
            </div>

            <h1>pants</h1>
            <div className="smoothscroll" style={{ whiteSpace: 'nowrap', overflowX: 'auto' }}>
              {projects}
            </div>

            <h1>shoes</h1>
            <div className="smoothscroll" style={{ whiteSpace: 'nowrap', overflowX: 'auto' }}>
              {projects}
            </div> */}
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;

