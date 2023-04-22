import React, { useEffect, useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { useQuery } from '@tanstack/react-query'

import ProductView from '../ProductView/ProductView'

import Button from '../Button/Button'

import { remove } from '../../redux/reducer/productModalSlice'

import {getproducts} from '../../action/getProduct'

const ProductViewModal = () => {
    const { isError, data, isLoading } = useQuery(["products"], getproducts, {
        staleTime: 1000,
      });
    
      const getProductById = (_id) => {
        const findId = data?.find((e) => {
        //   console.log(e._id)
          return e._id === _id;
          
        });
        
        return findId;
      };
      

    const productSlug = useSelector((state) => state.productModal.value)
    const dispatch = useDispatch()

    const [product, setProduct] = useState(undefined)
    
    useEffect(() => {
        setProduct(getProductById(productSlug))
       
    }, [productSlug]);

    return (
        <div className={`product-view__modal ${productSlug ? 'active':''}`}>
            <div className="product-view__modal__content">
                <ProductView product={product}/>
                <div className="product-view__modal__content__close">
                    <Button
                        size="sm"    
                        onClick={() => dispatch(remove())}
                    >
                        đóng
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ProductViewModal