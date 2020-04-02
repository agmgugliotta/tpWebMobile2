import { Component } from '@angular/core';
import {LoginService} from '../services/login.service';
import User from '../services/models/User';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  title: string;
  private user: User;

  constructor(private alertController: AlertController) {}

  updateTitle() {
    this.title = 'Mon Nouveau Titre';
    console.log(this.user);
  }

  maNouvelleMetgodeQuiNeSeraPasTestee() {
    this.title = 'Mon Nouveau Titre';
  }

  async fireAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Sous titre',
      message: 'Ceci est une alerte.',
      buttons: ['Valider']
    });

    alert.onDidDismiss().then(() => console.log('Alerte masquée'))

    await alert.present();
  }
}
