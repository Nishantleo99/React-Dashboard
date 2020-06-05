import React from "react";
import {Chart} from 'primereact/chart';

export default function Pie1() {

  const data = {
    datasets: [
        {
            data: [960,320],
            backgroundColor: [
                "#99e2f2"
            ],
            hoverBackgroundColor: [
                "#99e2f2"
            ]
        }]
    };
    return (
      <div>
      <Chart width="50" height="50" type="pie" data={data} />
  </div>
    );
  }
  