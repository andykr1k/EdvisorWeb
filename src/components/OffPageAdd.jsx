import * as React from 'react'
import { auth, firestore, db } from '../config/firebase'
import { AddCourseForm } from '../components'
import { motion } from 'framer-motion'
import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, Stack, Box, FormLabel, Input, InputGroup, InputLeftAddon, InputRightAddon, Select, Textarea, Button} from '@chakra-ui/react'

export default function OffCanvasExample() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const firstField = React.useRef()

  return (
    <>
      <Button colorScheme='teal' onClick={onOpen}>
        Create New Course
      </Button>
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