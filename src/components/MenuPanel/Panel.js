import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion, AnimateSharedLayout } from 'framer-motion'

import BGColorButton from './BGColorButton'

const SPIN_BTN_SIZE = 2
const SPIN_BTN_SCALE = 1.1
// 1/10 of the scale to get increase (ex: 1.1 => 0.1)
// 1/4 of the size to get radius
const SPIN_BTN_ANIM_OFFSET = -(SPIN_BTN_SIZE / 4) * (SPIN_BTN_SCALE / 10)

const MotionBackground = styled(motion.div)`
    background: ${props => props.bgColor};
    display: flex;
    height: 100%;
    place-content: center;
    width: 100%;
    z-index: 100;
`

const BGButtonContainer = styled(motion.div)`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    place-content: center;
    width: 75%;

    @media(min-width: 768px) {
        flex-wrap: nowrap;
    }
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
    height: ${SPIN_BTN_SIZE}rem;
    left: 0;
    margin: 1rem;
    position: absolute;
    top: 0;
    width: ${SPIN_BTN_SIZE}rem;

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
        height: 0,
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
    planetSelected,
    addStar
}) => {
    const [selectedBtn, setSelectedBtn] = useState(colors[0])
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        if (planetSelected !== 'base') {
            setIsOpen(true)
        } else {
            setIsOpen(false)
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
                    scale: SPIN_BTN_SCALE,
                    // offset to keep it centered
                    y: `${SPIN_BTN_ANIM_OFFSET}rem`,
                    x: `${SPIN_BTN_ANIM_OFFSET}rem`
                }}
                transition={{
                    duration: 0.1
                }}
                onClick={e => {
                    setIsOpen(false)
                }}
            />
            <BGButtonContainer variants={{
                open: { opacity: 1, y: 0 },
                closed: { opacity: 0, y: '100%' }
            }}>
                <AnimateSharedLayout>
                    {colors.map(c => (
                        <BGColorButton
                            key={c}
                            color={c}
                            isSelected={selectedBtn === c}
                            onClick={() => setSelectedBtn(c)}
                            onComplete={addStar}
                        />
                    ))}
                </AnimateSharedLayout>
            </BGButtonContainer>
        </MotionBackground>
    )
}

export default ButtonsPanel
