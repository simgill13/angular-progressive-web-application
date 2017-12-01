import { Injectable } from '@angular/core';

@Injectable()
export class GeolocationService {

  constructor() { }


  requestLocation(callback){
    //use the W3C geolocation api
    navigator.geolocation.getCurrentPosition(position => {
        callback(position.coords)
      },
      error => {
        callback(null)
      }
    )
  }


  getMapLink(location : PlaceLocation){
    let query = "";
    if(location.latitude){
      query = location.latitude + "," + location.longtude
    }else{
      query = `${location.address},${location.city}`
    }
    if(/iPad|iPhone|iPod/.test(navigator.userAgent)){
      return `https://maps.apple.com/?q=${query}`
    }else{
      return `https://maps.google.com/?q=${query}`
    }

  }
}
