import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Spaceship from './Spaceship'
import { randomNum } from '../../helpers'

const PlanetContainer = styled(motion.div)`
    align-items: center;
    display: flex;
    height: 50%;
    margin: 1rem;
    max-height: 20vw;
    place-content: center;
    position: relative;
    text-align: center;
    width: 30vw;

    &:hover {
        cursor: pointer;
    }
`

const PlanetImg = styled(motion.img)`
    min-height: 8em;
    z-index: 0;
`

const Planet = ({
    img,
    handleClick,
    isSelected,
    name
}) => {
    const [hover, setHover] = useState(false)
    // Need to handle clicks & "taps" which are caught with Framer-motion
    // Only handle the click once - either on click or tap
    const [tapped, setTapped] = useState(false)

    const planetVariants = {
        bounce: {
            y: [-5, 5],
            rotate: [-15, 15],
            transition: {
                duration: 0.8,
                repeatType: 'reverse',
                repeat: Infinity,
                ease: "easeInOut",
            }
        },
        circle: {
            y: [0, -5, -15, -25, -30, -25, -15, -5, 0],
            x: [0, 10, 15, 10, 0, -10, -15, -10, 0],
            // rotate: [360, 0],
            transition: {
                repeat: Infinity,
                duration: 0.8,
                ease: "linear"
            }
        },
        settle: {
            y: [0, randomNum(10), 0],
            rotate: [randomNum(-5), randomNum(10)],
            transition: {
                repeat: Infinity,
                repeatType: 'reverse',
                duration: 2,
                ease: "easeInOut",
                delay: randomNum(3)
            }
        },
        zoom: {
            scale: 1.2,
            transition: {
                duration: 0.6,
                ease: "backInOut"
            }
        }
    }

    const animation = useCallback(() => {
        return isSelected ? 'bounce' : hover ? 'circle' : 'settle'
    }, [isSelected, hover])

    const baseAnimation = useCallback(() => {
        return isSelected ? 'zoom' : 'settle'
    }, [isSelected])

    return (
        <PlanetContainer
            onClick={e => {
                if (!tapped) handleClick(e)
            }}
            data-name={name}
            onTapStart={e => {
                setTapped(true)
                handleClick(e)
            }}
            onMouseEnter={e => {
                if (!isSelected) {
                    setHover(true)
                }
            }}
            onMouseLeave={e => {
                setHover(false)
            }}
        >
            <PlanetImg
                src={img}
                variants={planetVariants}
                initial='settle'
                animate={name === 'base' ? baseAnimation() : animation()}
            />
            {isSelected && (
                <Spaceship />
            )}
        </PlanetContainer>
    )
}

export default Planet
