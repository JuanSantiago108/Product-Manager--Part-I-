import React, { useEffect, useState} from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Main =  (props) => {
    const [product, setProduct] = useState();


    useEffect(()=>{
        axios.get('http://localhost:8000/api/product')
        .then(res=>{
            setProduct(res.data);
        })
        .catch(err => console.error(err))
    },[]);



    return (
        <div>
            <ProductForm/>
            <hr/>
            {product && <ProductList product={product}/> }
        </div>
    )
}

export default Main