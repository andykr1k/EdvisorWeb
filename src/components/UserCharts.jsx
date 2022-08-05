import React from "react";
import { render } from "react-dom";
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'

function UserCharts() {
  return (
    <div className="flex space-x-2 m-2">
      <div className="hidden sm:flex items-center">
        <CircularProgress value={20} color='green.400' size='120px'>
            <CircularProgressLabel>20%</CircularProgressLabel>
        </CircularProgress>
        <CircularProgress value={50} color='orange.400' size='120px'>
          <CircularProgressLabel>50%</CircularProgressLabel>
        </CircularProgress>
        <CircularProgress value={80} color='red.400' size='120px'>
          <CircularProgressLabel>80%</CircularProgressLabel>
        </CircularProgress>
        <CircularProgress value={20} color='blue.400' size='120px'>
          <CircularProgressLabel>20%</CircularProgressLabel>
        </CircularProgress>
      </div>
      <div className='sm:hidden'>
        <CircularProgress value={20} color='green.400' size='80px'>
          <CircularProgressLabel>20%</CircularProgressLabel>
        </CircularProgress>
        <CircularProgress value={50} color='orange.400' size='80px'>
          <CircularProgressLabel>50%</CircularProgressLabel>
        </CircularProgress>
        <CircularProgress value={80} color='red.400' size='80px'>
          <CircularProgressLabel>80%</CircularProgressLabel>
        </CircularProgress>
        <CircularProgress value={20} color='blue.400' size='80px'>
          <CircularProgressLabel>20%</CircularProgressLabel>
        </CircularProgress>
      </div>
    </div>
  )
}

export default UserCharts


