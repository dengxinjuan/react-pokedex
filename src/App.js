import data from "./data";
import Pokedex from "./Pokedex";
import Pokecard from "./Pokecard";
//import './App.css';

function App() {
  console.log(data);
  return <Pokedex pokemon={data} />;
}

export default App;
