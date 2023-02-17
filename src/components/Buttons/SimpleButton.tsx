import Types from "../../Interfaces/enums/Types.enum";
const SimpleButton = ({type}:{type:string}) => {
    let clase = "bg-slate-500";

    if(type === "Fire")
        clase = " text-white bg-[#fd7d24]";
    if(type === "Bug")
        clase = " text-white bg-[#729f3f]";  
    if(type === "Water")
        clase = "text-White bg-[#4592c4]";
    if(type === "Poison")
        clase = "text-White bg-[#b97fc9]";
    if(type === "Grass")
        clase = "text-White bg-gradient-to-b from-[#3dc7ef] to-[#bdb9b8]";
  return (<span className={ `${clase} px-6 rounded-md py-[1px] text-xs`}>{type}</span>);
}

export default SimpleButton;
