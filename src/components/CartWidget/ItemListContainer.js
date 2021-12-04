import React from "react";
import { render } from "react-dom";
import "./ItemListContainer.css"
import ItemCount from '../item-count/ItemCount'

const ItemListContainer = ( {MensajeProvisional }) => {
    return(
        <><p id="mensaje">{MensajeProvisional}</p><div>
            <ItemCount />
        </div></>
    )

}

export default ItemListContainer;