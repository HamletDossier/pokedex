import IPokemon from "./Pokemon.interface";

type IPokeApi = Pick<IPokemon, "name"| "url">

export default IPokeApi;