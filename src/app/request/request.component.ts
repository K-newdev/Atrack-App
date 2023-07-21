import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
})
export class RequestComponent  implements OnInit {

  constructor(
    private alertController: AlertController,
  ) {}

  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Confirmation',
      message: 'Are you sure you want to submit?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Submit',
          handler: () => {
          },
        },
      ],
    });

    await alert.present();
  }
  ngOnInit() {}

}
