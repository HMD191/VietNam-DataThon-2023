import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (project) {
      let projectImage = "images/portfolio/" + project.image;

      return (
        
          <div>
            <img alt={project.title} src={projectImage} />
          </div>
        
      );
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className='relative flex items-center'>
            <h1>Result</h1>
            {this.props.data.projects.map((item) => (
              <img src={"images/portfolio/" + item.image} alt={item.title} />
            ))}
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;

// Function to chunk an array into groups
function chunkArray(arr, size) {
  const chunkedArr = [];
  let index = 0;
  while (index < arr.length) {
    chunkedArr.push(arr.slice(index, size + index));
    index += size;
  }
  return chunkedArr;
}

    // return (
    //   <section id="portfolio">
    //     <Fade left duration={1000} distance="40px">
    //       <div className="row">
    //         <div className="twelve columns collapsed">
    //           <h1>Result</h1>

    //           <div
    //             id="portfolio-wrapper"
    //             className="bgrid-quarters s-bgrid-thirds cf"
    //           >
    //             {projects}
    //           </div>
    //         </div>
    //       </div>
    //     </Fade>
    //   </section>
    // );
