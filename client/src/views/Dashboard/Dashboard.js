import React from "react";

// react plugin for creating charts

import {Line} from 'react-chartjs-2';
import Pie1 from '../Pie1/Pie1.js';
import Pie2 from '../Pie2/Pie2.js';
import Pie3 from '../Pie3/Pie3.js';
import '../../assets/css/dashboard.css';
import {Chart} from 'primereact/chart';
import StarIcon from '@material-ui/icons/Star';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import StarHalfOutlinedIcon from '@material-ui/icons/StarHalfOutlined';
// @material-ui/core
import PersonIcon from '@material-ui/icons/Person';
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import MoreVertIcon from '@material-ui/icons/MoreVert';
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import {Bar} from 'react-chartjs-2';
import LineChartComponent from './LineChartComponent';
import Review from './Review';
import Rating from './Rating';


import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";



const useStyles = makeStyles(styles);

const state = {
  labels: ['January', 'February', 'March',
           'April', 'May', 'June', 'July','August', 'September', 'October', 'November', 'December'],
  datasets: [
    {
      label: '% Stock Sold',
      backgroundColor: 'rgb(163, 107, 255)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 3,
      data: [73, 64, 76, 59, 48, 51, 49, 78, 54, 78, 88, 92]
    }
  ]
}

const star = makeStyles({
  root: {
    border: 0,
    borderRadius: 3,
    color: 'white'
  },
});
const size = {

  largeIcon: {
    width: 60,
    height: 60,
  },

};

export default function Dashboard() {
  const classes = useStyles();
  const dots = star(); 
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
        {
            label: 'Total Customer Rating',
            backgroundColor: '#42A5F5',
            data: [4.3, 4.1, 4.3, 5.0, 4.6]
        }
    ]
};

const multiAxisData = {
labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
datasets: [{
label: 'Dataset 1',
backgroundColor: [
  '#EC407A',
            '#AB47BC',
            '#42A5F5',
            '#7E57C2',
            '#66BB6A',
            '#FFCA28',
            '#26A69A'
],
yAxisID: 'y-axis-1',
data: [65, 59, 80, 81, 56, 55, 10]
}]
};

const multiAxisOptions = {
    responsive: true,
    tooltips: {
        mode: 'index',
        intersect: true
    },
    scales: {
        yAxes: [{
            type: 'linear',
            display: true,
            position: 'left',
            id: 'y-axis-1',
            ticks: {
                min: 0,
                max: 100
            }
        },
        {
            type: 'linear',
            display: true,
            position: 'right',
            id: 'y-axis-2',
            gridLines: {
                drawOnChartArea: false
            },
            ticks: {
                min: 0,
                max: 100
            }
        }]
    }
}



const stackedOptions = {
    tooltips: {
        mode: 'index',
        intersect: false
    },
    responsive: true,
    scales: {
        xAxes: [{
            stacked: true,
        }],
        yAxes: [{
            stacked: true
        }]
    }
};
  return (
    <div>
      <GridContainer>
        <GridItem xs={10} sm={12} md={4}>
          <Card>
            <CardHeader color="warning" stats icon>
              <div className="height">
              <div className="own">
                <p className={classes.cardPara}>Reviews</p>
              </div>
              <p className={classes.cardCategory}><MoreVertIcon /></p>
              <div className="title">
              <h3 className={classes.cardTitle}>
                <div className="total-reviews">
                <Review/>
                </div>
              </h3>
              </div><br /><br /><br /><br />
              <div className="review-data">
                you got <b> +22.3% </b> more reviews than last week
              </div><br/><br/>
              <div className="cicon">
              <div className="contact-icon1">
                <div className="c1"><AccountCircleSharpIcon /></div>               
                </div>"      "
                <div className="contact-icon2">
                <div className="c2"><AccountCircleSharpIcon /></div>               
                </div>"      "
                <div className="contact-icon3">
                <div className="c3"><AccountCircleSharpIcon /></div>               
                </div>"      "
                <div className="contact-icon4">
                <div className="c4"><AccountCircleSharpIcon /></div>               
                </div>
                </div>
              </div>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
              </div>
              <div className="wrapper1">
                  Positive <br/><div className="rev">764</div> 
                </div>
                <div className="centerline">

                </div>
                <div className="wrapper2">
                  Negative<br/><div  className="rev">37</div>
                </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={10} sm={12} md={4}>
          <Card>
            <CardHeader color="warning" stats icon>
            <div className="height">
            <div className="own">
                <p className={classes.cardPara}>AV. Rating</p>
              </div>
              <p className={classes.cardCategory}><MoreVertIcon /></p>
              <div className="title">
              <h3 className={classes.cardTitle}>
                <div className="av-rating">
                <Rating/>
                </div>
              </h3>
              </div>
              <Chart type="bar" data={data} />
              </div>
            </CardHeader>
            <CardFooter stats>
              <div className="rating-dot">
                <StarIcon className={dots.root} /><StarIcon className={dots.root} /><StarIcon className={dots.root} /><StarIcon className={dots.root} /><StarHalfOutlinedIcon className={dots.root} />
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={10} sm={12} md={4}>
          <Card>
            <CardHeader color="warning" stats icon>
            <div className="height">
            <div className="own">
                <p className={classes.cardPara}>Analysis</p>
              </div>
              <p className={classes.cardCategory}><MoreVertIcon /></p>
              <div className="title3">
                <Pie1 /> <div className="pie-name">Positive Reviews</div>
              </div>
              <br /><br /><br /><br />
              <div className="title3">
                <Pie2 />  <div className="pie-name">Neutral Reviews</div>
              </div>
              <br /><br /><br />
              <div className="title3">
                <Pie3 />  <div className="pie-name">Negative Reviews</div>
              </div>
              </div>
            </CardHeader>
            <CardFooter stats>
                <div className="quote">
                  <i>Satisfied <b>Client</b> is the Outstanding Business [Game Plan] !</i>
                </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
          <Card chart>
          <CardBody>
          <div style={{ position: "relative"}}>
              <h2 color="white">Converse Stock Sold</h2>
              <LineChartComponent/>
            </div>
            </CardBody>
            <CardFooter chart>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
