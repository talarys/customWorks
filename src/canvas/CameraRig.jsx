import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import { useSnapshot } from 'valtio'
import { useRef } from 'react'

import state from '../store'

export const CameraRig = ({ children }) => {
  const group = useRef()
  return <group ref={group}>{children}</group>
}
