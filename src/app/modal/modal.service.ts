import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export default class ModalService {
  public activeModal:boolean = false;
  public modalText:string = '';

  public showModal(text:string):void {
    this.activeModal = true
    this.modalText = text
  }
  
  public hideModal():void {
    this.activeModal = false
  }
}