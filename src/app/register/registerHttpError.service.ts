import { Injectable } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs";
import ModalService from "../modal/modal.service";
import Loader from "../loader/loader.service";

@Injectable()
export default class RegisterHttpError {
  constructor(private modal: ModalService, private loader: Loader){}
  
  public handleError(error: HttpErrorResponse) {
    console.log(error)
    if(error.status === 400) {
      this.loader.hideLoader()
      switch(true){
        case error.error.type.toLowerCase() == 'username':
          this.modal.showModal('Name is required')
          break;
        case error.error.type.toLowerCase() == 'useremail':
          this.modal.showModal('Email is required')
          break;
          case error.error.type.toLowerCase() == 'userpassword':
            this.modal.showModal('Password is required')
            break;
      }

    }
    else
      console.log(`Code error returned: ${error.status}`)
    return throwError('Something bad happend');
  }
}
