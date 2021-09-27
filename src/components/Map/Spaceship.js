import React, { useState, useMemo, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Howl } from 'howler'
import styled from 'styled-components'
import { randomNum } from '../../helpers'

import spaceshipImg from '../../images/ufo.png'

import futureEngine from '../../audio/sfx/spaceship/future-engine.wav'
import machineGlitch from '../../audio/sfx/spaceship/machine-glitch.wav'
import traveling from '../../audio/sfx/spaceship/traveling.wav'
import timeMachine from '../../audio/sfx/spaceship/time-machine.wav'
import vibratingEngine from '../../audio/sfx/spaceship/vibrating-engine.wav'

const flyingSounds = [
    futureEngine,
    machineGlitch,
    traveling,
    timeMachine,
    vibratingEngine
]

const BouncingShip = styled(motion.img)`
    height: 4em;
    position: absolute;
    top: 4em;
    width: auto;
    z-index: 1;
`

const spaceshipVariants = {
    flying: {
        y: [0, 20, 0],
        rotate: [0, 5, 20, 10, 0]
    },
    landed: {
        y: [0, 5, 0],
        transition: {
            repeat: Infinity
        }
    }
}

const Spaceship = () => {
    const engineSound = useMemo(() => new Howl({
        src: [flyingSounds[randomNum(flyingSounds.length - 1)]],
        volume: 0.25
    }), [])
    const [isFlying, setIsFlying] = useState(true)

    useEffect(() => {
        if (isFlying) {
            engineSound.play()
            engineSound.fade(0, 1, 400)
        } else {
            engineSound.fade(engineSound.volume(), 0, 400)
            engineSound.once('fade', () => engineSound.stop())
        }
    }, [engineSound, isFlying])

    return (
        <BouncingShip
            layoutId="spaceship"
            variants={spaceshipVariants}
            initial='flying'
            animate={isFlying ? 'flying' : 'landed'}
            transition={{
                duration: 1
            }}
            src={spaceshipImg}
            onAnimationComplete={() => {
                if (isFlying) setIsFlying(false)
            }}
        />
    )
}

export default Spaceship
