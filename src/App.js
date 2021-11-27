import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/CartWidget/ItemListContainer.js'

function App() {
  return (
    
      <><NavBar /><ItemListContainer MensajeProvisional="Aguarde un momento, aquí aparecerá nuestro catalogo" /></>
    
  );
}

export default App;
