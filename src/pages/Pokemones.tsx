import toApi from "../Adapters/PokeApi.adapter";
import { useGetPokemonsQuery } from "../Services/PokeApi.service";
const Pokemones = () => {

  const {data, isError,isLoading}=useGetPokemonsQuery();
  if(isLoading) return <div>Loading...</div>;

 
 const pokemons = toApi(data);
  return (<>
      <div className="flex justify-center w-full">
        <div className="grid grid-cols-1">
          {pokemons.map((pokemon,index) => (
          <div className="card">
            <img src={`${pokemon.img}`} alt="Pokémon" />
            <p># <span>{pokemon.id}</span></p>
            <h2>{pokemon.name}</h2>
            {pokemon.types.map((type,index)=>(<span>{type}</span>))}
          </div>
          ) )}
        </div>
      </div>
  </>)
}
export default Pokemones;