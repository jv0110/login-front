import { Component, OnInit } from '@angular/core';
import ModalService from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  constructor(private modal: ModalService) { }

  ngOnInit(): void {
  }

  public modalText():string {
    return this.modal.modalText
  }
  public showModal():boolean {
    return this.modal.activeModal
  }
  public closeModal():void {
    this.modal.hideModal()
  }
}
