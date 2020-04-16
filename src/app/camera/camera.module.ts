import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CameraPageRoutingModule } from './camera-routing.module';

import { CameraPage } from './camera.page';

import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions
  , CameraPreviewDimensions } from '@ionic-native/camera-preview/ngx';
import {LoginService} from '../services/login.service';
import {Camera} from '@ionic-native/camera/ngx';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {LocalNotifications} from '@ionic-native/local-notifications/ngx';
import {RouterModule} from '@angular/router';
import {HomePage} from '../home/home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: Camera
      }
    ])
  ],
  declarations: [CameraPage],
  providers: [ LocalNotifications]
})
export class CameraPageModule {}
