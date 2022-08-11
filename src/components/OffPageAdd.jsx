import * as React from 'react'
import { auth, firestore, db } from '../config/firebase'
import { AddCourseForm } from '../components'
import { motion } from 'framer-motion'
import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, Stack, Box, FormLabel, Input, InputGroup, InputLeftAddon, InputRightAddon, Select, Textarea, Button} from '@chakra-ui/react'

export default function OffPageAdd() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const firstField = React.useRef()

  return (
    <>
      <motion.button 
        onClick={onOpen}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }} 
        className='bg-slate-500 rounded-lg shadow-lg p-3 text-center text-sm text-white' 
      >
        Add Course
      </motion.button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth='1px'>
          Create New Course
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing='24px'>
              <AddCourseForm />
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}