import { Component, ViewEncapsulation, Input, AfterViewInit, ElementRef } from '@angular/core';

@Component({
    selector: 'read-more',
    template: `
        <div [class.collapsed]="isCollapsed" [ngClass]="{'isCollapsed': !isCollapsed}" class="pull-left pt-2 readMore">
            <ng-content></ng-content>
        </div>
        <a (click)="isCollapsed = !isCollapsed" [hidden]="dataLength" class="pt-2 pull-right">
          <ion-icon name="arrow-round-forward"  *ngIf="isCollapsed"></ion-icon>
          <ion-icon icon="arrow-round-back"  *ngIf="!isCollapsed"></ion-icon>
        </a>
        <div class='cb'></div>
    `,
    styleUrls: ['./read-more.scss'],
    encapsulation: ViewEncapsulation.None
})

export class ReadMoreComponent {
    @Input() dataLength: boolean;
    public isCollapsed = true;
    constructor() {}
}
