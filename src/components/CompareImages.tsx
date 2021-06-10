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

  // Centering resize element
  const compare = React.useRef(null)
  React.useEffect(() => {
    setWidth(getClientWidth(compare) / 2)
    setLeft(getOffsetLeft(compare))
  }, [compare])

  const mouseMove = (event: React.MouseEvent) => {
    setWidth((width) => getMouseX(event, left))
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
          style={{ ...bgImg(imgBefore), minWidth: getClientWidth(compare) }}
        ></div>
        <div className="compare__resize" data-type="resize"></div>
      </div>
      <div className="compare__after" style={bgImg(imgAfter)}></div>
    </div>
  )
}
