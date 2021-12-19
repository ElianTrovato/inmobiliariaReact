import React from "react";
import { render } from "react-dom";
import "./ItemListContainer.css"
import Item from '../item/item';
import imageInmo from "../imagenes/26005243813655108044425939761438451326546227081000691770463139220883965592942.jpg";



const ItemListContainer = ( {MensajeProvisional }) => {
    return(
        <><p id="mensaje">{MensajeProvisional}</p><div>
            <Item title="Sillón" id="0" picture={imageInmo} price="$200.000" /> 
        </div></>
    )

}

export default ItemListContainer;