import './App.css';
import Zuikis from './Components/Zuikis';
import Tekstas from './Components/Tekstas';
import ZebBeb from './Components/Zeb&Beb';
import Skyrius from './Components/Skyrius';
import Antraste from './Components/Antraste';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Zuikis spalva='pink' />
        <Tekstas h1Txt='Cia irasykite bet koki teksta...' />
        <ZebBeb spalva={1} />
        <Skyrius h1='Skyriaus pavadinimas' h2='Poskyrio pavadinimas' />
        <Antraste h1text='Spalvotas knygos pavadinimas' spalva='orange' />
        <Antraste h2text='Spalvoti skyriu pavadinimai' spalva='greenyellow' />
      </header>
    </div>
  );
}
export default App;
