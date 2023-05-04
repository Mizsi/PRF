import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LoginModule } from './components/login/login.module';
import { AuthGuard } from './guards/auth.guard';

const routes:Routes=[
  {path:'',redirectTo:'login',pathMatch:'full'}, 
  {
    path:'login',
    
    loadChildren:()=> import('./components/login/login.module').then(m=>m.LoginModule),
  },
  {
    path:'register',
    
    loadChildren:()=> import('./components/registration/registration.module').then(m=>m.RegistrationModule),
  },
  {
    path:'home',
    canActivate:[AuthGuard],
    loadChildren:()=> import('./components/home/home.module').then(m=>m.HomeModule),
  },
  {
    path:'example',
   
    loadChildren:()=> import('./components/example/example.module').then(m=>m.ExampleModule),
  }

];
//
@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
