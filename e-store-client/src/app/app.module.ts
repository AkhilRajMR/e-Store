import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './core/layout/main-layout/main-layout.component';
import { HeaderComponent } from './core/layout/header/header.component';
import { SidebarComponent } from './core/layout/sidebar/sidebar.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { SettingsComponent } from './core/layout/settings/settings.component';
import { SessionService } from './shared/services/session.service';
import { EStoreStates } from './shared/states/estore-states';
import { AuthService } from './shared/services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MemberService } from './shared/services/member.service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    SessionService,
    EStoreStates,
    AuthService,
    MemberService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
