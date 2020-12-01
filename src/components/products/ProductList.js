import React, { useContext, useEffect } from "react"
import { ProductContext } from "./ProductProvider"
import { Product } from "./Product"
import "./Products.css"

export const ProductList = () => {
    /* This state changes when `getProducts()` is invoked below */
    const { products, getProducts } = useContext(ProductContext)

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <>
            <h2>Products</h2>
            <div className="products">
                {
                    products.map(p => <Product key={p.id} product={p}/>)
                }
            </div>
        </>
    )
}