import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import User from './models/User';

describe('LoginService', () => {

  let httpTestingController: HttpTestingController;
  const mockData = [
    {
      id: '1',
      name: 'Le nom de Bret',
      username: 'Bret',
      email: 'bret@gmail.com'
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const service: LoginService = TestBed.get(LoginService);
    expect(service).toBeTruthy();
  });

  it('login', () => {
    const service: LoginService = TestBed.get(LoginService);
    const idTest = 'Bret';
    let userReturned: User;

    service.login(idTest, '1234')
        .subscribe(user => {
          userReturned = user;
        });

    const req = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/users?username=' + idTest);

    req.flush(mockData);
    httpTestingController.verify();

    expect(userReturned.nom).toBe(mockData[0].name);
    expect(userReturned.id).toBe(mockData[0].id);
    expect(userReturned.email).toBe(mockData[0].email);
  });
});
