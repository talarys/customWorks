import { proxy } from 'valtio'
import { threeJsIcon, galaxy } from './assets'

const state = proxy({
  intro: true,
  color: '#EFBD48',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: threeJsIcon,
  fullDecal: galaxy,
})

export default state
