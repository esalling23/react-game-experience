import React, { useState } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const spaceshipImg = '/images/ufo.png'

const BouncingShip = styled(motion.img)`
    height: 4em;
    position: absolute;
    top: 4em;
    width: auto;
    z-index: 1;
`

const spaceshipVariants = {
    flying: {
        y: [0, 20, 0]
    },
    landed: {
        y: [0, 5, 0],
        transition: {
            repeat: Infinity
        }
    }
}

const Spaceship = () => {
    const [isFlying, setIsFlying] = useState(true)
    console.log('spaceship is flying: ' + isFlying)
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
