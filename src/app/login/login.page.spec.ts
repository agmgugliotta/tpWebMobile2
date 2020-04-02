import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login.page';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {LoginService} from '../services/login.service';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let httpTestingController: HttpTestingController;

  const mockData = [
    {
      id: 1,
      name: 'Le nom de Bret',
      username: 'Bret',
      email: 'bret@gmail.com'
}
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPage ],
      imports: [IonicModule.forRoot(), CommonModule, HttpClientTestingModule,
        FormsModule],
      providers: [LoginService]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();

    httpTestingController = TestBed.get(HttpTestingController);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Login', () => {
    expect(component.user).toBeUndefined();

    const username = 'Bret';
    component.id = username;
    component.mdp = '1234';

    component.login();

    const req = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/users?username=' + username);

    req.flush(mockData);
    httpTestingController.verify();

    expect(component.user).toBeDefined();
    expect(component.user.nom).toBe(mockData[0].name);
  });
});
