import React, { useState, useMemo, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Howl } from 'howler'
import styled from 'styled-components'
import { randomNum, randomCondition } from '../../helpers'

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
    height: 1.5em;
    position: absolute;
    top: 0;
    width: auto;
    z-index: 1;

    @media (min-height: 450px) {
        height: 2.5em
    }

    @media (min-width: 640px) {
        top: 2em;
        height: 3em;
    }

    @media (min-width: 960px) {
        top: 3em;
        height: 4em;
    }
`

const Spaceship = () => {
    const engineSound = useMemo(() => new Howl({
        src: [flyingSounds[randomNum(flyingSounds.length - 1)]],
        volume: 0.25
    }), [])
    const [isFlying, setIsFlying] = useState(true)

    // Should we lean right or left this time?
    const MOD = randomCondition() ? 1 : -1

    const spaceshipVariants = {
        flying: {
            y: [0, randomNum(20) + 10, 0],
            rotate: [0, MOD * (randomNum(5) + 5), MOD * (randomNum(20) + 10), MOD * (randomNum(10) + 5), 0]
        },
        landed: {
            y: [0, 1, 0],
            rotate: [-1, 0, 1],
            transition: {
                repeat: Infinity,
                repeatType: 'reverse',
                duration: 2
            }
        }
    }

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
