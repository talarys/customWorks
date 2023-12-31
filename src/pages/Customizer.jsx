import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useSnapshot } from 'valtio'

import { downloadIcon } from '../assets'
import config from '../config/config'
import state from '../store'

import { DecalTypes, EditorTabs, FilterTabs } from '../config/constants'

import { fadeAnimation, slideAnimation } from '../config/motion'

import {
  AIPicker,
  ColorPicker,
  CustomButton,
  FilePicker,
  Tab,
} from '../components'

const Customizer = () => {
  const snap = useSnapshot(state)

  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          {/* Left sidebar */}
          <motion.div
            key='custom'
            className='absolute top-0 left-0 z-10'
            {...slideAnimation('left')}
          >
            <div className='flex items-center min-h-screen'>
              <div className='editortabs-container tabs'>
                {EditorTabs.map((tab) => (
                  <Tab key={tab.name} tab={tab} handleClick={() => {}} />
                ))}
              </div>
            </div>
          </motion.div>
          {/* Go Back Button */}
          <motion.div
            className='absolute z-10 top-5 right-5'
            {...fadeAnimation}
          >
            <CustomButton
              type='filled'
              title='Go Back'
              handleClick={() => (state.intro = true)}
              customStyle='w-fit px-4 py-2.5 font-bold text-sm'
            />
          </motion.div>
          {/* Bottom Bar */}
          <motion.div
            className='filtertabs-container'
            {...slideAnimation('up')}
          >
            {FilterTabs.map((tab) => (
              <Tab
                key={tab.name}
                tab={tab}
                isFilterTab
                isActiveTab=''
                handleClick={() => {}}
              />
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default Customizer
