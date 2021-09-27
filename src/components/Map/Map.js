import React, { useState, useEffect, useRef, useMemo } from 'react'
import styled from 'styled-components'
import { Howl } from 'howler'
import { motion, AnimateSharedLayout } from 'framer-motion'

import Planet from './Planet'
import Star from './Star'
import ButtonsPanel from '../MenuPanel/Panel'

import { randomNum, randomCondition } from '../../helpers'

// image imports
import base from '../../images/planets/earth.png'
import mapBg from '../../images/background.jpg'
// planet images
import mars from '../../images/planets/mars.png'
import jupiter from'../../images/planets/jupiter.png'
import rings from '../../images/planets/rings.png'
import moon from '../../images/planets/moon.png'
import blue from '../../images/planets/blue.png'

// Audio Imports
import galactic from '../../audio/music/Galactic-Renaissance.mp3'
import jungle from '../../audio/music/Galactic-Renaissance.mp3'
import click from '../../audio/sfx/ui/click.ogg'

const bgMusic = [
    galactic,
    jungle
]

const clickSounds = [
    click
]

const planetData = [
    { name: 'Mars', img: mars },
    { name: 'Jupiter', img: jupiter },
    { name: 'Saturn', img: rings },
    { name: 'The Moon', img: moon },
    { name: 'Neptune', img: blue }
]

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
    margin-top: -3em;
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

const StatusText = styled(motion.h3)`
    background: #7D0D8D;
    border: 2px solid white;
    color: white;
    display: inline;
    font-family: 'Righteous', cursive;
    font-size: 0.9em;
    max-width: 200px;
    padding: 0.75em 1.25em;

    @media (min-width: 480px) {
        padding: 1em 2em;
        font-size: 1em;
    }

    @media (min-width: 640px) {
        font-size: 1.25em;
    }

    &.left {
        border-left: 0px;
        border-radius: 0 30px 30px 0;
    }

    &.right {
        border-right: 0px;
        border-radius: 30px 0 0 30px;
    }
`

const StatusTextContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const STAR_SPEED = 6
const STAR_BASE_COUNT = 3
const STAR_COUNT = 5
const STAR_POS_OFFSET = 40

// Should display a grid of earth & 5 other planets
// Should have a menu at the bottom that pops up when you select a planet
const Map = () => {
    const [stars, setStars] = useState([])
    const [caughtStars, setCaughtStars] = useState(0)
    const [selectedPlanet, setSelectedPlanet] = useState('base')
    const skyRef = useRef(null)
    const clearSelected = () => setSelectedPlanet('base')

    const mapMusic = useMemo(() => new Howl({
        src: [bgMusic[randomNum(bgMusic.length - 1)]],
        loop: true,
        volume: 0.75
    }), [])

    const uiSounds = useMemo(() => new Howl({
        src: [clickSounds[randomNum(clickSounds.length - 1)]],
        volume: 1.5
    }), [])

    // adds a random number of stars
    const addStars = () => setStars(currStars => {
        const count = randomNum(STAR_COUNT) + STAR_BASE_COUNT
        const newStars = [...new Array(count)].map(_x => {
            const star = {
                speed: randomNum(STAR_SPEED) + STAR_SPEED,
                size: randomCondition() ? 'small' : 'medium',
                timestamp: new Date()
            }
            // just a way to decide to offset by left or top
            const sideToOffset = randomCondition() ? 'top' : 'left'
            const amountToOffset = randomNum(STAR_POS_OFFSET)
            star[sideToOffset] = amountToOffset + '%'
            return star
        })

        const filteredStars = destroyOldStars(currStars)

        return [...filteredStars, ...newStars]
    })

    const destroyStar = (id) => setStars(currStars => {
        const newStars = destroyOldStars(currStars)
        newStars.pop()
        return newStars
    })

    const destroyOldStars = (currStars) => currStars.filter(s => {
        const oldTime = STAR_SPEED * 1000
        const timeDiff = Math.abs(new Date() - s.timestamp)
        return timeDiff < oldTime
    })

    const handleClick = e => {
        setSelectedPlanet(e.currentTarget.dataset.name)
    }

    const catchStar = () => {
        setCaughtStars(soFar => soFar + 1)
    }

    useEffect(() => {
        mapMusic.play()
        mapMusic.fade(0, 1, 200)
    }, [mapMusic])

    return (
        <MapContainer>
            <StatusTextContainer>
                <StatusText className='left'>{selectedPlanet === 'base' ? 'Welcome home' : `Exploring ${selectedPlanet}`}</StatusText>
                <StatusText className='right'>{`Stars caught: ${caughtStars}`}</StatusText>
            </StatusTextContainer>
            <StarContainer ref={skyRef} height={'100%'}>
                {stars.map((star, i) => (<Star
                    key={`star-${i}`}
                    top={star.top}
                    left={star.left}
                    size={star.size}
                    destroyTime={star.speed}
                    destroy={() => destroyStar(star.id)}
                    catchStar={catchStar}
                    containerRef={el => skyRef}
                />))}
            </StarContainer>

            <PlanetsContainer>
                <AnimateSharedLayout>
                    {planetData.map((planet, i) => {
                        return (
                            <Planet
                                key={i}
                                img={planet.img}
                                handleClick={handleClick}
                                name={planet.name}
                                isSelected={selectedPlanet === planet.name}
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
                addStars={addStars}
                destroyStar={destroyStar}
                clickSounds={uiSounds}
            />
        </MapContainer>
    )
}

export default Map

