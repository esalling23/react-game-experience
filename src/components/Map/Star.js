import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { motion, useAnimation } from 'framer-motion'

const smallStar = '/images/star_small.png'
const mediumStar = '/images/star_medium.png'

const FlyingStar = styled(motion.img)`
    height: 5em;
    left: ${props => props.leftOffset};
    position: absolute;
    top: ${props =>  props.topOffset};
    width: 5em;
    z-index: 10;
`

const CATCH_ANIM_TIME = 0.6

const Star = ({ top, left, destroy, destroyTime, size }) => {
    const controls = useAnimation()
    const starRef = useRef(null)
    const [isShooting, setIsShooting] = useState(false)
    const [isCaught, setIsCaught] = useState(false)

    const starVariants = {
        shooting: {
            rotate: 360,
            opacity: ['0%', '60%', '100%', '60%', '0%'],
            times: [0, 0.4, 0.5, 0.8, 1],
            x: [-100, window.innerWidth + 500],
            y: [-100, window.innerHeight + 500],
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

    useEffect(() => {
        if (isCaught) {
            controls.stop()
            controls.start('caught')
                .then(() => {
                    destroy()
                })
        } else {
            if (!isShooting) {
                setIsShooting(true)
                controls.start('shooting')
                    .then(() => {
                        destroy()
                    })
            }

        }
    }, [isCaught, controls, destroy, isShooting])

    return (
        <FlyingStar
            ref={starRef}
            leftOffset={left || '-100px'}
            topOffset={top || '-100px'}
            src={size === 'small' ? smallStar : mediumStar}
            variants={starVariants}
            animate={controls}
            onMouseEnter={e => setIsCaught(true)}
        />
    )
}

export default Star
