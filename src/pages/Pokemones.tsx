import toApi from "../Adapters/PokeApi.adapter";
import { useGetPokemonsQuery } from "../Services/PokeApi.service";
const Pokemones = () => {

  const {data, isError,isLoading}=useGetPokemonsQuery();
  if(isLoading) return <div>Loading...</div>;

 
 const pokemons = toApi(data);
 console.log(pokemons);
  return (<>
      <div className="flex justify-center w-full">
        <div className="grid grid-cols-1">
          <div className="card">
            <img src="https://picsum.photos/id/237/370/370" alt="Pokémon" />
            <p>No <span>0001</span></p>
            <h2>Pokémon</h2>
            <span>Plant</span> <span>Veneno</span>
          </div>
        </div>
      </div>
  </>)
}
export default Pokemones;