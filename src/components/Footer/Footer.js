import React from 'react'
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'
import { WebsiteRights, SocialIcons, SocialIconLink } from './Footer.elements'

const Footer = () => {
    const year = new Date().getFullYear()
    return (

        <div className='container-fluid py-4' style={{ backgroundColor: '#0f2453' }}>
            <WebsiteRights>© Copyright {year} Timilehin</WebsiteRights>
            <SocialIcons>
                <SocialIconLink href='https://www.linkedin.com/in/timilehin-omotugba-b551b5174/' target='_blank' aria-label='Linkedin'>
                    <FaLinkedin />
                </SocialIconLink>
                <SocialIconLink href='mailto:omotugbatimilehin7@gmail.com' target='_blank' aria-label='Email'>
                    <FaEnvelope />
                </SocialIconLink>
                <SocialIconLink href='https://github.com/7emmytim' target='_blank' aria-label='Github'>
                    <FaGithub />
                </SocialIconLink>
            </SocialIcons>
        </div>
    )
}

export default Footer
