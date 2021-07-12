import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const StyContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
`

const StyImage = styled.div`
  position: absolute;
  width: inherit;
  height: inherit;
  background-size: cover;
  background-position: center;
`

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
function CrossfadeCarousel({ ...props }) {
  const [active, setActive] = useState(
    props.forceActiveImage ? parseInt(props.forceActiveImage) : 0
  )
  const [firstTransitionIsDone, setFirstTransitionIsDone] = useState(false)

  useEffect(() => {
    if (props.forceActiveImage) return
    if (!props.cycle) return
    const timeout = setTimeout(() => {
      async function startImageTransition() {
        if (firstTransitionIsDone) await wait(props.transition)
        setActive(active === props.images.length - 1 ? 0 : active + 1)
        setFirstTransitionIsDone(true)
      }
      if (props.cycle) {
        startImageTransition()
      }
    }, props.interval)

    return () => clearTimeout(timeout)
  }, [active, firstTransitionIsDone, props])

  useEffect(() => {
    if (!props.forceActiveImage) return
    setActive(parseInt(props.forceActiveImage))
  }, [active, props.forceActiveImage])

  return (
    <StyContainer {...props}>
      {props.images.map((image, index) => (
        <StyImage
          key={`${image}-${index}`}
          style={{
            backgroundImage: `url(${image})`,
            opacity: active === index ? 1 : 0,
            transition: `opacity ${props.transition}ms`,
            ...props.imageStyles
          }}
          {...props.imageProps}
        />
      ))}
    </StyContainer>
  )
}

CrossfadeCarousel.defaultProps = {
  forceActiveImage: null,
  cycle: true,
  interval: 5000,
  transition: 5000,
  images: [
    'https://picsum.photos/id/118/1500/1000',
    'https://picsum.photos/id/120/4928/3264',
    'https://picsum.photos/id/127/4032/2272'
  ]
}

export default CrossfadeCarousel
