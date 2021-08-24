import { Component, OnInit } from '@angular/core';
import Loader from './loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  constructor(private loader: Loader) { }

  ngOnInit(): void {
  }
  public showLoader():boolean {
    return this.loader.showLoader
  }
}
