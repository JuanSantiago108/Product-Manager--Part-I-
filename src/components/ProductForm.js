import React, {useState} from "react";
import axios from "axios";

const ProductForm = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/product',{
            title,
            price,
            description
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }

    return (
        <form onSubmit={onSubmitHandler}>

            <p>
                <label>Tittle :</label>
                <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
            </p>
        
            <p>
                <label>Price :</label>
                <input type="number" onChange={(e)=>setPrice(e.target.value)} value={price}/>
            </p>
        
            <p>
                <label>Description :</label>
                <textarea onChange={(e)=>setDescription(e.target.value)} value={description} />
            </p>

            <input type="submit"/>

        </form>
    )
}

export default ProductForm