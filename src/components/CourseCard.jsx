import * as React from 'react'
import { doc, deleteDoc, collection } from "firebase/firestore";
import { auth, firestore, db } from '../config/firebase'
import { Button, useToast } from '@chakra-ui/react'
import { parsePath } from 'react-router-dom';

function CourseCard(props) {
const toast = useToast();
const { gpa, name, abbrev, units } = props;
const pathString = "users/" + auth.currentUser.uid + "/courses"
const coursesRef = firestore.collection(pathString);

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
    <div className=' m-2 shrink-0'>
      
        <div class="relative block p-4 border border-gray-100 shadow-md rounded-xl">
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
            <Button colorScheme='teal' height={7} width={2} variant='link' onClick={() => deleteDocument(abbrev)}>
              -
            </Button>
          </div>
            
        <div class="mt-2 text-gray-500 sm:pr-8">

            <h5 class="mt-2 text-xl font-bold text-gray-900">{name}</h5>
            <div>
                <p class="mt-2 text-sm">
                {abbrev}
                </p>
                {/* <ul class='text-sm list-disc marker:text-green-500'>
                    <li>UC Transferable</li>
                </ul> */}
            </div>
        </div>
        <div className='flex mt-1 space-x-1'>
            <div class="rounded-md p-2 bg-green-100 text-green-600 font-medium text-xs">
            GPA: {gpa}
            </div>
            <div class="rounded-md p-2 bg-orange-100 text-orange-600 font-medium text-xs">
            Units: {units}
            </div>
        </div>
        </div>
    </div>
  )
}

export default CourseCard

