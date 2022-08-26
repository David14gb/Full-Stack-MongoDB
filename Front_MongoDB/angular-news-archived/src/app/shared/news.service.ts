import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private url: string = "http://localhost:3000/document"

  constructor(private http: HttpClient) { }

  getNews(){

    return this.http.get(this.url);
  }

  // Para eliminar la New de News que ha sido pasada a Archived
  deleteNews(id:Number){

    this.url = "http://localhost:3000/document?id="

    return this.http.delete(this.url + id)
  }
}
