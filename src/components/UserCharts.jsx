import React from "react";
import { render } from "react-dom";
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'

function UserCharts() {
  return (
    <div className="flex m-2">
      <div className="hidden sm:flex items-center space-x-2 sm:space-x-6">
        <div className="grid place-items-center bg-slate-500 bg-opacity-5 rounded-lg shadow-lg p-2">
          <CircularProgress value={20} color='green.400' size='120px'>
              <CircularProgressLabel>20%</CircularProgressLabel>
          </CircularProgress>
          <h1>GPA</h1>
        </div>
        <div className="grid place-items-center bg-slate-500 bg-opacity-5 rounded-lg shadow-lg p-2">
          <CircularProgress value={50} color='orange.400' size='120px'>
            <CircularProgressLabel>50%</CircularProgressLabel>
          </CircularProgress>
          <h1>Applications</h1>
        </div>
        <div className="grid place-items-center bg-slate-500 bg-opacity-5 rounded-lg shadow-lg p-2">
          <CircularProgress value={80} color='red.400' size='120px'>
            <CircularProgressLabel>80%</CircularProgressLabel>
          </CircularProgress>
          <h1>Courses</h1>
        </div>
        <div className="grid place-items-center bg-slate-500 bg-opacity-5 rounded-lg shadow-lg p-2">
          <CircularProgress value={50} color='blue.400' size='120px'>
            <CircularProgressLabel>50%</CircularProgressLabel>
          </CircularProgress>
          <h1>Overall</h1>
        </div>
      </div>
      <div className='flex sm:hidden space-x-2'>
        <div className="grid place-items-center bg-slate-500 bg-opacity-5 rounded-lg shadow-lg p-2">
          <CircularProgress value={20} color='green.400' size='60px'>
              <CircularProgressLabel>20%</CircularProgressLabel>
          </CircularProgress>
          <h1>GPA</h1>
        </div>
        <div className="grid place-items-center bg-slate-500 bg-opacity-5 rounded-lg shadow-lg p-2">
          <CircularProgress value={50} color='orange.400' size='60px'>
            <CircularProgressLabel>50%</CircularProgressLabel>
          </CircularProgress>
          <h1>Applications</h1>
        </div>
        <div className="grid place-items-center bg-slate-500 bg-opacity-5 rounded-lg shadow-lg p-2">
          <CircularProgress value={80} color='red.400' size='60px'>
            <CircularProgressLabel>80%</CircularProgressLabel>
          </CircularProgress>
          <h1>Courses</h1>
        </div>
        <div className="grid place-items-center bg-slate-500 bg-opacity-5 rounded-lg shadow-lg p-2">
          <CircularProgress value={50} color='blue.400' size='60px'>
            <CircularProgressLabel>50%</CircularProgressLabel>
          </CircularProgress>
          <h1>Overall</h1>
        </div>
      </div>
    </div>
  )
}

export default UserCharts


