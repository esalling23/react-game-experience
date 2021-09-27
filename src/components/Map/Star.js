import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react'
import styled from 'styled-components'
import { Howl } from 'howler'
import { motion, useAnimation } from 'framer-motion'

import { randomNum } from '../../helpers'

// Image imports
import smallStar from '../../images/star_small.png'
import mediumStar from '../../images/star_medium.png'

// Audio imports
import fairySwoosh from '../../audio/sfx/stars/shooting/fairy-swoosh.wav'
import fireSwoosh from '../../audio/sfx/stars/shooting/fire-swoosh.wav'
import futureSwoosh from '../../audio/sfx/stars/shooting/future-swoosh.wav'
import sweepingSwoosh from '../../audio/sfx/stars/shooting/sweeping-swoosh.wav'
import fairyGlow from '../../audio/sfx/stars/caught/fairy-glow.wav'
import flitter from '../../audio/sfx/stars/caught/flitter.wav'
import magic from '../../audio/sfx/stars/caught/magic.wav'

const flyingSounds = [
    fairySwoosh,
    fireSwoosh,
    futureSwoosh,
    sweepingSwoosh
]
const caughtSounds = [
    fairyGlow,
    flitter,
    magic
]

const FlyingStar = styled(motion.img)`
    height: 2.5em;
    left: ${props => props.leftOffset};
    position: absolute;
    top: ${props =>  props.topOffset};
    width: 2.5em;
    z-index: 10;
`

const CATCH_ANIM_TIME = 0.6

const Star = ({
    containerRef,
    top,
    left,
    destroy,
    destroyTime,
    size,
    catchStar
}) => {
    const controls = useAnimation()

    const starRef = useRef(null)
    const destroyTimeout = useRef(null)

    const [isShooting, setIsShooting] = useState(false)
    const [isCaught, setIsCaught] = useState(false)
    const [soundPlayed, setSoundPlayed] = useState(false)

    const shootSfx = useMemo(() => new Howl({
        src: flyingSounds[randomNum(flyingSounds.length - 1)],
        rate: 0.25,
        volume: 0.15,
    }), [])
    const caughtSfx = useMemo(() => new Howl({
        src: caughtSounds[randomNum(caughtSounds.length - 1)],
        rate: 1.2,
        volume: 0.8,
    }), [])

    const starVariants = {
        shooting: {
            rotate: 360,
            opacity: ['0%', '80%', '100%', '80%', '0%'],
            times: [0, 0.1, 0.5, 0.8, 1],
            x: window.innerWidth,
            y: window.innerHeight,
            transition: {
                duration: destroyTime
            }
        },
        caught: {
            scale: 2,
            opacity: 0,
            transition: {
                duration: CATCH_ANIM_TIME
            }
        }
    }

    const options = useMemo(() => ({
        root: containerRef.current,
        rootMargin: '0px',
        threshold: 1.0
    }), [containerRef])

    // Determines if star is visible & plays sfx
    const checkStarVisible = useCallback((entries) => {
        const [entry] = entries

        if (entry.isIntersecting && !soundPlayed && starRef.current) {
            shootSfx.play()
            setSoundPlayed(true)
        }
    }, [soundPlayed, starRef, shootSfx])

    useEffect(() => {
        const star = starRef.current
        const observer = new IntersectionObserver(checkStarVisible, options)

        if (star) {
            observer.observe(star)
        }

        return () => {
            if (star) observer.unobserve(star)
        }
    }, [starRef, checkStarVisible, options])

    // Handles shooting vs caught animations
    // Stars are destroyed after caught & destroyTimeout is cleared
    useEffect(() => {
        if (isCaught) {
            controls.stop()
            caughtSfx.play()
            shootSfx.fade(1, 0, 1000)
            caughtSfx.fade(0, 1, 500).fade(1, 0, 2000)
            controls.start('caught')
                    .then(() => {
                        destroy()
                        clearTimeout(destroyTimeout.current)
                    })
        } else {
            if (!isShooting) {
                setIsShooting(true)
                controls.start('shooting')
                    .then(() => {
                        destroy()
                        clearTimeout(destroyTimeout.current)
                    })
            }
        }
    }, [isCaught, controls, destroy, isShooting, caughtSfx, shootSfx])

    // Sets up timer to destroy star after animation time
    useEffect(() => {
        destroyTimeout.current = setTimeout(() => {
            destroy()
        }, destroyTime * 1000)

        return function () {
            clearTimeout(destroyTimeout.current)
        }
    }, [destroyTime, destroy])

    const handleMouseEnter = useCallback(e => {
        if (!isCaught) {
            catchStar()
            setIsCaught(true)
        }
    }, [isCaught, catchStar])

    return (
        <FlyingStar
            ref={starRef}
            leftOffset={left || '-100px'}
            topOffset={top || '-100px'}
            src={size === 'small' ? smallStar : mediumStar}
            variants={starVariants}
            animate={controls}
            onMouseEnter={handleMouseEnter}
        />
    )
}

export default Star
