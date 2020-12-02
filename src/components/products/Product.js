import React from "react"
import "./Products.css"

export const Product = ({ product, productType }) => (
    <section className="product">
        <h3 className="product__name">{product.productName}</h3>
        <div className="product__price">Price: ${product.price}</div>
        <div className="product__type">Category: {productType.type}</div>
    </section>
)