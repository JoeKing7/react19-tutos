import { Suspense, use, useState } from 'react';

type PokemonData = {
  name: string;
  sprites: {
    front_default: string;
  };
  weight: number;
};

type PokemonResult = {
  error: boolean;
  message: string;
  data: PokemonData | null;
};

interface ShowPokemonProps {
  readonly pokemonPromise: Promise<PokemonResult>;
}

export default function UseExample() {
  const [name, setName] = useState('');

  const fetchPokemon = async (name: string): Promise<PokemonResult> => {
    if (!name)
      return Promise.resolve({
        error: true,
        message: 'No name provided',
        data: null,
      });

    return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(
      (response) => {
        if (!response.ok) {
          return { error: true, message: 'Pokemon not found', data: null };
        }
        return response.json().then((data) => ({
          error: false,
          message: '',
          data,
        }));
      },
    );
  };

  return (
    <div>
      <form>
        <input
          placeholder="Ej. Pikachu"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>

      <Suspense fallback={<div>Cargando...</div>}>
        <ShowPokemon pokemonPromise={fetchPokemon(name)}></ShowPokemon>
      </Suspense>
    </div>
  );
}

function ShowPokemon({ pokemonPromise }: ShowPokemonProps) {
  const pokemon = use(pokemonPromise);

  if (pokemon?.error) {
    return <div>Error: {pokemon.message}</div>;
  }

  if (!pokemon?.data) {
    return <div>No hay datos</div>;
  }

  return (
    <div>
      Resultado:
      <article>
        <h3>{pokemon.data.name}</h3>
        <img src={pokemon.data.sprites.front_default} alt={pokemon.data.name} />
        <p>peso: {pokemon.data.weight} kg</p>
      </article>
    </div>
  );
}
