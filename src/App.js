import './App.css';
import Header from './components/header';
import VejaMais from './components/VejaMais';
import Produtos from './components/Produto';


function App() {
  return (
    <div className="App">
        <Header></Header>
        <VejaMais></VejaMais>
        <Produtos></Produtos>
    </div>
  );
}

export default App;
