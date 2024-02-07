import './App.css';
import Header from './components/header';
import VejaMais from './components/VejaMais';
import Carrosel from './components/Carrosel'
import Aviso from './components/Avisar';
import Formulario from './components/Formulario';
import Empresa from './components/Empresa';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <VejaMais></VejaMais>
        <Carrosel></Carrosel>
        <Aviso></Aviso>
        <Formulario></Formulario>
        <Empresa></Empresa>
    </div>
  );
}

export default App;
