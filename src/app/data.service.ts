
import { Injectable }         from '@angular/core';
import { Coffee }             from "./logic/Coffee";
import { PlaceLocation }      from "./logic/PlaceLocation";
import {Http}                 from "@angular/http";


@Injectable()
export class DataService {

  constructor(private http: Http) { }

  public endpoint = "http://localhost:3000";

  getList(callback) {    
    // const list = [
    //   new Coffee("Double Espresso", "Sunny Cafe", new PlaceLocation("123 Market St", "San Francisco")),
    //   new Coffee("Caramel Americano", "Starcoffee", new PlaceLocation("Gran Via 34", "Madrid"))
    // ]; 
    // callback(list);
    this.http.get(`${this.endpoint}/coffees`)
      .subscribe(response => {
        console.log(response.json());
        callback(response.json());
      });
  }

  save(coffee, callback) {
    if (coffee._id) {
      // It's an update
      this.http.put(`${this.endpoint}/coffees/${coffee._id}`, coffee)
        .subscribe(response => {
          callback(true);
        });
    } else {
      // It's an insert
      this.http.post(`${this.endpoint}/coffees`, coffee)
        .subscribe(response => {
          callback(true);
        });
    }
  }

}