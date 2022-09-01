import * as React from 'react'
import { motion } from 'framer-motion'
import { Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverArrow, PopoverCloseButton, PopoverBody} from '@chakra-ui/react'

 function NotificationCenter() {

  return (
    <div>
        <Popover isLazy>
            <PopoverTrigger>
            <motion.div
                class="block p-2.5 text-gray-600 bg-white rounded-lg hover:text-gray-700 shrink-0 shadow-sm"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }} 
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                </svg>
            </motion.div>
            </PopoverTrigger>
            <PopoverContent>
                <PopoverHeader fontWeight='semibold'>
                    Notification Center
                </PopoverHeader>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                Lorem ipsum
                </PopoverBody>
            </PopoverContent>
        </Popover>
    </div>
  )
}

export default NotificationCenter