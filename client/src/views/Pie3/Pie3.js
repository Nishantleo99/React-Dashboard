import React from "react";
import {Chart} from 'primereact/chart';

export default function Pie3() {
  const data = {
    datasets: [
        {
            data: [700,580],
            backgroundColor: [
                "#d088fc"
            ],
            hoverBackgroundColor: [
                "#d088fc"
            ]
        }]
    };
    return (
      <div>
      <Chart width="50" height="50" type="pie" data={data} />
  </div>
    );
  }
  