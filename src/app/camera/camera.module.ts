import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { CameraPage } from './camera.page';
import {Camera} from '@ionic-native/camera/ngx';

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
  entryComponents: [CameraPage],
  declarations: [CameraPage],
  providers: [Camera]
})
export class CameraPageModule {}
