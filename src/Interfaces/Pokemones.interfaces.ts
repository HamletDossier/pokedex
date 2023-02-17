import IPokemon from "./Pokemon.interface";

type IPokemones = Pick<IPokemon, "id" | "img" | "name" |"types" | "url">

export default IPokemones;