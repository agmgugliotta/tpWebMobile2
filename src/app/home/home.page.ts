import { Component } from '@angular/core';
import {LoginService} from '../services/login.service';
import User from '../services/models/User';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  title: string;
  private user: User;

  constructor(private loginService: LoginService) {}

  updateTitle() {
    this.title = 'Mon Nouveau Titre';
    console.log(this.user);
  }

  maNouvelleMetgodeQuiNeSeraPasTestee() {
    this.title = 'Mon Nouveau Titre';
  }
}
