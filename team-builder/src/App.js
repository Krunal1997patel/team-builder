import React, {useState} from 'react';
import TeamForm from './components/TeamForm';
import TeamCard from './components/TeamCard';

import './App.css';

function App() {

  const [info, setInfo] = useState([]);

  const addNewMember = teamInfo =>{
    setInfo([...info, teamInfo])
  }


  return (
    <div className="App">
     <h1>Team Member</h1>
     <TeamForm  addNewMember={addNewMember}/>
     <TeamCard info={info}/>
    </div>
  );
}

export default App;
