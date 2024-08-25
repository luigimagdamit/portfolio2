import { useState, useEffect } from 'react'
import './App.css'
import { useAsciiText, bigMoneySw } from 'react-ascii-text';

function MyComponent({text}) {
  const asciiTextRef = useAsciiText({
    animationCharacters: "▒░█",
    animationCharacterSpacing: 1,
    animationDelay: 2000,
    animationDirection: "down",
    animationInterval: 100,
    animationLoop: false,
    fadeInOnly: true,
    animationSpeed: 30,
    font: bigMoneySw,
    text: text,
  });

  return <pre style = {{color: "#81c8be"}}ref={asciiTextRef}></pre>;
}

const Info = () => {
  return (
    <div>
      <p id='subtitle'><TypingAnimation textToType={"Hello, my name is Luigi Magdamit!"}/></p>
      <p>--</p>
      <p><TypingAnimation font = {""}textToType={"Computer Science M.S @ Georgia Institute of Technology (Dec. 2025)"}/></p>
      <p><TypingAnimation textToType={"Statistics & Data Science B.S @ University of California, Los Angeles (Dec. 2022)"}/></p>
      <p>--</p>
      <div className='toc'>
        <a href='https://www.google.com/'><p>About Me</p></a>
        <p>Projects</p>
        <p>Resume</p>
        <p>Blog</p>
        <p>Contact Me!</p>
      </div>
      <p>--</p>
      
    </div>
  )
}

function TypingAnimation({textToType, color, font}) {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const speed = 5; // Typing speed in milliseconds
  
  useEffect(() => {
    

    const timeoutId = setTimeout(() => {
      if (index < textToType.length) {
        setText((prevText) => prevText + textToType.charAt(index)); // Add next character
        setIndex((prevIndex) => prevIndex + 1); // Move to the next character
      }
    }, speed);

    // Clear timeout when component unmounts or when typing is finished
    return () => clearTimeout(timeoutId);
  }, [index]); // Re-run effect whenever index changes

  return (
    <div>
      <p style={{"color": color, "fontFamily": font}}>{text}</p>
    </div>
  );
}

function TypingAnimationH1({textToType}) {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const speed = 5; // Typing speed in milliseconds

  useEffect(() => {
    

    const timeoutId = setTimeout(() => {
      if (index < textToType.length) {
        setText((prevText) => prevText + textToType.charAt(index)); // Add next character
        setIndex((prevIndex) => prevIndex + 1); // Move to the next character
      }
    }, speed);

    // Clear timeout when component unmounts or when typing is finished
    return () => clearTimeout(timeoutId);
  }, [index]); // Re-run effect whenever index changes

  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
}

function Landing() {

  const [renderComponent, setRenderComponent] = useState(false);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setRenderComponent(true);
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, []); 

  return (
    <div 
      // contentEditable
    >
      <MyComponent text={["LOADING...", "WELCOME!"]}/>
      {renderComponent && <Info />}
      
    </div>
  )
}

const AboutMe = () => {
  const title = "About Me"
  const paragraph1 = "Hello, my name is Luigi Magdamit!"
  return (
    <div>
      <MyComponent text={["About Me"]}/>
      <TypingAnimation color="#c29df1" textToType={paragraph1}/>
      <TypingAnimation textToType={"I am a recent UCLA graduate with a strong background in programming and data science. I possess a diverse set of skills that includes proficiency in various programming languages such as Python, Javascript, Rust, Java, and C++. I also have a deep understanding of data analysis and visualization, which allows me to extract meaningful insights from complex datasets."}/>
      <TypingAnimation color = "#c29df1" textToType={"EDUCATION"}/>
      <TypingAnimation color = "#dc8a78" textToType={"Georgia Institute of Technology - MS in Computer Science (Expected Dec. 2025)"}/>
      <TypingAnimation textToType={"> CS6200: Graduate Introduction to Operating Systems"}/>
      <TypingAnimation textToType={"> CS6035: Introduction to Information Security"}/>
      <TypingAnimation textToType={"> CS6290: High Performance Computer Architecture"}/>
      <TypingAnimation textToType={"> CS6250: Computer Networks"}/>
      <p>----</p>
      <TypingAnimation color = "#dc8a78" textToType={"Univesity of California, Los Angeles (UCLA) - BS in Statistics & Data Science (2020-2022)"}/>
      <p>--</p>
      <div>
        <TypingAnimation color = "#c29df1" textToType={"TECHNOLOGIES"}/>
        <TypingAnimation color = "#dc8a78" textToType={"Low Level/Systems Programming"}/>
        <TypingAnimation textToType={"> C"}/>
        <TypingAnimation textToType={"> C++"}/>
        <TypingAnimation textToType={"> Rust"}/>
        <TypingAnimation color = "#dc8a78" textToType={"Web Development"}/>
        <TypingAnimation textToType={"> JavaScript/TypeScript"}/>
        <TypingAnimation textToType={"> React.js + React Native"}/>
        <TypingAnimation textToType={"> PostgreSQL"}/>
        <TypingAnimation textToType={"> Python"}/>
        <TypingAnimation textToType={"> Flask"}/>
        <TypingAnimation textToType={"> Firebase"}/>
        <TypingAnimation color = "#dc8a78" textToType={"Machine Learning / Statistical Analysis"}/>
        <TypingAnimation textToType={"> R"}/>
        <TypingAnimation textToType={"> Pandas"}/>
        <TypingAnimation textToType={"> Keras"}/>
      </div>
    </div>
  )
}


const Projects = () => {
  const title = "Projects"
  const paragraph1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt tempor fermentum. Vivamus urna arcu, tempor eu tincidunt sed, viverra tristique ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec blandit scelerisque eleifend. Vestibulum ac erat ligula. Fusce aliquet non risus eget sagittis. Maecenas rutrum, ex a convallis eleifend, dui metus rutrum libero, vel lobortis mi neque id nibh. Cras porttitor lorem at odio molestie dapibus."
  const projects = [

    {
      name: "Taro - Programming Language",
      tech: "C",
      p1: "Devised and implemented a custom programming language featuring control flow, dynamic typing, native array structures, enums, and hash maps",
      p2: "Developed a parser, interpreter, and runtime environment, incorporating lexing, syntax analysis, and internal data types",
      p3: "Engineered language constructs and error handling mechanisms to enhance readability, debugging, and developer experience."
    },
    {
      name: "Distributed File System",
      tech: "C++, gRPC, Protobuf",
      p1: "Designed DFS protocols to conduct file synchronization among multiple clients with gRPC and Protobuf",
      p2: "Integrated weakly consistent synchronization, reducing server traffic and increasing response time",
      p3: "Developed asynchronous service calls, facilitating real-time communication among client nodes and greatly increasing cache coherence"
    },
    {
      name: "Multi-Threaded File Transfer Library",
      tech: "C, Linux, TCP/IP",
      p1: "Engineered a file transfer server and client library in C language using POSIX threads and Linux System Calls",
      p2: "Implemented proper file handling mechanisms, reducing transfer errors and enforcing safe TCP/IP usage",
      p3: "Utilized POSIX threads to concurrently handle client connections, resulting in a 20\% increase in server throughput decrease in client response times."
    },
    {
      name: "MuseAI - LLM Musical Content Generation",
      tech: "JavaScript, React.js, Node.js, Express",
      p1: "Developed LLM based tool to generate musical content, resulting in an increase in content creation speed",
      p2: "Implemented proper file handling mechanisms, reducing transfer errors and enforcing safe TCP/IP usageDevised middleman application to efficiently format Spotify API data for utilization with LLM's, reducing preprocessing time and enabling seamless integration with React tool.",
      p3: ""
    },
    {
      name: "Malware Classifier",
      tech: "Python, scikit-learn, numpy, pandas",
      p1: "Analyzed and classified malware data using Python, leveraging scikit-learn, NumPy, and pandas for efficient data manipulation and machine learning.",
      p2: "Developed and trained models on the CLAMP dataset to enhance malware classification accuracy.",
      p3: "Implemented data preprocessing, feature extraction, and model evaluation techniques to optimize performance and reliability."
    },
    // {
    //   name: "",
    //   tech: "",
    //   p1: "",
    //   p2: "",
    //   p3: ""
    // },
    
  ]
  return (
    <div>
      <MyComponent text={[title]}/>
      {projects.map(item => (
        <div>
          
          <TypingAnimation color="#e78284" textToType={item.name}/>
          <TypingAnimation textToType={"> Built with " + item.tech}/>
          <TypingAnimation textToType={"> " + item.p1}/>
          <TypingAnimation textToType={"> " + item.p2}/>
          <TypingAnimation textToType={"> " + item.p3}/>
          <p>----</p>
        </div>
      ))}
      
    </div>
  )
}


const Help = () => {
  const title = "Help"
  const typeColor = "#df8e1d"
  const paragraph1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt tempor fermentum. Vivamus urna arcu, tempor eu tincidunt sed, viverra tristique ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec blandit scelerisque eleifend. Vestibulum ac erat ligula. Fusce aliquet non risus eget sagittis. Maecenas rutrum, ex a convallis eleifend, dui metus rutrum libero, vel lobortis mi neque id nibh. Cras porttitor lorem at odio molestie dapibus."
  return (
    <div className='help'>
      <div className='banner'>

        <TypingAnimationH1 textToType={"LUIGI ⚄ MAGDAMIT"} />
        <div>
          <p></p>
          <p></p>
          <p></p>
          <a href='https://www.linkedin.com/in/luigi-magdamit/'><TypingAnimation textToType={"☏ LinkedIn"}/></a>
          <a href='https://github.com/luigimagdamit'><TypingAnimation textToType={"☀ GitHub"}/></a>
          <TypingAnimation textToType={"❖ luigiantonmagdamit@gmail.com"}/>
        </div>
      </div>
      
      <p className='version'>version 0.1.2</p>
      
      <p>---</p>
      <p></p>
      <p></p>
      <p></p>
      <TypingAnimation color = {typeColor} className="instruct" textToType={"Type 'start' to display landing page (current)"}/>
      <TypingAnimation color = {typeColor} className="instruct" textToType={"Type 'about' to display about page"}/>
      <TypingAnimation color = {typeColor}  className="instruct" textToType={"Type 'projects' to display all my projects!"}/>
      <p>---</p>
 
    </div>
  )
}
const Terminal = () => {
  const defaultObject = {type: "p", content: "user@luigimagdamit.com ~ $"}
  const [output, setOutput] = useState([{type: "p", content: "user@luigimagdamit.com ~ $start"}, {type: "start", content: ""}])
  const [input, setInput] = useState(defaultObject.content)
  const [renderLanding, setRenderLanding] = useState(false)
  
  useEffect(() => {
    const specialCommands = ["start", "landing", "about", "projects", "unknown"]
    const command = output.slice(-1)[0]
    if (output.length != 0 && !specialCommands.includes(command.type)) {
      const command = output.slice(-1)[0]
      const keyword = ("~ $")
      const index = command.content.indexOf("~ $")

      const cmd = (command.content.substring(index + keyword.length).trim())
      console.log(cmd)
      if (cmd === "run") {
        const landObj = {type: "landing"}
        setOutput([landObj])
      }
      if (cmd == "about") {
        const aboutObj = {type: "about"}
        setOutput([aboutObj])
      }
      if (cmd == "start") {
        const aboutObj = {type: "start"}
        setOutput([aboutObj])
      }
      if (cmd == "help") {
        const aboutObj = {type: "start"}
        setOutput([aboutObj])
      }
      if (cmd == "projects") {
        const specialObj = {type: "projects"}
        console.log("projects")
        setOutput([specialObj])
      } //else {
      //   setOutput([...output, {type: "unknown", content: "Error: Unknown Command"}])
      // }
      setInput(defaultObject.content)
      console.log("eof")
    } 
    
  }, [output])
  /**
   * Renders a specific line of output depending on type
   * @param {object} line 
   * @param {number} index 
   * @returns JSX
   */
  const renderLine = (line, index) => {
    switch(line.type) {
      case "start":
        return <Help />
      case "p":
        return <p key = {index}>{line.content}</p>
      case "landing":
        return <Landing />
      case "about":
        return <AboutMe />
      case "projects": 
        return <Projects />
      case "unknown":
        return <p>Error: Unrecognized command</p>
      default: 
        return null;
    }
  }

  /**
   * handles changes in the current input div
   * @param {} event 
   */
  const handleChange = (event) => {
    console.log(event.target.value.length)
    console.log(defaultObject.content.length)
    // if (input.slice(-1) !== "$") {
    //   setInput(event.target.value)
    //   console.log(input)
    // } else {
    //   if (event.target.value.length > input.length) {
    //     setInput(event.target.value)
    //   } 
    // }

    if (event.target.value.length + 1 > defaultObject.content.length) {
      setInput(event.target.value)
    }
    
  }

  const handleKeyDown = (event) => {
    if (event.key == "Enter") {
      event.preventDefault();
      const newOutput = {
        type: "p",
        content: input
      }
      setOutput([...output, newOutput])

    }
  }
  return (
    <div className='terminal'>
      <div className='output'>
        {output.map((line, index) => renderLine(line, index))}
      </div>
      <form 
        className='input' 
      >
        <textarea
          value={input}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </form>
    </div>
  )
}
const Bottom = () => {
  return (
    <div className='bottom'>
      <p>© Luigi Magdamit 2024</p>
      <p>Made with Love</p>
    </div>
  )
}
function App() {

  return (
    <div>
      {/* <Landing />
      <h1><AboutMe /></h1> */}
      <div className='topbar'>
        <h1>[1] Normal Website</h1>
        <h1>[2] About</h1>
        <h1>[3] Projects</h1>
        <h1>[4] Contact Me</h1>
      </div>
      <Terminal />
      <Bottom />
    </div>
    
  )
}

export default App
