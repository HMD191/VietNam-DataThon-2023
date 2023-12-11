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

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      newMessage: '',
    };
  }

  componentDidMount() {
    // Fetch previous messages from the backend when component mounts
    // Fetch request to get previous messages from the backend
    // Example:
    fetch('/api/messages')
      .then(response => response.json())
      .then(data => {
        this.setState({ messages: data });
      })
      .catch(error => {
        console.error('Error fetching messages:', error);
      });
  }

  handleInputChange = (e) => e.keyCode === 13 ? this.handleSubmit : this.setState({ newMessage: e.target.value });
  
  messageValid = (txt) => txt && txt.replace(/\s/g , '').length;
  submitMessage = () => {
    if(this.messageValid(this.state.newMessage)) {
      document.getElementById('chattextbox').value = '';
    }
  }

  handleSubmit = (e) => {
    this.submitMessage();
    // if(e.)
    // e.preventDefault();
    // const { newMessage, messages } = this.state;
  
    // // Optimistically update the UI with the new message before sending it to the backend
    // const updatedMessages = [...messages, { text: newMessage, id: Date.now() }];
  
    // this.setState({
    //   messages: updatedMessages,
    //   newMessage: '', // Clear the input field after sending the message
    // });
  
    // Now send the new message to the backend
    // fetch('/api/sendMessage', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ message: newMessage }),
    // })
    // .then(response => response.json())
    // .then(data => {
    //   // Received a response (data) from the backend
    //   // If needed, update the UI again based on the backend response
    //   // For example, if the backend returns an ID for the new message, update the UI with that ID
    //   const messageId = data.id; // Assuming the backend sends an ID for the new message
  
    //   // Update the UI again with the received message ID if necessary
    //   const updatedMessagesWithId = updatedMessages.map(message => {
    //     if (message.text === newMessage) {
    //       return { ...message, id: messageId };
    //     }
    //     return message;
    //   });
  
    //   this.setState({ messages: updatedMessagesWithId });
    // })
    // .catch(error => {
    //   console.error('Error sending message:', error);
    //   // If there's an error from the backend, you might revert the UI state or show an error message
    //   // For simplicity, this example does not handle the revert case
    // });
  };

  userTyping = (e) => (e.keyCode === 13) ? this.submitMessage() : this.setState({ newMessage: e.target.value });

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
            {/* <form onSubmit={this.handleSubmit} style={inputFormStyle} id='chattextbox'>
              <input
                type="text"
                value={newMessage}
                onChange={this.handleInputChange}
                placeholder="Enter your message..."
                style={inputStyle}
              />
              <button type="submit" style={buttonStyle}>Send</button>
            </form> */}
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