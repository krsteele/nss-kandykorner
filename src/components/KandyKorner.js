import React from "react"
import { LocationList } from "./locations/LocationList"
import { LocationProvider } from "./locations/LocationProvider"
import "./KandyKorner.css"
import { ProductList } from "./products/ProductList"
import { ProductProvider } from "./products/ProductProvider"

export const KandyKorner = () => (
    <>
        <h2>Kandy Korner</h2>
        <small>Kandy when you need a treat</small>

        
        <LocationProvider>
            <LocationList />
        </LocationProvider>
        
        <ProductProvider>
            <ProductList />
        </ProductProvider>
    </>
)