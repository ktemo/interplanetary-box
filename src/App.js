import logo from './logo.svg';
import './App.css';

import { authenticate } from './utils/web3Profile';
import { onFilePicked, onUploadFile } from './utils/fileManager';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="connect"
          onClick={authenticate}
          href="#"
          rel="noopener noreferrer"
        >
          Connect profile
        </a>
        <input
          type="file"
          accept="image/*"
          onChange={onFilePicked}/>

        <a
          className="connect"
          onClick={onUploadFile}
          href="#"
          rel="noopener noreferrer"
        >
          Upload
        </a>
      </header>
    </div>
  );
}

export default App;
