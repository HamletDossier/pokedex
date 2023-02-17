import Types from "../Interfaces/enums/Types.enum";
import IPokeApi from "../Interfaces/PokeApi.interface";
import IPokemon from "../Interfaces/Pokemon.interface";
import IPokemones from "../Interfaces/Pokemones.interfaces";


const toApi = (Request:any):IPokemones[] =>{
    const results:IPokeApi[] = Request.results;
    const pokemons:IPokemones[] = results.map(result => ({
        id:urlToId(result.url),
        img: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${urlToId(result.url)}.png`,
        name: result.name,
        types:[Types[randomTypes()]],
        url:result.url
    }));

    return pokemons;
}

const urlToId = (url:IPokemon['url']):IPokemon['id'] => {
    const urlArray = url.split("/");
    const id = urlArray[urlArray.length - 2];
    return id.padStart(3,'0');
}

const randomTypes = ():number=>{
    const enumValues= Object.keys(Types);
    const len = (enumValues.length/2) - 1;
    const index = Math.floor(Math.random() * len) + 0;
    return index;
}


export default toApi;