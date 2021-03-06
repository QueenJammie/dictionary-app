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
              <h1 className="title mb-0"><img src={logo} className="me-0 App-logo" alt="logo" />React Dictionary app.</h1>
            </div>
          </header>
          <main>
            <Dictionary defaultKeyword="sunrise" />
          </main>
          <footer className="footer mt-2">
            <p><a href="https://github.com/QueenJammie/dictionary-app/tree/main/src" target="_blank" rel="noopener noreferrer"><strong>Open-source code</strong></a> by <a href="https://www.shecodes.io/hall-of-fame?q=Jammie+Lachance-C%C3%B4t%C3%A9&commit=Search" target="_blank" rel="noopener noreferrer"><strong>Jammie Lachance-Côté</strong></a></p>
          </footer>
        </body>
      </div>
    </div>
  );
}