import { Component, OnInit, Input } from '@angular/core';
import RegisterService from './register.service';
import HttpError from '../config/httpErrorHandler.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [RegisterService, HttpError]
})
export class RegisterComponent implements OnInit {
  @Input() userName:string = ''
  @Input() userEmail:string = ''
  @Input() userPassword:string = ''
  @Input() passwordConfirm:string = ''
  constructor(private register: RegisterService) { }

  ngOnInit(): void {
  }
  submitData():void{
    this.register.register({
      userName: this.userName,
      userEmail: this.userEmail,
      userPassword: this.userPassword
    }).subscribe()
  }
}
