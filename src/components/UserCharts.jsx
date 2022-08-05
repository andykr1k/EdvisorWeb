import React from "react";
import { render } from "react-dom";
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'

function UserCharts() {
  return (
    <div>
        <CircularProgress value={40} color='green.400' size='120px'>
          <CircularProgressLabel>40%</CircularProgressLabel>
        </CircularProgress>
    </div>
  )
}

export default UserCharts


