import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { motion, AnimateSharedLayout } from 'framer-motion'

import Planet from './Planet'
import Star from './Star'
import ButtonsPanel from '../MenuPanel/Panel'

import { randomNum, randomCondition } from '../../helpers'

const planets = [
    '/images/planets/mars.png',
    '/images/planets/jupiter.png',
    '/images/planets/rings.png',
    '/images/planets/moon.png',
    '/images/planets/blue.png'
]

const base = '/images/planets/earth.png'
const mapBg = '/images/background.jpg'

const MapContainer = styled.div`
    background-image: url(${mapBg});
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: none;
    width: 100%;
`

const PlanetsContainer = styled.div`
    align-content: space-evenly;
    align-items: center;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    justify-content: center;
    padding: 3em 0;
    width: 100%;
`

const StarContainer = styled(motion.div)`
    bottom: 0;
    left: 0;
    height: 100vh;
    position: absolute;
    width: 100vw;
`

const STAR_SPEED = 6

// Should display a grid of earth & 5 other planets
// Should have a menu at the bottom that pops up when you select a planet
const Map = () => {
    const [stars, setStars] = useState([])
    const [selectedPlanet, setSelectedPlanet] = useState('base')
    const skyRef = useRef(null)
    const clearSelected = () => setSelectedPlanet('base')

    const addStar = () => setStars(currStars => {
        const newStar = {
            speed: randomNum(6) + 6,
            size: randomCondition() ? 'small' : 'medium'
        }
        // just a way to decide to offset by left or top
        const sideToOffset = randomNum(2) < 1 ? 'top' : 'left'
        const amountToOffset = randomNum(30)
        newStar[sideToOffset] = amountToOffset + '%'

        return [...currStars, newStar]
    })

    const destroyStar = (id) => setStars(currStars => {
        const newStars = [...currStars]
        newStars.pop()
        return newStars
    })

    const handleClick = e => {
        setSelectedPlanet(e.currentTarget.dataset.name)
    }

    useEffect(() => {
        if (selectedPlanet === 'base') {
            clearSelected()
        }
    }, [selectedPlanet])

    return (
        <MapContainer>
            <StarContainer ref={skyRef} height={'100%'}>
                {stars.map((star, i) => (<Star
                    key={`star-${i}`}
                    top={star.top}
                    left={star.left}
                    size={star.size}
                    destroyTime={star.speed}
                    destroy={() => destroyStar(star.id)}
                    containerRef={el => skyRef}
                />))}
            </StarContainer>

            <PlanetsContainer>
                <AnimateSharedLayout>
                    {planets.map((img, i) => {
                        const name = `planet-${i}`
                        return (
                            <Planet
                                key={i}
                                img={planets[i]}
                                handleClick={handleClick}
                                name={name}
                                isSelected={selectedPlanet === name}
                            />
                        )
                    })}
                    <Planet
                        key={'base'}
                        img={base}
                        handleClick={handleClick}
                        name={'base'}
                        isSelected={selectedPlanet === 'base'}
                    />
                </AnimateSharedLayout>
            </PlanetsContainer>
            <ButtonsPanel
                clearSelected={clearSelected}
                planetSelected={selectedPlanet}
                addStar={addStar}
                destroyStar={destroyStar}
            />
        </MapContainer>
    )
}

export default Map

