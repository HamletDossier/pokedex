import toApi from "../Adapters/PokeApi.adapter";
import IteamPokemons from "../components/IteamPokemons";
import { useGetPokemonsQuery } from "../Services/PokeApi.service";
const Pokemones = () => {

  const {data, isError,isLoading}=useGetPokemonsQuery();
  if(isLoading) return <div>Loading...</div>;

 
 const pokemons = toApi(data);
  return (<>
      <div className="flex justify-center w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:grid-cols-4">
          {pokemons.map((pokemon,index) => (
            <IteamPokemons pokemon={pokemon}  />
          ) )}
        </div>
      </div>
  </>)
}
export default Pokemones;