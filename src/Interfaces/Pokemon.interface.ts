import Types from "./enums/Types.enum";

interface IPokemon{
    id: string;
    url:string;
    img: string;
    name: string;
    des: string[];
    height: string;
    weight: string;
    gender: boolean;
    category: string;
    abilities: string;
    types:Types[];
    weaknesses:string[];
    hp:number;
    attack:number;
    defense:number;
    specialA:number;
    specialD:number;
    speed:number;

}
export default IPokemon;