import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App()
{
return (
  <div className = "card">
  <Avatar/>
  <Intro/>
  <SkillList />
  </div>
);
}


function Avatar(){
  return<img className="avatar" src="photo.jpeg" alt="Godspower Mukoro"/>;
}

function Intro(){
  return (
  <div>
    <h1>Godspower Mukoro</h1>
    <p>Passionate Frontend Software Engineer 
      skilled in C, Python, and JavaScript, 
      with a focus on creating elegant and 
      responsive user interfaces using React. 
      Committed to continuous learning and 
      staying updated with industry trends. 
      Enthusiastic collaborator with strong 
      communication skills. Eager to contribute 
      technical expertise to innovative projects 
      and enhance user experiences. Enjoys leisure
       time by engaging in gaming, adding a touch 
       of strategic thinking and creativity to 
       relaxation
       </p>
  </div>
  );
}

function SkillList(){
  return (
  <div className="skill-list">
     <Skill skill="HTML/CSS" emoji="💪" color='lightblue' />
    <Skill skill="React" emoji="💪" color='#123456'/>
    <Skill skill="JavaScript" emoji="💪" color="pink" />
    <Skill skill="C-Programming" emoji="👶" color="yellow" />
    <Skill skill="Web Design" emoji="💪" color='blue' />
    <Skill skill="Python" emoji="💪" color='green' />
    <Skill skill="Git/Github" emoji="💪" color='gold' />

    </div>
  );
}

function Skill(props){
  return<div className="skill" style={{backgroundColor: props.color}}>
    <span>{props.skill}</span>
    <span>{props.emoji}</span>
  </div>
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
