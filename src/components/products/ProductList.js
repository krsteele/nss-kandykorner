import React, { useContext, useEffect } from "react"
import { ProductTypeContext } from "../productTypes/ProductTypeProvider"
import { ProductContext } from "./ProductProvider"
import { Product } from "./Product"
import "./Products.css"

export const ProductList = () => {
    /* This state changes when `getProducts()` is invoked below */
    const { products, getProducts } = useContext(ProductContext)
    const { productTypes, getProductTypes } = useContext(ProductTypeContext)

    useEffect(() => {
        getProductTypes().then(getProducts)
    }, [])

    return (
        <>
            <h2>Products</h2>
                {/* {console.table(products, productTypes)} */}
            <div className="products">
                {
                    products.map(p => {
                    const type = productTypes.find(t => t.id === p.productTypeId)
                    // console.log(type)
                    return <Product key={p.id} productType={type} product={p}/>})
                }
            </div>
        </>
    )
}