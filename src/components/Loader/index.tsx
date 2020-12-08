import React, { useEffect, useState } from 'react'

import FadeIn from 'react-fade-in'
import Lottie from 'react-lottie'

import Trail from './components/Trail'

import * as loaderBar from '../../config/lottie/loader-bar.json'

import { LottieContainer } from './styles'

import { LoaderProps } from '../../config/types'

const lottieProps = {
  options: {
    // @ts-ignore
    animationData: loaderBar.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
    loop: true,
    autoplay: true,
  },
  height: 50,
  width: 200,
}

const Loader = ({ onClose }: LoaderProps) => {
  const [open, setOpen] = useState(true)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let t1: number, t2: number, t3: number

    const handleTransition = () => onClose()

    /** 1- LOADING */
    t1 = setTimeout(() => {
      setLoading(false)

      /** 2- OPEN */
      t2 = setTimeout(() => {
        setOpen(false)

        /** 3- SLIDE TRANSITION */
        t3 = setTimeout(() => {
          handleTransition()
        }, 400)
      }, 1600)
    }, 2000)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }

    // eslint-disable-next-line
  }, [])

  return (
    <LottieContainer {...{ open }}>
      <FadeIn className="fade-in-container">
        {loading && <h1>Loading</h1>}

        {loading ? (
          <Lottie {...lottieProps} />
        ) : (
          <Trail {...{ open }}>
            <span>Welcome</span>
            {navigator?.language === 'ja' && <span>ようこそ</span>}
            <span>Bienvenue</span>
          </Trail>
        )}
      </FadeIn>
    </LottieContainer>
  )
}

export default Loader
