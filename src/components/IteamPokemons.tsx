import IPokemones from "../Interfaces/Pokemones.interfaces";
import SimpleButton from "./Buttons/SimpleButton";

const IteamPokemons = ({pokemon}:{pokemon:IPokemones}) => {
    const {id,name,img,types,url} = pokemon;
    return(
    <div className="card pt-8 hover:animate-bounce hover:h-2">
        <img className=" bg-gray-100 rounded" src={`${img}`} alt="Pokémon" />
        <p className=" text-sm text-gray-800">#<span>{id}</span></p>
        <h2 className=" pt-2 text-xl font-bold">{name}</h2>
        {types.map((type,index)=>(<SimpleButton type={type} />))}
    </div>
    )
}
export default IteamPokemons;
