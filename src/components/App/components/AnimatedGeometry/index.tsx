import React, { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame, useLoader } from 'react-three-fiber'
import * as THREE from 'three'

const logo = require('../../../../images/react_light.png')

//@ts-ignore
import { useSpring, a } from 'react-spring/three'

import { perlin3 } from './noise'

import Controls from './components/Controls'

const Shape = () => {
  const texture = useLoader(THREE.TextureLoader, logo)

  const [expand, setExpand] = useState(true)

  const sphereGeometryRef = useRef()
  const inputScale = 1.3

  useFrame(({ clock }) => {
    const sphereGeometry: any = sphereGeometryRef.current
    // @ts-ignore
    const { vertices } = sphereGeometry
    const time = clock.getElapsedTime()

    for (let i = 0, verticesLength = vertices.length; i < verticesLength; i++) {
      const p = vertices[i]
      p.normalize().multiplyScalar(
        1 +
          0.3 *
            perlin3(
              p.x * inputScale + time,
              p.y * inputScale - time,
              p.z * inputScale
            )
      )
    }

    sphereGeometry.verticesNeedUpdate = true
    sphereGeometry.computeVertexNormals()
    sphereGeometry.normalsNeedUpdate = true
  })

  const handleExpand = () => setExpand(!expand)

  // React spring expand animation
  const { scale }: { scale: number[] } = useSpring({
    scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1],
  })

  return (
    <a.mesh onClick={handleExpand} {...{ scale }}>
      <sphereGeometry
        attach="geometry"
        args={[1.0, 26, 26]}
        ref={sphereGeometryRef}
      />
      <meshBasicMaterial attach="material" map={texture} wireframe={expand} />
    </a.mesh>
  )
}

const AnimatedGeometry = () => (
  <Canvas className="shape-canvas">
    <Suspense fallback={null}>
      <Shape />
      <Controls />
    </Suspense>
  </Canvas>
)

export default AnimatedGeometry
