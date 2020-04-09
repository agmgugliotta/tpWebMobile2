import { Component } from '@angular/core';
import {LoginService} from '../services/login.service';
import User from '../services/models/User';
import {AlertController} from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  title: string;
  private user: User;

  imgData: string;

  constructor(private alertController: AlertController, private camera: Camera) {}

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

    alert.onDidDismiss().then(() => console.log('Alerte masquée'));

    await alert.present();
  }

  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      console.log(imageData);
      this.imgData = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }
}
