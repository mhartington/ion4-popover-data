import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  popoverData;
  constructor(private popoverCtrl: PopoverController) {}

  async showPopover(event) {
    const popover = await this.popoverCtrl.create({
      component: PopoverComponent,
      event: event,
      componentProps: { name: 'world' }
    });
    popover.onDidDismiss().then(popoverEvent => {
      this.popoverData = popoverEvent.data.popoverData;
    });
    await popover.present();
  }
}
