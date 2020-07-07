import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  chartOptions: {};
  Highcharts = Highcharts;
  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        zoomType: 'xy'
      },
      title: {
        text: 'Profit/Loss over time'
      },
      xAxis: [{
        categories: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb'],
        crosshair: true
      }],
      yAxis: [{ // Primary yAxis
        labels: {
          format: '{value}K',
          style: {
            color: Highcharts.getOptions().colors[1]
          }
        },
        title: {
          text: 'Profit',
          style: {
            color: Highcharts.getOptions().colors[1]
          }
        }
      }, { // Secondary yAxis
        title: {
          text: 'Loss',
          style: {
            color: Highcharts.getOptions().colors[0]
          }
        },
        labels: {
          format: '{value}00',
          style: {
            color: Highcharts.getOptions().colors[0]
          }
        },
        opposite: true
      }],
      tooltip: {
        shared: true
      },
      legend: {
        layout: 'vertical',
        align: 'left',
        x: 120,
        verticalAlign: 'top',
        y: 100,
        floating: true,
        backgroundColor:
          Highcharts.defaultOptions.legend.backgroundColor || // theme
          'rgba(255,255,255,0.25)'
      },
      series: [{
        name: 'profit',
        type: 'column',
        yAxis: 1,
        data: [49.9, 71.5, 106.4, 129.2, 144.0],
        tooltip: {
          valueSuffix: '000'
        }

      }, {
        name: 'Loss',
        type: 'spline',
        data: [7.0, 6.9, 9.5, 14.5, 18.2],
        tooltip: {
          valueSuffix: '000'
        }
      }]
    };

  }

}
