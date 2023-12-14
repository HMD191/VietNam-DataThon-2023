import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";

let id = 0;
class Portfolio extends Component {
  render() {
    // if(!this.props.responseFromBE)
    //   return null;
    if (!this.props.data) return null;

    // const hats = this.props.responseFromBE.hats.map(function (project) {
    const projects = this.props.data.projects.map(function (project) {
      let projectImage = "images/portfolio/" + project.image;
      // let projectImage = project.image;

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
              {projects}
            </div>

            <h1>shirts</h1>
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
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;


// import React, { Component } from "react";
// import Zmage from "react-zmage";
// import Fade from "react-reveal";

// let id = 0;
// class Portfolio extends Component {
//   render() {
//     const { messages } = this.props;
//     if (!this.props.data) return null;

//     const projects = this.props.data.projects.map(function (project) {
//       let projectImage = "images/portfolio/" + project.image;

//       return (
//         <div key={id++} className="columns portfolio-item">
//           <div className="item-wrap">
//             <Zmage alt={project.title} src={projectImage} />
//             <div style={{ textAlign: "center" }}>{project.title}</div>
//           </div>
//         </div>
//       );
//     });

//     return (
//       <section id="portfolio">
//         <Fade left duration={1000} distance="40px">
//           <div className="row">
//             <div className="twelve columns collapsed">
//               <h1>Result</h1>

//               <div
//                 // id="portfolio-w rapper"
//                 // className="bgrid-quarters s-bgrid-thirds cf"
//               >
//                 {projects}
//               </div>
//             </div>
//           </div>
//           {/* <div className='relative flex items-center'>
//             <h1>Result</h1>
//             {this.props.data.projects.map((item) => (
//               <img src={"images/portfolio/" + item.image} alt={item.title} />
//             ))}
//           </div> */}
//         </Fade>
//       </section>
//     );
//   }
// }

// export default Portfolio;

// // Function to chunk an array into groups
// function chunkArray(arr, size) {
//   const chunkedArr = [];
//   let index = 0;
//   while (index < arr.length) {
//     chunkedArr.push(arr.slice(index, size + index));
//     index += size;
//   }
//   return chunkedArr;
// }

// import React, { Component } from "react";
// import Zmage from "react-zmage";
// import Fade from "react-reveal";

// let id = 0;
// class Portfolio extends Component {
//   render() {
//     if (!this.props.data) return null;

//     const projects = this.props.data.projects.map(function (projects) {
//       let projectImage = "images/portfolio/" + projects.image;

      // return (
      //   <div key={id++} className="columns portfolio-item">
      //     <div className="item-wrap">
      //       <Zmage alt={projects.title} src={projectImage} />
      //       <div style={{ textAlign: "center" }}>{projects.title}</div>
      //     </div>
      //   </div>
      // );
//     });


//     return (
//       <section id="portfolio">
//         <Fade left duration={1000} distance="40px">
          // <div className="row">
          //   <div className="twelve columns collapsed">
          //     <h1>Check Out Some of My Works.</h1>

          //     <div
          //       id="portfolio-wrapper"
          //       className="bgrid-quarters s-bgrid-thirds cf"
          //     >
          //       {projects}
          //     </div>
          //   </div>
//           </div>
//         </Fade>
//       </section>
//     );
//   }
// }

// export default Portfolio;