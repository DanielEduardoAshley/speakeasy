import React, {Component} from 'react';
import { Line, Doughnut } from 'react-chartjs-2';
import ApiContext from '../contexts/apiContext'

export default class Report extends Component {

  state = {
      labels: ["Neutral", "Angry", "Sad","Concerned", "Happy"],
      datasets: [{
      label: "My First dataset",
      backgroundColor: ['red', 'blue', 'green', 'yellow', 'orange'],
      borderColor: 'black',
      data: [10, 1, 5, 2, 20,],
      }]
  }

  componentDidMount(){
    const dataString =localStorage.getItem('reportData')
    const Data = JSON.parse(dataString)
    console.log('Data',Data)
  }
    function () {
      ('.min-chart#chart-sales').easyPieChart({
        barColor: "#4caf50",
        onStep: function (from, to, percent) {
          (this.el).find('.percent').text(Math.round(percent));
        }
      });
    };


  render() {
console.log(this.context)
    return (
      <>
        <div className="text-center">
          <h1 style={{padding: '50px'}}>Your Report:</h1>
          <Line data={this.state} />
          <Doughnut data={this.state} />
        </div>
        <div>
          <h3 style={{padding: '50px'}}>Your Report Explained:</h3>
          <p></p>
        </div>
      </>
    )
  }
}