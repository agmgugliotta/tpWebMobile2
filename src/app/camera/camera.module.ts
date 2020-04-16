import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { CameraPage } from './camera.page';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions
  , CameraPreviewDimensions } from '@ionic-native/camera-preview/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: CameraPage
      }
    ])
  ],
  declarations: [CameraPage],
  providers: [CameraPreview]
})
export class CameraPageModule {}
