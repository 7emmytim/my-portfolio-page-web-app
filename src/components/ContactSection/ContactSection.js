import React from 'react'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import MyForm from "./MyForm"
import "./ContactSection.css"

const ContactSection = () => {
    return (
        <div className="container-fluid p-5 mt-5" id="contact-section">
            <div className="py-auto my-auto">
                <MyForm />
                <div className="lead mt-5">
                    <div className="my-3 text-center">
                        <a href="https://www.linkedin.com/in/timilehin-omotugba-b551b5174/" target="_blank" rel="noreferrer" >
                            <FaLinkedin className="icn" />
                        </a>
                        <a href="https://github.com/7emmytim" target="_blank" rel="noreferrer" >
                            <FaGithub className="icn" />
                        </a>
                        <a href="mailto:omotugbatimilehin7@gmail.com" target="_blank" rel="noreferrer" aria-label='Email'>
                            <FaEnvelope className="icn" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactSection
