import * as React from 'react'
import { doc, deleteDoc, collection } from "firebase/firestore";
import { auth, firestore, db } from '../config/firebase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CourseCard(props) {

const { gpa, name, abbrev, units } = props;
const pathString = "users/" + auth.currentUser.uid + '/courses'
const coursesRef = firestore.collection(pathString);

const deleteDocument = () => {
  coursesRef.where("name", "==", name).get().then(querySnapshot => {querySnapshot.docs[0].ref.delete();});
  console.log("Document written with ID: ");
}
  return (
    <div className=' m-2 shrink-0'>
      
        <a class="relative block p-4 border border-gray-100 shadow-md rounded-xl" href="">
        
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="grey"
                stroke-width="2"
                >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
            </svg>
        <div class="mt-4 text-gray-500 sm:pr-8">

            <h5 class="mt-4 text-xl font-bold text-gray-900">{name}</h5>
            <div>
                <p class="mt-2 text-sm ">
                {abbrev}
                </p>
                {/* <ul class='text-sm list-disc marker:text-green-500'>
                    <li>UC Transferable</li>
                </ul> */}
            </div>
        </div>
        <div className='flex justify-between mt-4'>
            <button class="p-1 text-white bg-red-300 rounded-full" type="button" id='delete' onClick={() => deleteDocument()}>
                <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 12h6m-6 0H6" />
                </svg>
              </button>
              <div>
                <span class="rounded-full px-3 py-2 bg-green-100 text-green-600 font-medium text-xs ml-1">
                GPA: {gpa}
                </span>
                <span class="rounded-full px-3 py-2 bg-orange-100 text-orange-600 font-medium text-xs ml-1">
                Units: {units}
                </span>
              </div>
            </div>
        </a>
    </div>
  )
}

export default CourseCard

