import { Component, OnInit } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  name = 'Angular';
  dataLength: boolean;
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

  ngOnInit() {
  }
  openwebpage() {
    this.inAppBrowser.create(`http://www.bvmt.com.tn/en-gb/market-place`, `_blank`, this.options);
  }
  isReadMore(data: string) {
    this.dataLength = !(data.length > 250);
  }
  }


