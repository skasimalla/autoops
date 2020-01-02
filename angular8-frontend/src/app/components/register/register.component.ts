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

import {
    User
} from '../../models';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {

    userNameCtrl = new FormControl();
    userNameCtrlName = 'userName';

    emailCtrl = new FormControl();
    emailCtrlName = 'emailCtrlName';

    form: FormGroup;

    showError = false;
    showSubmitButton = true;

    constructor(
        private _fb: FormBuilder,
        private _router: Router,
        private _storeService: StoreService,
        private _authenticationService: AuthenticationService) {

    }

    ngOnInit() {
        this.form = this._fb.group({});
        this.form.addControl(this.userNameCtrlName, this.userNameCtrl);
        this.form.addControl(this.emailCtrlName, this.emailCtrl);

    }

    ngOnDestroy() {
        this.form.removeControl(this.userNameCtrlName);
        this.form.removeControl(this.emailCtrlName);
    }

    register() {
        const userName = this.userNameCtrl.value;
        const email = this.emailCtrl.value;

        this._authenticationService.register(userName, email)
            .subscribe(result => {
                if (result) {

                    this.showSubmitButton = false;
                } else {
                    {
                        this.showError = true;
                    }
                }
            },
                error => {
                    this.showError = true;
                    this.showSubmitButton = false;
                });
    }
}
