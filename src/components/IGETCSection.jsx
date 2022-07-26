import * as React from 'react'
import { motion } from 'framer-motion';
import igetcData from '../data/igetc';
import {Checkbox, Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react';
function IGETCSection() {

  return (
    <div className='bg-slate-500 bg-opacity-5 rounded-lg shadow-lg mt-3 p-3'>
        <div className='flex-shrink-0 overflow-x-auto max-w-screen'>
          <div className='grid'>
          <Accordion allowToggle>
          <AccordionItem border='0px'>
            <h2>
              <AccordionButton>
                <Box flex='1' textAlign='left'>
                <h2 className='text-slate-500 text-xl font-bold md:text-3xl'>IGETC</h2>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            {igetcData.map((d) =>(
                <div className='grid mt-3'>
                    <div className='flex justify-between text-slate-500 text-sm md:text-lg'>
                    <div className='flex'>
                      <Checkbox size='lg' colorScheme='orange'>
                      </Checkbox>
                      <div className='grid ml-3'>
                          <h3>{d.name}</h3>
                          <h4 className='text-slate-400 text-xs md:text-md mt-1'>{d.description}</h4>
                      </div>
                    </div>
                      
                        <h3>{d.semUnits} Semester Units or {d.courseUnits} Quarter Units</h3>
                  </div>
                </div>
            ))}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
          
          </div>
        </div>
    </div>
  )
}

export default IGETCSection
