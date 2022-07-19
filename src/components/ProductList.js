import React from 'react'
import { Link } from 'react-router-dom'

const ProductList = (props) => {
    console.log(props)
    return (
        <div>
            {props.product.map( (product, i) =>
                <Link to={`/product/${product._id}`} > <p key={i}>{product.title} </p> </Link>
            )}
        </div>
    )
}

export default ProductList
