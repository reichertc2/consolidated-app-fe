import { useState } from 'react'
import './App.css';
import MainClient from '../src/modules/default/sections/MainClient';
import NewUser from '../src/modules/default/views/NewUser';



function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(true)
  return (
    <div className="App">
      {!userLoggedIn ?
        <NewUser /> : <MainClient 
        />
      }
    </div>
  );
}

export default App;
