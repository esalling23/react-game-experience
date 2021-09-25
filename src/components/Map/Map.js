import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import Planet from './Planet'
import ButtonsPanel from './ButtonsPanel'

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
    const [selectedPlanet, setSelectedPlanet] = useState(null)

    const clearSelected = () => setSelectedPlanet(null)

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
                {planets.map((img, i) => (
                    <Planet
                        key={i}
                        img={planets[i]}
                        handleClick={handleClick}
                        name={`planet-${i}`}
                    />
                ))}
                <Planet
                    key={'base'}
                    img={base}
                    handleClick={handleClick}
                    name={'homebase'}
                />
            </PlanetsContainer>
            <ButtonsPanel
                clearSelected={clearSelected}
                planetSelected={selectedPlanet}
            />
        </MapContainer>
    )
}

export default Map

