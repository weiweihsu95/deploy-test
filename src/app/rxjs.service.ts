import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RxjsService {
  url:string ="assets/data/data.json";
  constructor(private  http:HttpClient) {

  }
getrxjs(){
  return this.http.get(this.url).toPromise()
}
}
