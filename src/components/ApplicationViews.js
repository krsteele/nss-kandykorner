import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./locations/LocationProvider"
import { LocationList } from "./locations/LocationList"
import { ProductList } from "./products/ProductList"
import { ProductProvider } from "./products/ProductProvider"

export const ApplicationViews = (props) => (
    <>
        {/* <h2>Kandy Korner</h2>
        <small>Kandy when you need a treat</small> */}

        <LocationProvider>
            <Route exact path="/">
                <LocationList />
            </Route>
        </LocationProvider>
        
        <ProductProvider>
            <Route exact path="/products">
                <ProductList />
            </Route>
        </ProductProvider>
    </>
)