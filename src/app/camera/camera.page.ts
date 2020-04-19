import { Component, OnInit } from '@angular/core';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions
  , CameraPreviewDimensions } from '@ionic-native/camera-preview/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {

  constructor(private cameraPreview: CameraPreview, private route: Router) {}

  picture: string;

  pictureOpts: CameraPreviewPictureOptions = {
    width: 400,
    height: 400,
    quality: 85
  };

  // picture options
  cameraPreviewOpts: CameraPreviewOptions = {
    x: 0,
    y: 150,
    width: 400,
    height: 400,
    camera: 'back',
    toBack: false,
    tapPhoto: true,
    previewDrag: false,
    disableExifHeaderStripping: false
  };

  ngOnInit() {
  }
  homepage() {
    this.route.navigate(['/home']);
  }

  startCamera() {
    // start camera
    this.cameraPreview.startCamera(this.cameraPreviewOpts).then(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
        });
  }

  takePicture() {
    // take a picture
    this.cameraPreview.takePicture(this.pictureOpts).then((imageData) => {
      this.picture = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log(err);
      this.picture = 'assets/img/test.jpg';
    });
  }

  switchCamera() {
  // Switch camera
  this.cameraPreview.switchCamera();
  }

  colorEffect() {
    // set color effect to negative
    this.cameraPreview.setColorEffect('negative');
  }

  stopCamera() {
  // Stop the camera preview
  this.cameraPreview.stopCamera();
  }
}
