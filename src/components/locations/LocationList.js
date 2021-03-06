import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import { Location } from "./Location"
import "./Locations.css"

export const LocationList = () => {
    /* This state changes when `getLocations()` is invoked below */
    const { locations, getLocations } = useContext(LocationContext)

    useEffect(() => {
        getLocations()
    }, [])

    return (
        <>
            <h2>Locations</h2>
            <div className="locations">
                {
                    locations.map(loc => <Location key={loc.id} location={loc}/>)
                }
            </div>
        </>
    )
}