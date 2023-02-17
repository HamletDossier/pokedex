import IPokemones from "../Interfaces/Pokemones.interfaces";

const IteamPokemons = ({pokemon}:{pokemon:IPokemones}) => {
    const {id,name,img,types,url} = pokemon;
    return(
    <div className="card pt-8">
        <img className=" bg-gray-100 " src={`${img}`} alt="Pokémon" />
        <p className=" text-sm text-gray-800">#<span>{id}</span></p>
        <h2 className=" pt-2 text-xl font-bold">{name}</h2>
        {types.map((type,index)=>(<span className=" bg-slate-500 px-6 rounded-md py-[1px] text-xs">{type}</span>))}
    </div>
    )
}
export default IteamPokemons;
