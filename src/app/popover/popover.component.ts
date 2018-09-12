import { Component, OnInit, Input } from '@angular/core';
import { PopoverController } from '@ionic/angular';
@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent {
  @Input() name: string;
  constructor(private popoverCtrl: PopoverController) {}

  dismiss() {
    this.popoverCtrl.dismiss({ popoverData: 'FooBar!' });
  }
}
