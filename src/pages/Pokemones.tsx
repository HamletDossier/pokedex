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
      <div className="flex justify-center w-full py-8">
        <span className=" bg-[#30a7d7] font-bold text-white py-1 px-3 rounded cursor-pointer" onClick={() =>{ handelButton()}}>Load more Pokémon</span>
      </div>
  </>)
}
export default Pokemones;