import React, { useState } from "react";
import { puppyList } from './data.js';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [puppies, setPuppies] = useState(puppyList);

  console.log(puppies);

  return (
    <div>
      <a href="https://vitejs.svg" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.svg" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>
  );
}

export default App;
