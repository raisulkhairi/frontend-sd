import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'headmaster',
    loadChildren:()=>import('./headmaster/headmaster.module').then(mod=>mod.HeadmasterModule)
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'headmaster'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// awawawawawaw
//asdasdasdasdasdasdas