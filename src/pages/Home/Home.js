import React from 'react'
import { homeObjOne, homeObjThree, 
    homeObjFour, homeObjFive
} from "./Data"
import { InfoSection } from "../../components"
import { Footer } from "../../components"

const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjThree} />
            <InfoSection {...homeObjFour} />
            <InfoSection {...homeObjFive} />
            <Footer />
        </>
    )
}

export default Home
