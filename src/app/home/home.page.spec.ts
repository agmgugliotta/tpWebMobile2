import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Camera } from '@ionic-native/camera/ngx';

import { HomePage } from './home.page';
import {RouterTestingModule} from '@angular/router/testing';
import {LoginService} from '../services/login.service';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {LocalNotifications} from '@ionic-native/local-notifications/ngx';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      imports: [IonicModule.forRoot(), RouterTestingModule],
      providers: [LoginService, Camera, Geolocation, LocalNotifications]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.title).toBeUndefined();
  });

  it('change title', () => {
    component.title = 'Mon Titre';
    expect(component.title).toBe('Mon Titre');
  });

  it('update title', () => {
    component.updateTitle();
    expect(component.title).toBe('Mon Nouveau Titre');
  });

  it('fire alert', () => {
    component.alertContent = 'Test';
    expect(component.alertContent).toBe('Test');
  });

  it('take picture', () => {
    expect(component.imgData).toBeUndefined();
  });

  it('geoloc', () => {
    expect(component.data).toBeDefined();
  });
});
