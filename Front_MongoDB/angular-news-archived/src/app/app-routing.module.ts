import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchivedComponent } from './pages/archived/archived.component';
import { NewsComponent } from './pages/news/news.component';

const routes: Routes = [
  {path:"", component: NewsComponent},
  {path:"document", component: NewsComponent},
  {path:"archived", component: ArchivedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
