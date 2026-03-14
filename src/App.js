import Project from './projectrepo/project.js';
import './App.css';

function App() {
  return (
    <div id ='app'>
      <div id='header'> 
        <div id='headernexcode'>
          <p>about us</p>
          <p>projects</p>
          <p>members</p>
          <p>contact</p>
        </div>
      </div>
      <div id='body'>
        <h1 id='name'>NexCode IT Community</h1>
        <p id='projectsWord'>Projects</p>
        <Project />
        <Project />
      </div>
    </div>
    
  );
}

export default App;
