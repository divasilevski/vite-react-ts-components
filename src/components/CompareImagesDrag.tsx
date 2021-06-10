import * as React from 'react'
import '../assets/css/compare-images.css'

function bgImg(img: string) {
  return { backgroundImage: `url(${img})` }
}

function getClientWidth(ref: React.MutableRefObject<null | HTMLElement>) {
  return ref.current?.clientWidth || 0
}

function getMouseClientX(event: React.MouseEvent) {
  return event.nativeEvent.clientX
}

interface CompareImagesProps {
  height: number
  imgBefore: string
  imgAfter: string
}

export const CompareImagesDrag = (props: CompareImagesProps) => {
  const { height, imgBefore, imgAfter } = props

  const [width, setWidth] = React.useState(0)
  const [shift, setShift] = React.useState(-1)

  // Centering resize element
  const compare = React.useRef(null)
  React.useEffect(() => {
    setWidth(getClientWidth(compare) / 2)
  }, [compare])

  const mouseDown = (event: React.MouseEvent) => {
    const target = event.nativeEvent.target as HTMLElement
    if (target.dataset.type === 'resize') {
      setShift(getMouseClientX(event))
    }
  }

  const mouseMove = (event: React.MouseEvent) => {
    if (shift !== -1) {
      const current = getMouseClientX(event) - shift
      setWidth((width) => width + current)
      setShift(getMouseClientX(event))
    }
  }

  return (
    <div
      className="compare"
      ref={compare}
      style={{ height: height + 'px' }}
      onMouseDown={mouseDown}
      onMouseMove={mouseMove}
      onMouseUp={() => setShift(-1)}
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
