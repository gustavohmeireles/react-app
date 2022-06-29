import logo from './logo.svg';
import './App.css';
import Welcome from './components/saudacoes/entrevista';
import Hope from './components/saudacoes/hope';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Olá <Welcome/> Essa é uma SPA criada como exemplo.
        </p>
        <Hope/>
        <a
          className="App-link"
          href="https://gustavo-meireles-portfolio-1.netlify.app/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Portfólio Gustavo Meireles
        </a>
      </header>
    </div>
  );
}

export default App;
