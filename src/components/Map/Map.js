import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { AnimateSharedLayout } from 'framer-motion'

import Planet from './Planet'
import ButtonsPanel from '../MenuPanel/Panel'

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

// Should display a grid of earth & 5 other planets
// Should have a menu at the bottom that pops up when you select a planet
const Map = () => {
    const [selectedPlanet, setSelectedPlanet] = useState('base')

    const clearSelected = () => setSelectedPlanet('base')

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
            />
        </MapContainer>
    )
}

export default Map

