import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/CartWidget/ItemListContainer.js'
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer"

function App() {
  return (
    
      <><NavBar /><ItemListContainer MensajeProvisional="Aguarde un momento, aquí aparecerá nuestro catalogo"/> </>
    
  );
}

export default App;
