import { useEffect, useState } from "react";
import toApi from "../Adapters/PokeApi.adapter";
import IPokemones from "../Interfaces/Pokemones.interfaces";
import { useGetPokemonsQuery } from "../Services/PokeApi.service";

function HPokemones(){
    const [pokemons,setPokemons] = useState<IPokemones[]>([]);
    const [pages,setPages] = useState<number>(0);
    const  {data, isLoading}= useGetPokemonsQuery(0);

    useEffect(() =>{
        if(!isLoading) setPokemons(toApi(data));
    },data);


  const request = async(page:number) =>{
    const save:IPokemones[] = pokemons;
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=12&offset=${page}`)
    const data = await res.json();
    const newPoke:IPokemones[] = toApi(data);
    setPokemons([...save,...newPoke])
  }

  const handelButton = () =>{
    setPages(12 + pages);
    request(pages);
  }


  return {pokemons,handelButton}

}
export default HPokemones;