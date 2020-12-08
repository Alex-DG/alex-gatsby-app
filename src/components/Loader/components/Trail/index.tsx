import React from 'react'
import { useTrail, animated } from 'react-spring'

interface ITrail
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  open: boolean
}

const Trail = ({ open, children, ...props }: ITrail) => {
  const items = React.Children.toArray(children)

  const trail = useTrail(items.length, {
    config: { mass: 15, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 60 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })

  return (
    <div className="trails-main" {...props}>
      {trail.map(({ x, height, ...props }, index) => (
        <animated.div
          key={index}
          style={{
            ...props,
            // @ts-ignore
            transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
          }}
        >
          <animated.div style={{ height }}>{items[index]}</animated.div>
        </animated.div>
      ))}
    </div>
  )
}

export default Trail
