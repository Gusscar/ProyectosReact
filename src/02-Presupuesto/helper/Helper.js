export const revisarPresupuesto =(presupuesto, restante)=>{
    let clase;

    if ((presupuesto / 4 > restante)) {
        clase="error"
    } else if((presupuesto / 4) > restante){
        clase="warning"
    } else{
        clase="success";

    }

    return clase;
}