import React from "react";
import { render } from "react-dom";
import "./ItemListContainer.css"

const ItemListContainer = ( {MensajeProvisional }) => {
    return(
        <p id="mensaje">{MensajeProvisional}</p>
    )

}

export default ItemListContainer;