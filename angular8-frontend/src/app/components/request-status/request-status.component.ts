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
    Router
} from '@angular/router';

import {
    AuthenticationService,
    StoreService
} from '../../services';

@Component({
    selector: 'app-request-status',
    templateUrl: './request-status.component.html',
    styleUrls: ['./request-status.component.css']
})
export class RequestStatusComponent implements OnInit, OnDestroy {

    form: FormGroup;

    showError = false;
    showSubmitButton = true;

    transactionId = '9999999';

    constructor(
        private _fb: FormBuilder,
        private _router: Router,
        private _storeService: StoreService,
        private _authenticationService: AuthenticationService) {

    }

    ngOnInit() {
        this.form = this._fb.group({});

    }

    ngOnDestroy() {

    }


}
