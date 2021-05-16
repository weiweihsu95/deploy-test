import { Component } from '@angular/core';
import {RxjsService} from "./rxjs.service";

import {HttpClientModule} from "@angular/common/http";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs';
  constructor(private rxjsservice:RxjsService) {
    this.rxjsservice.getrxjs().then(rxjs=>{console.log(rxjs)})
  }
}

