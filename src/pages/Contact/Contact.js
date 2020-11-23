import React from 'react'
import { homeObjThreeB } from "../Home/Data"
// import teamMembers from "./ContactData"
import { InfoSection, ContactSection } from "../../components"


const Contact = () => {
    return (
        <>
            <InfoSection {...homeObjThreeB} />
            <ContactSection />
        </>
    )
}

export default Contact
