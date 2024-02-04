import './App.css';
import Header from './components/header';
import VejaMais from './components/VejaMais';
import Carrosel from './components/Carrosel'
import Aviso from './components/aviso';
import Formulario from './components/Formulario';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <VejaMais></VejaMais>
        <Carrosel></Carrosel>
        <Aviso></Aviso>
        <Formulario></Formulario>
    </div>
  );
}

export default App;
