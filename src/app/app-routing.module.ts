import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { ResponseComponent } from './modules/response/response.component';
import { SignComponent } from './modules/sign/sign.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signed', component: ResponseComponent },
  { path: 'signing', component: SignComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

