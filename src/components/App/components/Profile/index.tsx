import React, { useEffect, useState } from 'react'

import Details from './components/Details'

import Socials from './components/Socials'

import { ProfileContainer } from './styles'

const image = require('../../../../images/me.jpg')

const fadeInProps = {
  delay: 100,
  transitionDuration: 800,
}

const Profile = () => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    let t: number

    const onLoadDone = () => {
      t = setTimeout(() => {
        setLoaded(!loaded)
      }, 1000)
    }

    const elm = document?.getElementById('pf-img')
    elm?.addEventListener('load', onLoadDone)

    return () => {
      elm?.removeEventListener('load', onLoadDone)
      clearTimeout(t)
    }
  }, [])

  return (
    <ProfileContainer {...fadeInProps} isLoaded={loaded}>
      <figure>
        <img id="pf-img" src={image} alt="Alex" loading="lazy" />
      </figure>

      <Details />
      <Socials />
    </ProfileContainer>
  )
}

export default Profile
