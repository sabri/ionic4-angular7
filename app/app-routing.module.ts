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
  { path: 'inscription', loadChildren: './inscription/inscription.module#TunidexPageModule' },
  { path: 'news', loadChildren: './news/news.module#NewsPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'companydetail', loadChildren: './companydetail/companydetail.module#CompanydetailPageModule' },
  { path: 'payement', loadChildren: './payement/payement.module#PayementPageModule' },
  { path: 'profil', loadChildren: './profil/profil.module#ProfilPageModule' },
  { path: 'otp-auth', loadChildren: './otp-auth/otp-auth.module#OtpAuthPageModule' },
  { path: 'portfolio', loadChildren: './portfolio/portfolio.module#PortfolioPageModule' },
  { path: 'prediction', loadChildren: './prediction/prediction.module#PredictionPageModule' },
  { path: 'detailtitle', loadChildren: './detailtitle/detailtitle.module#DetailtitlePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
