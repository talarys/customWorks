import { proxy } from 'valtio'
import { threeJsIcon } from './assets'

const state = proxy({
  intro: true,
  color: '#EFBD48',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: threeJsIcon,
  fullDecal: threeJsIcon,
})

export default state
