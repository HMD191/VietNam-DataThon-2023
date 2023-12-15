// import React, { Component } from "react";
// import Slide from "react-reveal";

// class Resume extends Component {
//   getRandomColor() {
//     let letters = "0123456789ABCDEF";
//     let color = "#";
//     for (let i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   }

//   render() {
//     if (!this.props.data) return null;

//     const skillmessage = this.props.data.skillmessage;
//     const education = this.props.data.education.map(function (education) {
//       return (
//         <div key={education.school}>
//           <h3>{education.school}</h3>
//           <p className="info">
//             {education.degree} <span>&bull;</span>
//             <em className="date">{education.graduated}</em>
//           </p>
//           <p>{education.description}</p>
//         </div>
//       );
//     });

//     const work = this.props.data.work.map(function (work) {
//       return (
//         <div key={work.company}>
//           <h3>{work.company}</h3>
//           <p className="info">
//             {work.title}
//             <span>&bull;</span> <em className="date">{work.years}</em>
//           </p>
//           <p>{work.description}</p>
//         </div>
//       );
//     });

//     const skills = this.props.data.skills.map((skills) => {
//       const backgroundColor = this.getRandomColor();
//       const className = "bar-expand " + skills.name.toLowerCase();
//       const width = skills.level;

//       return (
//         <li key={skills.name}>
//           <span style={{ width, backgroundColor }} className={className}></span>
//           <em>{skills.name}</em>
//         </li>
//       );
//     });

//     return (
//       <section id="resume">
//         <Slide left duration={1300}>
//           <div className="row education">
//             <div className="three columns header-col">
//               <h1>
//                 <span>Education</span>
//               </h1>
//             </div>

//             <div className="nine columns main-col">
//               <div className="row item">
//                 <div className="twelve columns">{education}</div>
//               </div>
//             </div>
//           </div>
//         </Slide>

//         <Slide left duration={1300}>
//           <div className="row work">
//             <div className="three columns header-col">
//               <h1>
//                 <span>Work</span>
//               </h1>
//             </div>

//             <div className="nine columns main-col">{work}</div>
//           </div>
//         </Slide>

//         <Slide left duration={1300}>
//           <div className="row skill">
//             <div className="three columns header-col">
//               <h1>
//                 <span>Skills</span>
//               </h1>
//             </div>

//             <div className="nine columns main-col">
//               <p>{skillmessage}</p>

//               <div className="bars">
//                 <ul className="skills">{skills}</ul>
//               </div>
//             </div>
//           </div>
//         </Slide>
//       </section>
//     );
//   }
// }

// export default Resume;

import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
// import Zmage from "react-zmage";
import Fade from "react-reveal";
import Portfolio from './Portfolio';

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      newMessage: '',
    };
  }

  connectToBE = () =>  {
    const { newMessage, messages } = this.state;
    // state = {
    //   responseFromBE: [], // Your state here
    // };
    // Fetch previous messages from the backend when component mounts
    // Fetch request to get previous messages from the backend
    // Example

      // Now send the new message to the backend
    fetch('http://localhost:8082/api/sendMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: newMessage }),
    })
    .then(response => response.json())
    .then(data => {
      // data={this.state.resumeData.main}
      // <Portfolio responseFromBE={data.responseArray} />
      // Handle the response if needed
      this.setState({ responseFromBE: [] });
      this.setState({ responseFromBE: data.responseArray });
      // <Portfolio responseFromBE={this.state.responseFromBE} />
      // console.log(this.props.responseFromBE);
      console.log('Message sent:', this.state.responseFromBE);
    })
    .catch(error => {
      console.error('Error sending message:', error);
      // Revert the UI state or show an error message in case of an error
      // For simplicity, this example does not handle the revert case
    });
  }

  messageValid = (txt) => txt && txt.replace(/\s/g , '').length;
  submitMessage = () => {
    const { newMessage, messages } = this.state;
    
    if(this.messageValid(this.state.newMessage)) {
      this.connectToBE();
      // console.log(newMessage);
      // Optimistically update the UI with the new message before sending it to the backend
      document.getElementById('chattextbox').value = '';
      const updatedMessages = [...messages, newMessage];
      // newMessage = '';
      this.setState({
        messages: updatedMessages,
        newMessage: '', // Clear the input field after sending the message
      });
    }
  }

  userTyping = (e) => {
    const { keyCode, target } = e;
    const newMessage = target.value;

    (e.keyCode === 13) ? this.submitMessage() : this.setState({newMessage});
  };
  render() {
    const { messages, newMessage } = this.state;
    const {classes} = this.props;

    return (
      <section id='inputform'>
        {/* <Fade left duration={1000} distance="40px"> */}
          <div style={{marginLeft: '50px' , marginRight: '50px'}}>
            {/* Display previous messages */}
            <div style={chatStyle}>
              <h2>Previous Messages</h2>
              <ul style={messageListStyle}>
                {messages.map((message, index) => (
                  <li key={index} style={messageStyle}>{message}</li>
                ))}
              </ul>
            </div>

            {/* Input form for new message */}
            <div style={inputFormStyle}>
              <input placeholder = 'Type you message..'
                onKeyUp = {(e) => this.userTyping(e)}
                id = 'chattextbox'
                style={inputStyle}
                // onFocus = {this.userClickedInput}
                >
              </input>
              <button onClick={this.submitMessage} style={buttonStyle}>Send</button>
            </div>
          </div>
        {/* </Fade> */}
      </section>
    );
  }
}
// Styling
const chatStyle = {
  backgroundColor: '#fff',
  height: '300px', // Adjust height as needed
  width: 'flex', // Adjust width as needed
  // margin: '50px',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  overflowY: 'scroll', // Enable vertical scrolling if content exceeds height
};

const messageListStyle = {
  listStyleType: 'none',
  padding: '0',
  margin: '0',
};

const messageStyle = {
  borderBottom: '1px solid #eee',
  padding: '8px 0',
};

const inputFormStyle = {
  marginTop: '20px',
  display: 'flex',
  alignItems: 'center',
};

const inputStyle = {
  flex: '1',
  padding: '8px',
  marginRight: '10px',
  border: '1px solid #ccc',
  borderRadius: '3px',
};

const buttonStyle = {
  padding: '8px 16px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '3px',
  cursor: 'pointer',
};

export default InputForm;