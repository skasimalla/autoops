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
    selector: 'app-reject',
    templateUrl: './reject.component.html',
    styleUrls: ['./reject.component.css']
})
export class RejectComponent implements OnInit, OnDestroy {

    trxIdCtrl = new FormControl();
    trxIdCtrlName = 'trxIdCtrlName';

    reasonCtrl = new FormControl();
    reasonCtrlName = 'reasonCtrlName';

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
        this.form.addControl(this.trxIdCtrlName, this.trxIdCtrl);
        this.form.addControl(this.reasonCtrlName, this.reasonCtrl);
    }

    ngOnDestroy() {
        this.form.removeControl(this.trxIdCtrlName);
        this.form.removeControl(this.reasonCtrlName);
    }

    submit() {
        const trxid = this.trxIdCtrl.value;
        const reason = this.reasonCtrl.value;

       this.showSubmitButton = false;
    }
}
