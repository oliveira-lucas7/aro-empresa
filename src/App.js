import './App.css';
import Header from './components/Header';
import VejaMais from './components/VejaMais';
import Carrosel from './components/Carrosel'
import Aviso from './components/Aviso'


function App() {
  return (
    <div className="App">
        <Header></Header>
        <VejaMais></VejaMais>
        <Carrosel></Carrosel>
        <Aviso></Aviso>
    </div>
  );
}

export default App;
