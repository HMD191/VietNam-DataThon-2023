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

    let accessories = null;
    if(this.props.responseFromBE.accessories)
      accessories = this.props.responseFromBE.accessories.map(function (project) {
        let projectImage = project.image;
        let link = project.link

        return (
          <div style={{ display: 'inline-block', marginRight: '10px' , marginLeft: '10px'}}>
            <a href={link} target="_blank" rel="noopener noreferrer" style={{ display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', width: '200px' }}>
              <img alt={project.title} src={projectImage} style={{ width: '100%'}} />
              <div style={{ textAlign: 'center' }}>{project.title}</div>
            </a>
          </div>
        );
      });

    let shirts = null;
    if(this.props.responseFromBE.shirts)
      shirts = this.props.responseFromBE.shirts.map(function (project) {
        let projectImage = project.image;
        let link = project.link

        return (
          <div style={{ display: 'inline-block', marginRight: '10px' , marginLeft: '10px'}}>
              <a href={link} target="_blank" rel="noopener noreferrer" style={{ display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', width: '200px' }}>
                <img alt={project.title} src={projectImage} style={{ width: '100%', maxWidth: '200px' }} />
                <div style={{ textAlign: 'center' }}>{project.title}</div>
              </a>
          </div>
        );
      });

    let pants = null;
    if(this.props.responseFromBE.pants)
      pants = this.props.responseFromBE.pants.map(function (project) {
        let projectImage = project.image;
        let link = project.link

        return (
          <div style={{ display: 'inline-block', marginRight: '10px' , marginLeft: '10px'}}>
              <a href={link} target="_blank" rel="noopener noreferrer" style={{ display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', width: '200px'}}>
                <img alt={project.title} src={projectImage} style={{ width: '100%', maxWidth: '200px' }} />
                <div style={{ textAlign: 'center' }}>{project.title}</div>
              </a>
          </div>
        );
      });

    let shoes = null;
    if(this.props.responseFromBE.shoes)
      shoes = this.props.responseFromBE.shoes.map(function (project) {
        let projectImage = project.image;
        let link = project.link

        return (
          <div style={{ display: 'inline-block', marginRight: '10px' , marginLeft: '10px'}}>
              <a href={link} target="_blank" rel="noopener noreferrer" style={{ display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', width: '200px'}}>
                <img alt={project.title} src={projectImage} style={{ width: '100%', maxWidth: '200px' }} />
                <div style={{ textAlign: 'center' }}>{project.title}</div>
              </a>
          </div>
        );
      });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div>

            {this.props.responseFromBE.shirts && (
              <div>
                <h1>shirts</h1>
                <div className="smoothscroll" style={{ whiteSpace: 'nowrap', overflowX: 'auto' }}>
                  {shirts}
                </div>
              </div>
            )}


            {this.props.responseFromBE.pants && (
              <div>
                <h1>Pants</h1>
                <div className="smoothscroll" style={{ whiteSpace: 'nowrap', overflowX: 'auto' }}>
                  {pants}
                </div>
              </div>
            )}

            {this.props.responseFromBE.shoes && (
              <div>
                <h1>Shoes</h1>
                <div className="smoothscroll" style={{ whiteSpace: 'nowrap', overflowX: 'auto' }}>
                  {shoes}
                </div>
              </div>
            )}

            {this.props.responseFromBE.accessories && (
              <div>
                <h1>Others</h1>
                <div className="smoothscroll" style={{ whiteSpace: 'nowrap', overflowX: 'auto' }}>
                  {accessories}
                </div>
              </div>
            )}

          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;

