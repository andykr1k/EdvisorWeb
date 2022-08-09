import * as React from 'react'
import { doc, deleteDoc, collection } from "firebase/firestore";
import { auth, firestore, db } from '../config/firebase'
import { useToast, Modal, ModalOverlay, ModalBody, ModalContent, ModalCloseButton, ModalFooter, ModalHeader, useDisclosure, Button} from '@chakra-ui/react'
import { motion } from 'framer-motion'
function CourseCard(props) {
const toast = useToast();
const { gpa, name, abbrev, units } = props;
const pathString = "users/" + auth.currentUser.uid + "/courses"
const coursesRef = firestore.collection(pathString);
const { isOpen, onOpen, onClose } = useDisclosure()

const deleteDocument = async (id) => {
  const userCourses = doc(db, pathString, id)
  await deleteDoc(userCourses);
  toast({
    title: 'Course Deleted.',
    description: "We've deleted your course.",
    status: 'warning',
    duration: 9000,
    isClosable: true,
  });
  console.log("Deleted course");
}

  return (
    <div className='m-2 shrink-0 ' >
      <motion.button 
        whileHover={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        onClick={onOpen}
      >
      <div class="relative block p-3 border border-gray-100 shadow-md rounded-xl">
        <div className="flex justify-between items-center">
        <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="grey"
              stroke-width="2"
              >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />f
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
          </svg>
          <Button 
            colorScheme='red' 
            size='xs'
            variant='ghost' 
            onClick={() => deleteDocument(abbrev)}
            className="text-center align-middle"
          >
            -
          </Button>
        </div>
          
        <div class="mt-2 text-gray-500">

            <h5 class="mt-2 text-xl font-bold text-gray-900">{name}</h5>
            <div>
                <p class="mt-2 text-sm">
                {abbrev}
                </p>
            </div>
        </div>
        <div className='flex mt-2 space-x-1'>
            <div class="rounded-md p-2 bg-green-100 text-green-600 font-medium text-xs">
            GPA: {gpa}
            </div>
            <div class="rounded-md p-2 bg-orange-100 text-orange-600 font-medium text-xs">
            Units: {units}
            </div>
        </div>
      </div>
    </motion.button>

      <Modal isOpen={isOpen} onClose={onClose} size='sm' isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {name}
            <div>
                <p class="mt-2 text-sm">
                {abbrev}
                </p>
            </div>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          
          <div className='flex mt-2 space-x-1'>
            <div class="rounded-md p-2 bg-green-100 text-green-600 font-medium text-xs">
            GPA: {gpa}
            </div>
            <div class="rounded-md p-2 bg-orange-100 text-orange-600 font-medium text-xs">
            Units: {units}
            </div>
          </div>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Edit
            </Button>
            <Button 
            colorScheme='red' 
            variant='outline' 
            onClick={() => deleteDocument(abbrev)}
            className="text-center align-middle"
          >
            Delete
          </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
    
  )
}

export default CourseCard

