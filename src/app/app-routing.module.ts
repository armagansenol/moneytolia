import { AuthComponent } from './auth/auth.component';
import { CampaignsCreateComponent } from './campaigns/campaigns-create/campaigns-create.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { CampaignsListComponent } from './campaigns/campaigns-list/campaigns-list.component';
import { AuthGuard } from './core/guards/auth.guard';
import { LoggedInGuard } from './core/guards/logged-in.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth',
  },
  {
    path: 'auth',
    component: AuthComponent,
    canActivate: [LoggedInGuard],
    children: [
      { path: '', pathMatch: 'full', redirectTo: '/auth/login' },
      {
        path: 'login',
        component: LoginComponent,
      },
    ],
  },
  {
    path: 'campaigns',
    component: CampaignsComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', pathMatch: 'full', redirectTo: '/campaigns/list' },
      { path: 'create', component: CampaignsCreateComponent },
      { path: 'list', component: CampaignsListComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
