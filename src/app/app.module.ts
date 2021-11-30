import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { CampaignsListComponent } from './campaigns/campaigns-list/campaigns-list.component';
import { CampaignsCreateComponent } from './campaigns/campaigns-create/campaigns-create.component';
import { CampaignCardComponent } from './shared/campaign-card/campaign-card.component';
import { HeaderComponent } from './shared/header/header.component';
import { FilterPipe } from './core/pipes/filter.pipe';
import { SortPipe } from './core/pipes/sort.pipe';
import { CampaignsModalComponent } from './campaigns/campaigns-modal/campaigns-modal.component';
import { ClickStopPropagationDirective } from './core/directives/click-stop-propagation.directive';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    CampaignsComponent,
    CampaignsListComponent,
    CampaignsCreateComponent,
    CampaignCardComponent,
    HeaderComponent,
    FilterPipe,
    SortPipe,
    CampaignsModalComponent,
    ClickStopPropagationDirective,
    SidebarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
