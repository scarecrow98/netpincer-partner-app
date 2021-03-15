import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'action-button',
  styleUrls: ['./action-button.component.scss'],
  template: `
    <button class="action-button">
      <i *ngIf="iconClass" [class]="iconClass"></i>
      <ng-content></ng-content>
    </button>
  `
})
export class ActionButtonComponent implements OnInit {
  @Input()
  iconClass: string = null;


  constructor() { }

  ngOnInit(): void {
  }

}
