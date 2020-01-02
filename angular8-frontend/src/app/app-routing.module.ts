import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


import {
    LoginComponent,
    DashboardComponent,
    LandingPageComponent,
    OperationApprovalComponent,
    RegisterComponent,
    RegisterStatusComponent,
    RejectComponent,
    RequestPageComponent,
    RequestStatusComponent

} from './components';

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'approve', component: OperationApprovalComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'landingpage', component: LandingPageComponent },

    { path: 'requestpage', component: RequestPageComponent },
    { path: 'requestStatus', component: RequestStatusComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'registerStatus', component: RegisterStatusComponent },
    { path: 'reject', component: RejectComponent },
    { path: '**', redirectTo: 'login' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})

export class AppRoutingModule { }
