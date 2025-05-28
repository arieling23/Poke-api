import { useState } from 'react';

function App() {
  const [nombre, setNombre] = useState('');
  const [pokemon, setPokemon] = useState(null);

  const buscar = () => {
    fetch(`http://localhost:3000/pokemon/${nombre}`)
      .then(res => res.json())
      .then(data => setPokemon(data));
  };

  return (
    <div>
      <h1>Buscar Pokémon</h1>
      <input value={nombre} onChange={e => setNombre(e.target.value)} />
      <button onClick={buscar}>Buscar</button>
      {pokemon && (
        <div>
          <h2>{pokemon.nombre}</h2>
          <img src={pokemon.imagen} alt={pokemon.nombre} />
          <p>Tipos: {pokemon.tipos.join(', ')}</p>
          <p>Habilidades: {pokemon.habilidades.join(', ')}</p>
        </div>
      )}
    </div>
  );
}

export default App;