import { Component, OnInit } from '@angular/core';
import { Document } from 'src/app/models/document';
import { ArchivedService } from 'src/app/shared/archived.service';
import { NewsService } from 'src/app/shared/news.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  
  public newsDoc: Document[];
  public news: Document;

  constructor(
    public newsService: NewsService,
    public archService: ArchivedService
  ) { 

    
  }
  
  public getNews(){
    this.newsService.getNews().subscribe((data:Document[])=>{
      this.newsDoc = data;
      console.log(this.newsDoc);
      
    return data
  })
}

  public archivedNews(newsDocument: Document){

    // Parte del front para que se borre la New

    let id = newsDocument._id;
    let filtro = this.newsDoc.filter(filtrar => filtrar._id == id);
    let borrar = this.newsDoc.indexOf(filtro[0]);
    this.newsDoc.splice(borrar,1);
    
    // Parte para el service, que haga las peticiones a la base de datos

    // En esta petición le añado la New a Archived

    this.archService.postArchived(newsDocument).subscribe((data:Document)=>{
      
      console.log(data);
    })

    // En esta petición le paso el id para que elimine de News la New que se ha pasado a Archived

    this.newsService.deleteNews(id).subscribe((data:Number)=>{
      console.log(data);
      
    })

    // Toast para mostrar al usuario que la noticia ha sido Archivada Satisfactoriamente

    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'success',
      title: 'Archived Successfully'
    })

  }

  ngOnInit(): void {
    this.getNews()
  }

}
