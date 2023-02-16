import IPokemon from "./Pokemon.interface";

type IPokemones = Pick<IPokemon, "id" | "img" | "name"| "url">

export default IPokemones;