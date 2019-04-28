import React, {Component} from 'react';


export default class Report extends Component {
  
    function () {
      ('.min-chart#chart-sales').easyPieChart({
        barColor: "#4caf50",
        onStep: function (from, to, percent) {
          (this.el).find('.percent').text(Math.round(percent));
        }
      });
    };


  render() {

    return (
      <div className="text-center">
        <span className="min-chart" id="chart-sales" data-percent="56"><span className="percent"></span></span>
        <h5><span className="label green badge">Sales <i className="fas fa-arrow-circle-up"></i></span></h5>
      </div>
    )
  }
}