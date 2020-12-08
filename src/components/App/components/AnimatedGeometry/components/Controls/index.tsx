import React from 'react'
import { useThree } from 'react-three-fiber'
import { OrbitControls } from 'drei'

//@ts-ignore
import { useSpring } from 'react-spring/three'

interface ControlsProps extends OrbitControls {}

const Controls = ({ enableZoom = false }: ControlsProps) => {
  const { gl, camera } = useThree()

  useSpring({
    from: {
      z: 2000,
    },
    z: 0,
    x: 5,
    y: 0,
    onFrame: ({ z, x, y }: { z: number; x: number; y: number }) => {
      camera.position.z = z
      camera.position.x = x
      camera.position.y = y
    },
  })

  return <OrbitControls {...{ enableZoom }} args={[camera, gl.domElement]} />
}

export default Controls
