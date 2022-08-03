import React from "react";
import { render } from "react-dom";
import { VictoryPie, VictoryChart, VictoryLabel } from "victory";

function UserCharts() {
  return (
    <div className="flex mt-3 sm:mt-0 sm:ml-2 ">
        <VictoryPie />
        <VictoryPie />
    </div>
  )
}

export default UserCharts


