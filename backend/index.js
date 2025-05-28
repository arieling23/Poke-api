const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/pokemon/:nombre', async (req, res) => {
  const { nombre } = req.params;
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
    const data = response.data;
    res.json({
      nombre: data.name,
      imagen: data.sprites.front_default,
      tipos: data.types.map(t => t.type.name),
      habilidades: data.abilities.map(a => a.ability.name)
    });
  } catch (err) {
    res.status(404).json({ error: "Pokémon no encontrado" });
  }
});

app.listen(3000, () => console.log('Backend en puerto 3000'));