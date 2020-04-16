import { Component } from '@angular/core';
import {LoginService} from '../services/login.service';
import User from '../services/models/User';
import {AlertController} from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Geolocation, Geoposition, Coordinates } from '@ionic-native/geolocation/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  title: string;
  private user: User;

  imgData: string;
  // resp: Coordinates;
  data: Coordinates[] = [];

  constructor(private alertController: AlertController,
              private camera: Camera,
              private geolocation: Geolocation,
              private localNotifications: LocalNotifications ) {this.geoLoc(); this.notification(); }

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
    const options1: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options1).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      console.log(imageData);
      this.imgData = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }

  geoLoc() {
    this.geolocation.getCurrentPosition().then((resp: Geoposition) => {
      // console.log(resp.coords.latitude);
      // resp.coords.longitude;
      // this.resp = resp.coords;
    }).catch((error) => {
      console.log(error);
    });

    const watch = this.geolocation.watchPosition();
    watch.subscribe((data: Geoposition) => {
      console.log(data.coords);
      this.data.push(data.coords);
    });
  }

  // Push Notification
  notification() {
    // Schedule a single notification
    this.localNotifications.schedule({
      id: 1,
      text: 'Single ILocalNotification',
      // sound: isAndroid? 'file://sound.mp3': 'file://beep.caf',
      // data: { secret: key }
    });


// Schedule multiple notifications
    this.localNotifications.schedule([{
      id: 1,
      text: 'Multi ILocalNotification 1',
      // sound: isAndroid ? 'file://sound.mp3': 'file://beep.caf',
      // data: { secret: key }
    },{
      id: 2,
      title: 'Local ILocalNotification Example',
      text: 'Multi ILocalNotification 2',
      icon: 'http://example.com/icon.png'
    }]);


// Schedule delayed notification
    this.localNotifications.schedule({
      text: 'Delayed ILocalNotification',
      trigger: {at: new Date(new Date().getTime() + 3600)},
      led: 'FF0000',
      sound: null
    });
  }
}
