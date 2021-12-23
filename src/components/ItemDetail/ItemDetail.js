import {setTimeout} from "react";
import {useState} from "react";
import ItemCount from "../item-count/ItemCount"

function ItemDetail() {
    const [users, setUsers] = useState([
        { id: 1, titulo: 'Sillon 1', precio: '$' + 39000, imageURL:'https://tse4.mm.bing.net/th/id/OIP.N9BrvwSkexuC_iyT_osL2QHaE5?pid=ImgDet&rs=1'},
        { id: 2, titulo: 'Sillon 2', precio: '$' + 45000, imageURL:'https://tse3.mm.bing.net/th/id/OIP.voDmXVLDDO_VX7ZHc7Tl8QHaIU?pid=ImgDet&rs=1'},
        { id: 3, titulo: 'Sillon 3', precio: '$' + 53000, imageURL:'https://th.bing.com/th/id/R.508e7739ef1c4f6892c4fe463e21daa4?rik=B5tVLyS82xqBMQ&riu=http%3a%2f%2fwww.mueblesgascon.com%2fblog%2fwp-content%2fuploads%2f2015%2f04%2fsofa1.jpg&ehk=Tn5nc7aDhXcH3JYKy2Ii%2fGC8c1bg1Jorqu369Y8i7dQ%3d&risl=&pid=ImgRaw&r=0'},
        { id: 4, titulo: 'Sillon 4', precio: '$' + 15000, imageURL:'https://th.bing.com/th/id/R.b64d9d2aa4e31b74004e2799f8bcdb37?rik=7uLkHlauwRILyw&pid=ImgRaw&r=0'},
        { id: 5, titulo: 'Sillon 5', precio: '$' + 75000, imageURL:'https://tse4.mm.bing.net/th/id/OIP.wL2y2G8_UKYzTqJudZoRGAHaF-?pid=ImgDet&w=640&h=516&rs=1'},
        { id: 6, titulo: 'Sillon 6', precio: '$' + 61000, imageURL:'https://tse1.mm.bing.net/th/id/OIP.ZBu5MoO_7W1gwbca_CG3oAHaFj?pid=ImgDet&w=800&h=600&rs=1'},
    ])
    return(
        <><p>Productos</p><div>
            {users.map(u => <><h1 key={u.id}>{u.titulo}</h1><>{u.precio}</><img src={u.imageURL} /><ItemCount/></>)}
        </div></>
    );
}

export default ItemDetail;