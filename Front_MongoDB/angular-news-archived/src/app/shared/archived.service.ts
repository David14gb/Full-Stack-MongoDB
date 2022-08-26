import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Document } from '../models/document';

@Injectable({
  providedIn: 'root'
})
export class ArchivedService {

  private url: string = "http://localhost:3000/archived"

  constructor(private http: HttpClient) { }

  // Mostrar las archivadas
  getArchived(){

    return this.http.get(this.url);
  }
  
  // Borrar las archivadas
  deleteArchived(id:Number){

    this.url = "http://localhost:3000/archived?id="
    return this.http.delete(this.url + id)
  }

  // Añadir el documento de News a Archived
  postArchived(newArchived:Document){
      console.log(newArchived);
      
      return this.http.post(this.url, newArchived)
    }
}

