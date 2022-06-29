import logo from './logo.svg';

import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <div className='row mt-5'>
            <h1 class="ms-2 mb-0"><img src={logo} className="App-logo" alt="logo" />React Dictionary app.</h1>
          </div>
        </header>
      </div>
    </div>
  );
}
