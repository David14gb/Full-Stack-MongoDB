import { Component, OnInit } from '@angular/core';
import { Document } from 'src/app/models/document';
import { ArchivedService } from 'src/app/shared/archived.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-archived',
  templateUrl: './archived.component.html',
  styleUrls: ['./archived.component.css']
})
export class ArchivedComponent implements OnInit {

  public archiveds: Document[];

  constructor(
    public archService: ArchivedService
    ) { 
   }

   public getArchived(){
    this.archService.getArchived().subscribe((data:Document[])=>{
      this.archiveds = data;
      console.log(this.archiveds);
      
      return data
    })
  }

  public deleteArchived(archivedDoc: Document){

    // Parte del front para que se borre la New
    let id = archivedDoc._id;
    let filtro = this.archiveds.filter(filtrar => filtrar._id == id);
    let borrar = this.archiveds.indexOf(filtro[0]);
    this.archiveds.splice(borrar,1);
    
    // Parte para el service, que haga las peticiones a la base de datos
    // Subscribe para que el id llegue al subscribe

    this.archService.deleteArchived(id)
    .subscribe((data)=>
    {
    console.log(data);
  })

  // Toast para mostrar al usuario que la noticia archivada ha sido Borrada Satisfactoriamente

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
    title: 'Delete Successfully'
  })
  }

  ngOnInit(): void {
    this.getArchived()
  }

}
