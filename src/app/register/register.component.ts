import { Component, OnInit, Input } from '@angular/core';
import RegisterService from './register.service';
import RegisterHttpError from './registerHttpError.service';
import LoaderService from '../loader/loader.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [RegisterService, RegisterHttpError]
})
export class RegisterComponent implements OnInit {
  @Input() userName:string = ''
  @Input() userEmail:string = ''
  @Input() userPassword:string = ''
  @Input() passwordConfirm:string = ''
  constructor(private register: RegisterService, private loader: LoaderService) { }

  ngOnInit(): void {
  }
  public showLoader():boolean {
    return this.loader.showLoader
  }
  public showLoaderClick():void{
    this.loader.activeLoader()
  }
  submitData():void{
    this.register.register({
      userName: this.userName,
      userEmail: this.userEmail,
      userPassword: this.userPassword
    }).subscribe()
  }
}
