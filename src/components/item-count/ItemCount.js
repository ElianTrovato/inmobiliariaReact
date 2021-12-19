import React, { useState } from "react";
import "./ItemCount.css"


function ItemCount() {
    
    const [count, setCount] = useState(1);
    const increment = () => {
        setCount(count + 1);
    }
          
    const decrement = () => {
        setCount(count - 1);
    }

    return (
        <main id="producto">
            <b id="prod">Producto</b>
            <section className="Counters">
                <div className="counter">
                    <p className="count">{count}</p>
                    <section className="controls">
                        <button onClick={increment}>Agregar otro producto</button>
                        <button onClick={decrement}>Quitar un producto</button>
                        <button onClick={() => setCount(0)}>Borrar</button>
                        <button>Enviar al Carrito</button>
                    </section>
    
                </div>
    
            </section>
        </main>
    );

 

    
    
    
}


export default ItemCount;