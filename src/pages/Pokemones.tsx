import IteamPokemons from "../components/IteamPokemons";
import HPokemones from "../Hooks/Pokemons.hook";
const Pokemones = () => {

 const {pokemons,handelButton} = HPokemones();

  return (<>
      <div className="flex justify-center w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:grid-cols-4">
          {pokemons.map((pokemon,index) => (
            <IteamPokemons pokemon={pokemon}  />
          ) )}
        </div>
      </div>
      <div className="flex justify-center w-full">
        <span className=" bg-blue-400" onClick={() =>{ handelButton()}}>Load more Pokémon</span>
      </div>
  </>)
}
export default Pokemones;