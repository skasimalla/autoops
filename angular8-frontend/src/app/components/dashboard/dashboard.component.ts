import {
    Component,
    OnInit,
    OnDestroy
} from '@angular/core';

import {
    FormControl,
    FormGroup,
    FormBuilder
} from '@angular/forms';


import {
    StoreService
} from '../../services';

import {
    Router
} from '@angular/router';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

    form: FormGroup;


    ngOnInit() {


    }

    ngOnDestroy() {

    }


}
