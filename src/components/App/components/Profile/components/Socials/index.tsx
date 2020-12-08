import React from 'react'

import {
  FaGithub,
  FaTwitter,
  FaStackOverflow,
  FaLinkedin,
  FaWordpress,
} from 'react-icons/fa'

import { SocialsContainer } from './styles'

const links = {
  github: 'https://github.com/alex-dg',
  linkedin: 'https://www.linkedin.com/in/alexandre-di-guida-17650698/',
  twitter: 'https://twitter.com/Alex_dg_uk',
  stackoverflow: 'https://stackoverflow.com/users/2493252/alexdg',
  wordpress: 'https://scottish-escapes.com/',
}

const { github, linkedin, twitter, stackoverflow, wordpress } = links

const Socials = () => (
  <SocialsContainer>
    <a
      className="social-link"
      href={github}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaGithub />
    </a>

    <a
      className="social-link"
      href={linkedin}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaLinkedin />
    </a>

    <a
      className="social-link"
      href={twitter}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaTwitter />
    </a>

    <a
      className="social-link"
      href={stackoverflow}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaStackOverflow />
    </a>

    <a
      className="social-link"
      href={wordpress}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWordpress />
    </a>
  </SocialsContainer>
)

export default Socials
