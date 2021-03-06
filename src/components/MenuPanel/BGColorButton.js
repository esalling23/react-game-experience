import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const MotionButton = styled(motion.button)`
    background: ${props => props.bgColor};
    border: 0.16em solid rgba(255,255,255,0.35);
    border-radius: 2em;
    box-sizing: border-box;
    color: #FFFFFF;
    font-size: 2.8vw;
    font-family: 'Roboto',sans-serif;
    font-weight: 300;
    flex-wrap: wrap;
    height: 2em;
    margin: 0.5em;
    padding: 0.3em 1.2em;
    position: relative;
    text-decoration: none;
    text-shadow: 0 0.04em 0.04em rgba(0,0,0,0.35);
    text-align: center;
    transition: all 0.2s;
    z-index: 1;

    &:hover {
        border-color: ${props => props.selected ? props.bgColor : 'white'};
        cursor: pointer;
        font-weight: bold;
    }

    @media(min-width: 768px) {
        flex-wrap: no-wrap;
        font-size: 1.9vw;
    }
`

const BGColorButton = ({
    color,
    isSelected,
    onClick,
    onComplete
}) => {
    return (
        <MotionButton
            bgColor="transparent"
            selected={isSelected}
            onClick={onClick}
        >
            {isSelected && (
                <motion.div
                    layoutId="btn-background"
                    className="btn-background"
                    initial={false}
                    animate={{
                        backgroundColor: color,
                        borderColor: color
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30
                    }}
                    onAnimationComplete={onComplete}
                />
            )}
            Click Me
        </MotionButton>

    )
}

export default BGColorButton
