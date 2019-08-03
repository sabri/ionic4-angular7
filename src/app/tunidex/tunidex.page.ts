import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Chart } from 'chart.js';
import * as moment from 'moment';
@Component({
  selector: 'app-tunidex',
  templateUrl: './tunidex.page.html',
  styleUrls: ['./tunidex.page.scss'],
})
export class TunidexPage implements OnInit {

  @ViewChild('lineCanvas') lineCanvas: ElementRef;


  private lineChart: Chart;
  constructor() { }

  ngOnInit() {
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'],
        datasets: [
          {
            label: 'Tunindex en temps reel',
            fill: true,
            lineTension: 0.3,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgb(255,127,0)',
            pointBackgroundColor: '#ff7f00',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgb(134,131,131)',
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 10,
            data: [7140, 7150, 7180, 7190, 7170, 7140, 7155],
            spanGaps: false
          }
        ]
      },
      options: {
        tooltips: {
          mode: 'x'
        },
        scales: {
          xAxes: [{
            type: 'time',
            time: {
              unit: 'minute'
            }
          }]
        },
        animationDuration: 400
      }
    });
  }


}
