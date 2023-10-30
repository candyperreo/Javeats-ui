import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MenuComponent } from './menu/menu.component';
import { MatIconModule} from '@angular/material/icon';
import { MatToolbarModule} from '@angular/material/toolbar';
import { RouterModule, Routes } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AuthInterceptorProviders } from './service/auth.interceptor.cfg';





const appRoutes: Routes = [
  {path:'', component:HomeComponent},
  {path:'enterprise', component:EnterpriseComponent},
  // {path:'ofertas', component:OfertasComponentComponent},
  // {path:'admin', component:AdminComponentComponent},
  // {path:'detail/:id', component:DetailComponentComponent},
  // {path:'signUp', component: SignUpComponent},
  // {path:'login', component: LoginComponent},
  // {path:'admin-dashboard', component: AdminComponent, canActivate: [AdminGuard]},
  // {path:'**', component:ErrorPageConponentComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NavComponent,
    HomeComponent,
    EnterpriseComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes), 
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatListModule,
    MatSidenavModule,
    MatMenuModule,
    FlexLayoutModule

  ],
  providers: [AuthInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
