import { AnimatePresence, motion } from 'framer-motion'
import { useSnapshot } from 'valtio'
import { threeJsIcon } from '../assets'

import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from '../config/motion'

import CustomButton from '../components/CustomButton'
import state from '../store'

const Home = () => {
  const snap = useSnapshot(state)

  return (
    <AnimatePresence>
      {snap.intro && (
        // Logo
        <motion.section className='home' {...slideAnimation('left')}>
          <motion.header {...slideAnimation('down')}>
            <img
              src={threeJsIcon}
              alt='logo'
              className='w-8 h-8 object-contain'
            />
          </motion.header>
          {/* Lets do it */}
          <motion.div {...headTextAnimation}>
            <h1 className='head-text'>
              LET'S <br className='xl:block hidden' /> DO IT.
            </h1>
          </motion.div>
          {/* Random marketing */}
          <motion.div {...headContentAnimation} className='flex flex-col gap-5'>
            <p className='max-w-md font-normal text-gray-600 text-base'>
              Create your unique and exclusive shirt with out brand new 3D
              customization tool. <strong>Unleash your imagination</strong> and
              define your own style
            </p>
          </motion.div>
          <CustomButton
            type='filled'
            title='Customize It'
            handleClick={() => (state.intro = false)}
            customStyles='w-fit px-4 py-2.5 font-bold text-sm'
          />
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home
