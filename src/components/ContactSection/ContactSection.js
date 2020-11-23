import React from 'react'
import { FaEnvelope, FaWhatsappSquare, FaLinkedin, FaGithub, FaPhoneSquareAlt } from 'react-icons/fa'
import MyForm from "./MyForm"
import "./ContactSection.css"

const ContactSection = () => {
    return (
        <div className="container-fluid p-5" id="contact-section">
            <div className="row">
                <div className="col-md-6 py-auto my-auto">
                    <MyForm />
                </div>
                <div className="col-md-6 py-auto my-auto">
                    <div className="lead icon-sec">
                        <div className="my-3">
                            <FaPhoneSquareAlt className="icn" /> <FaWhatsappSquare className="icn" /> 09025993113
                        </div>
                        <div className="my-3">
                            <FaEnvelope className="icn" /> omotugbatimilehin7@gmail.com
                        </div>
                        <div className="my-3">
                            <FaLinkedin className="icn" /> https://www.linkedin.com/in/timilehin-omotugba-b551b5174/
                        </div>
                        <div className="my-3">
                            <FaGithub className="icn" /> https://github.com/7emmytim
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactSection
