import * as React from 'react'
import { doc, deleteDoc, collection } from "firebase/firestore";
import { auth, firestore, db } from '../config/firebase'
import { 
  useToast, 
  Modal, 
  ModalOverlay, 
  ModalBody, 
  ModalContent, 
  ModalCloseButton, 
  ModalFooter, 
  ModalHeader, 
  useDisclosure, 
  Button
} from '@chakra-ui/react'
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
    <div className='m-2 shrink-0' >
      <motion.button 
        whileHover={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        onClick={onOpen}
      >
      <div class="relative block p-3 border border-gray-100 hover:bg-slate-100 rounded-lg shadow-md">
        <div className="flex justify-between items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
        </svg>

          <Button 
            colorScheme='red' 
            size='xs'
            variant='ghost' 
            onClick={() => deleteDocument(abbrev)}
            className="text-center align-middle"
          >
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
          </svg>
 
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

