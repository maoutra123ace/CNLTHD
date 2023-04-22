import React from 'react'
import ProductCard from '../components/ProductCard/ProductCard'

const ListPage = ( {searchResults}) => {

    const results = searchResults.map(props => 
    <ProductCard   key={props._id}
        Image={props.Image}
        Name={props.Name}
        Price={parseInt(props.Price)}
        CategoryId={props.CategoryId}
        _id={props._id}
        Quantity={props.Quantity} 
        props={props}

        />)

    const content = results?.length ? results : <article><p style={{textAlign:"center"}}>Hiện tại sản phẩm chưa có </p></article>

    return (
      <>{content}</>
    )
}

export default ListPage