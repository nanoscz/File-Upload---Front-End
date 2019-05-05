import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotoComponent } from './components/photo/photo.component';
import { LoadComponent } from './components/load/load.component';

const routes: Routes = [
  {path: 'photo', component: PhotoComponent},
  {path: 'load', component: LoadComponent },
  {path: '**', pathMatch: 'full', redirectTo: 'photo'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


