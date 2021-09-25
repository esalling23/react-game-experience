import React from 'react'
import styled from 'styled-components'

const PlanetContainer = styled.div`
    align-items: center;
    display: flex;
    height: 50%;
    margin: 1rem;
    max-height: 20vw;
    place-content: center;
    position: relative;
    text-align: center;
    width: 30vw;
`

const PlanetImg = styled.img`
    min-height: 8em;
    z-index: 0;
`

const Planet = ({
    img,
    handleClick,
    name
}) => {

    return (
        <PlanetContainer
            onClick={handleClick}
            data-name={name}
        >
            <PlanetImg
                src={img}
            />
        </PlanetContainer>
    )
}

export default Planet
