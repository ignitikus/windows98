import React from 'react';

import Main from "./components/Main/Main";
import Taskbar from "./components/Taskbar/Taskbar";


const mainContainer ={
  height: '100%',
}

function App() {
  return (
    <div style={mainContainer}>
      <Main />
      <Taskbar />
    </div>
  );
}

export default App;
