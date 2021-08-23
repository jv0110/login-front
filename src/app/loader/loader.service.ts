import { Injectable } from '@angular/core'

@Injectable({ providedIn: 'root' })
export default class Loader{
  public showLoader: boolean = false

  public activeLoader():void {
    this.showLoader = true
  }

  public hideLoader():void {
    this.showLoader = false
  }
}