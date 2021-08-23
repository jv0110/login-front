import { Component, OnInit, Input } from '@angular/core';
import HttpError from '../config/httpErrorHandler.service';
import LoginService from './login.service';
import LoaderService from '../loader/loader.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService, HttpError]
})

export class LoginComponent implements OnInit {
  @Input() userEmail: string = ''
  @Input() userPassword: string = ''

  constructor(private login: LoginService, private loader: LoaderService) { }

  ngOnInit(): void {
  }
  
  showLoader():boolean {
    return this.loader.showLoader
  }
}
