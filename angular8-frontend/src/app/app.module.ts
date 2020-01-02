import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import {
  DashboardComponent,
  HeaderComponent,
  LoginComponent,
  LandingPageComponent,
  OperationApprovalComponent,
  RegisterComponent,
  RegisterStatusComponent,
  RejectComponent,
  RequestPageComponent,
  RequestStatusComponent
} from './components';

import {
  OptionFilterComponent
} from './custom-controls/option-filter/option-filter.component';

import {
  AuthenticationService,
  ListDataService,
  RequestService,
  StoreService
} from './services';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faClock,
  faUser
 } from '@fortawesome/free-regular-svg-icons';

import {
  faChartLine,
  faCheck,
  faBullseye,
  faSearch,
  faPlus
} from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    HeaderComponent,
    LandingPageComponent,
    OperationApprovalComponent,
    RequestPageComponent,
    RequestStatusComponent,
    RegisterComponent,
    RegisterStatusComponent,
    RejectComponent,
    OptionFilterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule.forRoot(),
  ],
  providers: [
    StoreService,
    ListDataService,
    RequestService,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor() {
    // Add an icon to the library for convenient access in other components
    library.add(
      faClock,
      faUser,
      faPlus,
      faChartLine,
      faCheck,
      faBullseye,
      faSearch);
  }
}
