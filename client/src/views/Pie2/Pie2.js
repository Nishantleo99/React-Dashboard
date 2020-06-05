import React from "react";
import {Chart} from 'primereact/chart';

export default function Pie2() {

  const data = {
    datasets: [
        {
            data: [320,960],
            backgroundColor: [
                "#faf56b"
            ],
            hoverBackgroundColor: [
                "#faf56b"
            ]
        }]
    };
    return (
      <div>
      <Chart width="50" height="50" type="pie" data={data} />
  </div>
    );
  }
  