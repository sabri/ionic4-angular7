import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'aide', loadChildren: './aide/aide.module#AidePageModule' },
  { path: 'tunidex', loadChildren: './tunidex/tunidex.module#TunidexPageModule' },
  { path: 'news', loadChildren: './news/news.module#NewsPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'companydetail', loadChildren: './companydetail/companydetail.module#CompanydetailPageModule' },
  { path: 'payement', loadChildren: './payement/payement.module#PayementPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
