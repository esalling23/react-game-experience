import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion, AnimateSharedLayout } from 'framer-motion'

import BGColorButton from './BGColorButton'

const MotionBackground = styled(motion.div)`
    align-items: center;
    background: ${props => props.bgColor};
    display: flex;
    height: 100%;
    justify-content: center;
    width: 100%;
`

const SpinCloseButton = styled(motion.button)`
    background: url('/images/white-close-btn.png');
    background-repeat: no-repeat;
    background-size: contain;
    border: 0;
    color: #fff;
    display: inline-block;
    font-family: Arial, sans-serif;
    font-weight: 300;
    height: 2em;
    margin: 1em;
    width: 2em;

    &:hover {
        cursor: pointer;
    }
`

const colors = [
    '#ee4a4a',
    '#bc74bb',
    '#86aedf',
    '#5bbe87',
    '#ffb057',
]

const sidebar = {
    open: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            type: 'spring',
            ease: 'linear',
            bounce: 0.1,
            restDelta: 0.25
        }
    },
    closed: {
        opacity: 0,
        y: '100%',
        transition: {
            delay: 0.2,
            type: "spring",
            stiffness: 50,
            damping: 10
        }
    }
}

const ButtonsPanel = ({
    clearSelected,
    planetSelected
}) => {
    const [selectedBtn, setSelectedBtn] = useState(colors[0])
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        if (planetSelected !== 'base') {
            setIsOpen(true)
        }
    }, [planetSelected])

    return (
        <MotionBackground
            bgColor="black"
            style={{
                height: '12em',
                width: '100%',
            }}
            animate={isOpen ? 'open' : 'closed'}
            variants={sidebar}
            onAnimationComplete={() => !isOpen && clearSelected()}
        >
            <SpinCloseButton
                whileHover={{
                    rotate: 90,
                    scale: 1.1,
                }}
                transition={{
                    duration: 0.1
                }}
                onClick={e => {
                    setIsOpen(false)
                }}
            />
            <AnimateSharedLayout>
                {colors.map(c => (
                    <BGColorButton
                        key={c}
                        color={c}
                        isSelected={selectedBtn === c}
                        onClick={() => setSelectedBtn(c)}
                    />
                ))}
            </AnimateSharedLayout>

        </MotionBackground>
    )
}

export default ButtonsPanel
