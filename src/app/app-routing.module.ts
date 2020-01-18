import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MixerAppComponent } from './mixer-app/mixer-app.component';


const routes: Routes = [
  {
    path: 'mixer',
    component: MixerAppComponent
  },
  {
    path: '**',
    redirectTo: 'mixer'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
