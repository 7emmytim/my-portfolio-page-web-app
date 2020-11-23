import React from 'react'
import { homeObjFourB, homeObjFourC, homeObjFourD, homeObjFourE, homeObjFourF } from "../Home/Data"
import { InfoSection } from "../../components"

const Products = () => {
    return (
        <>
            <InfoSection {...homeObjFourB} />
            <InfoSection { ...homeObjFourC } />
            <InfoSection { ...homeObjFourD } />
            <InfoSection { ...homeObjFourE } />
            <InfoSection { ...homeObjFourF } />
        </>
    )
}

export default Products
