import { Component, OnInit } from '@angular/core';
import {RxjsService} from "../rxjs.service";

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
   rxjs:any;
  constructor(private rxjsservice:RxjsService) { }

  ngOnInit(): void {
    this.rxjsservice.getrxjs().then(rxjs=>{this.rxjs=rxjs; console.log(this.rxjs)})
  }

}
