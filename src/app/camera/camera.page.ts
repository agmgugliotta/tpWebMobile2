import { Component, OnInit } from '@angular/core';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions
  , CameraPreviewDimensions } from '@ionic-native/camera-preview/ngx';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {

  picture: string;

  constructor(private cameraPreview: CameraPreview) {/*this.preview();*/ }

  ngOnInit() {
  }

  // Camera Preview
  /*preview() {
    // camera options (Size and location).
    // In the following example, the preview uses the rear camera and display the preview in the back of the webview
    const cameraPreviewOpts: CameraPreviewOptions = {
      x: 0,
      y: 0,
      width: window.screen.width,
      height: window.screen.height,
      camera: 'rear',
      tapPhoto: true,
      previewDrag: true,
      toBack: true,
      alpha: 1
    };

    // start camera
    this.cameraPreview.startCamera(cameraPreviewOpts).then(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
        });

    // Set the handler to run every time we take a picture
    this.cameraPreview.setOnPictureTakenHandler().subscribe((result) => {
      console.log(result);
      // do something with the result
    });

    // picture options
    const pictureOpts: CameraPreviewPictureOptions = {
      width: 1280,
      height: 1280,
      quality: 85
    };

    // take a picture
    this.cameraPreview.takePicture(this.pictureOpts).then((imageData) => {
      this.picture = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log(err);
      this.picture = 'assets/img/test.jpg';
    });

    // take a snap shot
    this.cameraPreview.takeSnapshot(this.pictureOpts).then((imageData) => {
      this.picture = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log(err);
      this.picture = 'assets/img/test.jpg';
    });


    // Switch camera
    this.cameraPreview.switchCamera();

    // set color effect to negative
    this.cameraPreview.setColorEffect('negative');

    // Stop the camera preview
    this.cameraPreview.stopCamera();
  }*/
}
