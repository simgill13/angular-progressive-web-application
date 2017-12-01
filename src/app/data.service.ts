import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  getList(callback){
    //change to a real web service
    const list = [
      new Coffee("double Espresso","Sunny Cafe", new PlaceLocation("123 Market st", "San Francisco")),
      new Coffee("carmel","Amercano", new PlaceLocation("123 stone st", "San Jose")),
    ]

    callback(list)
  }



  save(coffe, callback){
    //change to a real web service
    callback(true)
  }
}
