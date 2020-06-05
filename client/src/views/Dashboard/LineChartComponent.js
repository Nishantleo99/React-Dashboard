import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import axios from 'axios';
import { element } from 'prop-types';

export default class LineChartComponent extends Component
{
    constructor(props) {
        super(props);
        this.state={
            Data: {}
        }
    }

    componentDidMount() {
        axios.get('/api')
        .then(res => {
            const markScore = res.data;
            let score = [];
            markScore.forEach(element => {
                score.push(element.jan);
                score.push(element.feb);
                score.push(element.mar);
                score.push(element.apr);
                score.push(element.may);
                score.push(element.jun);
                score.push(element.jul);
                score.push(element.aug);
                score.push(element.sept);
                score.push(element.oct);
                score.push(element.nov);
                score.push(element.dec);
            });

            this.setState({

                Data: {
                    labels: ['January', 'February', 'March',
           'April', 'May', 'June', 'July','August', 'September', 'October', 'November', 'December'],

           datasets: [
            {
              label: '% Stock Sold',
              backgroundColor: 'rgb(163, 107, 255)',
              borderColor: 'rgba(0,0,0,1)',
              borderWidth: 3,
              data: score
            }
          ]
                }
            });
        })
    }

    render()
    {
        return (
            <div>
                <Line
                width={70}
                height={20}
                options={{
                    responsive: true
                }}
                data = {this.state.Data}/>
            </div>
        )
    }
}