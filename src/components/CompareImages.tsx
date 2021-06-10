import * as React from 'react'
import '../assets/css/compare-images.css'

function bgImg(img: string) {
  return { backgroundImage: `url(${img})` }
}

function getClientWidth(ref: React.MutableRefObject<null | HTMLElement>) {
  return ref.current?.clientWidth || 0
}

function getOffsetLeft(ref: React.MutableRefObject<null | HTMLElement>) {
  return ref.current?.offsetLeft || 0
}

function getMouseX(event: React.MouseEvent, left: number) {
  return event.nativeEvent.x - left
}

interface CompareImagesProps {
  height: number
  imgBefore: string
  imgAfter: string
}

export const CompareImages = (props: CompareImagesProps) => {
  const { height, imgBefore, imgAfter } = props

  const [width, setWidth] = React.useState(0)
  const [left, setLeft] = React.useState(0)
  const [rectWidth, setRectWidth] = React.useState(0)

  // Resizing
  const compare = React.useRef(null)
  const resize = () => {
    setLeft(getOffsetLeft(compare))
    setRectWidth(getClientWidth(compare))
  }

  React.useEffect(() => {
    resize()
    setWidth(getClientWidth(compare) / 2)
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [compare])

  const mouseMove = (event: React.MouseEvent) => {
    requestAnimationFrame(() => {
      setWidth(getMouseX(event, left))
    })
  }

  return (
    <div
      className="compare"
      ref={compare}
      style={{ height: height + 'px' }}
      onMouseMove={mouseMove}
    >
      <div className="compare__before" style={{ width: width + 'px' }}>
        <div
          className="compare__after"
          style={{ ...bgImg(imgBefore), minWidth: rectWidth }}
        ></div>
        <div className="compare__resize" data-type="resize"></div>
      </div>
      <div className="compare__after" style={bgImg(imgAfter)}></div>
    </div>
  )
}
