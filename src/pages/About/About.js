import React from 'react'
import { homeObjTwoB } from "../Home/Data"
import { InfoSection, AboutSection } from "../../components"

const About = () => {
    return (
        <>
            <InfoSection {...homeObjTwoB} />
            <AboutSection />
        </>
    )
}

export default About
