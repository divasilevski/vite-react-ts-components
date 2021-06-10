import * as React from 'react'
import '../assets/css/compare-images.css'

function bgImg(img: string) {
  return { backgroundImage: `url(${img})` }
}

function getClientWidth(ref: React.MutableRefObject<null | HTMLElement>) {
  return ref.current?.clientWidth || 0
}

interface CompareImagesProps {
  height: number
  imgBefore: string
  imgAfter: string
}

export const CompareImagesScroll = (props: CompareImagesProps) => {
  const { height, imgBefore, imgAfter } = props

  const [width, setWidth] = React.useState(100)
  const [rectWidth, setRectWidth] = React.useState(0)

  // Resizing
  const compare = React.useRef(null)
  const resize = () => {
    setRectWidth(getClientWidth(compare))
  }

  React.useEffect(() => {
    resize()
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [compare])

  // Scrolling
  const callback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      requestAnimationFrame(() => {
        const ratio =
          entry.boundingClientRect.y > 0
            ? entry.intersectionRatio
            : 2 - entry.intersectionRatio
        setWidth(100 * (ratio / 2))
      })
    })
  }

  React.useEffect(() => {
    const $el = compare.current as HTMLElement | null
    const observer = new IntersectionObserver(callback, {
      threshold: new Array(31).fill(0).map((_, i) => i / 30),
    })
    if ($el) observer.observe($el)
    return () => observer.disconnect()
  }, [compare])

  return (
    <div className="compare" ref={compare} style={{ height: height + 'px' }}>
      <div
        className="compare__before"
        style={{ width: width + '%', transition: 'width 0.3s ease' }}
      >
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
