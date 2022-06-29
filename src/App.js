import logo from './logo.svg';
import Dictionary from './Dictionary';

import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <body>
          <header className="App-header">
            <div className='row mt-5'>
              <h1 class="ms-2 mb-0"><img src={logo} className="App-logo" alt="logo" />React Dictionary app.</h1>
            </div>
          </header>
          <main>
            <Dictionary />
          </main>
          <footer className="footer ms-2">
            <p><a href="https://github.com/QueenJammie/dictionary-app/tree/main/src" target="_blank" rel="noopener noreferrer">Open-source code</a> by <a href="https://www.shecodes.io/hall-of-fame?q=Jammie+Lachance-C%C3%B4t%C3%A9&commit=Search" target="_blank" rel="noopener noreferrer">Jammie Lachance-Côté</a></p>
          </footer>
        </body>
      </div>
    </div>
  );
}
