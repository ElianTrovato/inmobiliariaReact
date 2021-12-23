import {setTimeout} from "react";
import ItemDetail from "./ItemDetail"





function ItemDetailContainer() {

    
    const getItem = () =>{
        const producto = new Promise((resolve, reject)=>{
            resolve("producto")
        });
        producto.then(res =>{
            console.log(res)
            return(res)
        }, err=>{
            console.log(err)
        });
    }
    
    setTimeout(getItem(), 2000)
    return (
            getItem(<ItemDetail />)
    );

}

export default ItemDetailContainer;