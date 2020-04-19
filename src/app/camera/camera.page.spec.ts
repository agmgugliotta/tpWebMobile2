import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CameraPage } from './camera.page';
import {RouterTestingModule} from '@angular/router/testing';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions
  , CameraPreviewDimensions } from '@ionic-native/camera-preview/ngx';

describe('CameraPage', () => {
  let component: CameraPage;
  let fixture: ComponentFixture<CameraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CameraPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule],
      providers: [CameraPreview]
    }).compileComponents();

    fixture = TestBed.createComponent(CameraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.picture).toBeUndefined();
  });

  it('Take picture', () => {
    component.picture = null;
    expect(component.picture).toBeNull();
    component.startCamera();
    component.takePicture();
    component.switchCamera();
    component.colorEffect();
    component.stopCamera();
    expect(component.picture).toBeDefined();
  });
});
