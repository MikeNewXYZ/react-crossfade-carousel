# @notbaldrick/react-crossfade-carousel

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/@notbaldrick/react-crossfade-carousel.svg)](https://www.npmjs.com/package/@notbaldrick/react-crossfade-carousel) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @notbaldrick/react-crossfade-carousel
```

```bash
yarn add @notbaldrick/react-crossfade-carousel
```

## Showcase

![gif-0](https://user-images.githubusercontent.com/61548969/125351766-63726280-e358-11eb-8a5b-770715c5d8ba.gif)

### [Click here to view an example.](https://codesandbox.io/s/react-crossfade-carousel-efc0b?file=/src/App.js 'sandbox example')

## Usage

```jsx
import CrossfadeCarousel from '@notbaldrick/react-crossfade-carousel'

function Example() {
  return (
    <CrossfadeCarousel
      interval={3000}
      transition={2000}
      images={[
        'https://picsum.photos/id/118/1500/1000',
        'https://picsum.photos/id/120/4928/3264',
        'https://picsum.photos/id/127/4032/2272'
      ]}
    />
  )
}
```

### props.images

You can put as much or as few images in the array as you want.

```jsx
<CrossfadeCarousel
  images={[
    'https://picsum.photos/id/118/1500/1000',
    'https://picsum.photos/id/120/4928/3264',
    'https://picsum.photos/id/127/4032/2272'
  ]}
/>
```

### props.cycle

If TRUE the cycle prop will loop through all the images.
You can set the cycle prop to FALSE to pause the cycling of images.

```jsx
function example() {
  const [pause, setPause] = useState(false)

  return <CrossfadeCarousel cycle={pause} onClick={() => setPause(!pause)} />
}
```

### props.interval

Interval is the time in milliseconds where the image is shown before transitioning to the next.

```jsx
<CrossfadeCarousel interval={6900} />
```

### props.transition

Transition is the time in milliseconds where one image transitions to the next.

```jsx
<CrossfadeCarousel transition={4200} />
```

### props.forceActiveImage

By default it's set to NULL, but if given a number the carousel will show the corresponding image.
For example if given the value of 2 the carousel will show the third image in the array.
If it's a TRUTHY value then the cycling of images will stop, even if the cycle prop is set to TRUE.

```jsx
const images = [
  'https://picsum.photos/id/118/1500/1000',
  'https://picsum.photos/id/120/4928/3264',
  'https://picsum.photos/id/127/4032/2272'
]

function Example() {
  const [activeImage, setActiveImage] = useState(0)

  function nextImage() {
    setActiveImage(active === props.images.length - 1 ? 0 : active + 1)
  }

  function previousImage() {
    setActiveImage(activeImage === 0 ? images.length - 1 : active - 1)
  }

  return (
    <>
      <button onClick={nextImage}> Next Image </button>
      <button onClick={previousImage}> Previous Image </button>
      <CrossfadeCarousel images={images} forceActiveImage={activeImage} />
    </>
  )
}
```

### props.imageProps

Add props to every image component.

```jsx
<CrossfadeCarousel
  imageProps={{
    onClick: () => console.log('Heyo')
  }}
/>
```

### props.imageStyles

Add inline styles to every image component.

```jsx
<CrossfadeCarousel
  imageStyles={{
    filter: 'blur(2px)'
  }}
/>
```

## API

| Name             | Required | Type    | Default    |
| ---------------- | -------- | ------- | ---------- |
| images           | no       | array   | [3 images] |
| cycle            | no       | boolean | true       |
| interval         | no       | number  | 5000       |
| transition       | no       | number  | 5000       |
| forceActiveImage | no       | number  | null       |
| imageProps       | no       | object  | {}         |
| imageStyles      | no       | object  | {}         |

## License

MIT © [NotBaldrick](https://github.com/NotBaldrick)
