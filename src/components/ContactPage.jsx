import * as React from 'react'
import { auth, firestore, db } from '../config/firebase'
import { Button, Switch, useToast } from '@chakra-ui/react'

function ContactPage() {
    const [modalShow, setModalShow] = React.useState(false);
    const toast = useToast()

    var [Name, setName] = React.useState('')
    var [Email, setEmail] = React.useState(false)
    var [Num, setNum] = React.useState('')
    var [Message, setMessage] = React.useState('')

    const writeContactData = async(e) => {
        e.preventDefault();
        try {
          await firestore.collection('contactUs').doc(Name).set({
            name: Name, 
            email: Email,
            num: Num,
            message: Message
          })
          console.log("Document written with ID: " + Name );
        } catch (e) {
          console.error("Error adding document: " + Name, e);
        }
  
        Name = '';
        Email = '';
        Num = '';
        Message = '';
      }
  return (
    <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div class="grid place-items-center">
        <div class="p-10 bg-slate-500 bg-opacity-5 rounded-lg shadow-lg lg:p-12 col-span-2">
            <form class="space-y-4" onSubmit={writeContactData}>
            <div>
                <h1 className=' text-3xl text-gray-900 text-center'>Contact Us</h1>
            </div>
            <div>
                <label class="sr-only" for="name">Name</label>
                <input class="w-full p-3 text-sm border-gray-500 border-2  rounded-lg bg-transparent" placeholder="Name" type="text" id="name" onChange={ (e) => setName(e.target.value) }/>
            </div>

            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                <label class="sr-only" for="email">Email</label>
                <input
                    class="w-full p-3 text-sm border-gray-500 border-2  rounded-lg bg-transparent"
                    placeholder="Email address"
                    type="email"
                    id="email"
                    onChange={ (e) => setEmail(e.target.value) }
                />
                </div>

                <div>
                <label class="sr-only" for="phone">Phone</label>
                <input
                    class="w-full p-3 text-sm border-gray-500 border-2 rounded-lg bg-transparent"
                    placeholder="Phone Number"
                    type="tel"
                    id="phone"
                    onChange={ (e) => setNum(e.target.value) }
                />
                </div>
            </div>

            <div>
                <label class="sr-only" for="message">Message</label>
                <textarea
                class="w-full p-3 text-sm border-gray-500 border-2  rounded-lg bg-transparent"
                placeholder="Message"
                rows="8"
                id="message"
                onChange={ (e) => setMessage(e.target.value) }
                ></textarea>
            </div>

            <div class="mt-4">
                <button
                type="submit"
                class="inline-flex items-center justify-center w-full px-5 py-3 text-black border-gray-500 border-2  rounded-lg sm:w-auto"
                onClick={() =>
                    toast({
                        title: 'Form Received.',
                        description: "We will be contacting you soon!.",
                        status: 'success',
                        duration: 9000,
                        isClosable: true,
                    })}
                >
                <span class="font-medium"> Send Enquiry </span>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 ml-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                </button>
            </div>
            </form>
        </div>
        </div>
    </div>
  )
}

export default ContactPage