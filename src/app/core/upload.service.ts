import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor() { }

  save(){
    console.log("se guardo correctamente")
  }
}
