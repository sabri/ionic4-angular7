import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-companydetail',
  templateUrl: './companydetail.page.html',
  styleUrls: ['./companydetail.page.scss'],
})
export class CompanydetailPage implements OnInit {

  @ViewChild('lineCanvas') lineCanvas: ElementRef;
  private lineChart: Chart;
    options: InAppBrowserOptions = {
        location : 'yes',
        hidden : 'no',
        clearcache : 'yes',
        clearsessioncache : 'yes',
        zoom : 'yes',
        hardwareback : 'yes',
        mediaPlaybackRequiresUserAction : 'no',
        shouldPauseOnSuspend : 'no',
        closebuttoncaption : 'Close',
        disallowoverscroll : 'no',
        toolbar : 'yes',
        enableViewportScale : 'no',
        allowInlineMediaPlayback : 'no',
        presentationstyle : 'pagesheet',
        fullscreen : 'yes',
    };
    constructor( private inAppBrowser: InAppBrowser, ) {}

    openwebpage() {
        this.inAppBrowser.create(`http://www.bvmt.com.tn/en-gb/market-place`, `_blank`, this.options);
    }


  ngOnInit() {
      Chart.defaults.global.hover.mode = 'nearest';
      Chart.defaults.global.animation = true;
      this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'],
        datasets: [
          {
            label: 'Variation de valeur par semaine',
            fill: true,
            lineTension: 0.0,
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
            data: [4.5, 4.5, 4.8, 4.1, 5.6, 5.5, 7.0],
            spanGaps: false
          }
        ]
      },
          options: {
          animation: {
              duration: 1000,
              easing: 'easeOutQuart'
          }
          }
    });
  }

}
