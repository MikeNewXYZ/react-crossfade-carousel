import React, { useState } from 'react'
import CrossfadeCarousel from '@notbaldrick/react-crossfade-carousel'
import styled from 'styled-components'

const StyContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.5rem;
  position: absolute;
  z-index: 100;
  background-color: rgb(255 255 255 / 25%);
  backdrop-filter: blur(5px);
  padding: 1rem;
  margin-bottom: 2rem;
  border-radius: 0.25rem;
  box-shadow: 0 0.25rem 0.25rem rgb(0 0 0 / 25%);
`

const StyHeader = styled.div`
  font-size: 3rem;
  font-weight: bold;
`

const StyOptionControl = styled.div`
  width: 100%;
`

const StyButton = styled.button`
  width: 100%;
  height: 3rem;
  font-size: 2rem;
  cursor: pointer;
  border: none;
  border-radius: 0.25rem;
  outline: none;
`

const StyInput = styled.input`
  width: 100%;
  height: 3rem;
  font-size: 2rem;
  border: none;
  border-radius: 0.25rem;
  outline: none;
`

const images = [
  'https://picsum.photos/id/118/1500/1000',
  'https://picsum.photos/id/120/4928/3264',
  'https://picsum.photos/id/127/4032/2272'
]

function App() {
  const [forceActiveImage, setForceActiveImage] = useState(-1)
  const [interval, setInterval] = useState(5000)
  const [transition, setTransition] = useState(5000)
  const [cycle, setCycle] = useState(true)

  return (
    <StyContainer>
      <StyOptionsContainer>
        <StyHeader>Carousel Options</StyHeader>
        <StyOptionControl>
          <p>props.cycle: {cycle ? 'true' : 'false'}</p>
          <StyButton onClick={() => setCycle(!cycle)}>
            {cycle ? 'Pause' : 'Play'} Carousel
          </StyButton>
        </StyOptionControl>
        <StyOptionControl>
          <p>
            props.forceActiveImage:{' '}
            {forceActiveImage < 0 ? 'null' : forceActiveImage}
          </p>
          <StyInput
            type='number'
            value={forceActiveImage}
            onChange={(e) => setForceActiveImage(e.target.value)}
            max={images.length - 1}
            min={-1}
          />
        </StyOptionControl>
        <StyOptionControl>
          <p>props.interval: {interval}</p>
          <StyInput
            type='number'
            value={interval}
            onChange={(e) => setInterval(e.target.value)}
          />
        </StyOptionControl>
        <StyOptionControl>
          <p>props.transition: {transition}</p>
          <StyInput
            type='number'
            value={transition}
            onChange={(e) => setTransition(e.target.value)}
          />
        </StyOptionControl>
      </StyOptionsContainer>
      <CrossfadeCarousel
        forceActiveImage={forceActiveImage < 0 ? null : forceActiveImage}
        interval={interval}
        transition={transition}
        cycle={cycle}
        images={images}
        imageProps={{
          onClick: () => console.log('Heyo')
        }}
        imageStyles={{
          filter: 'blur(2px)'
        }}
      />
    </StyContainer>
  )
}

export default App
