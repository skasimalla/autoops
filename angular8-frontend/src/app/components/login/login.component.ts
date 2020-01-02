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
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

    userNameCtrl = new FormControl();
    userNameCtrlName = 'userName';

    passWordCtrl = new FormControl();
    passWordCtrlName = 'passWord';

    form: FormGroup;

    showError = false;

    constructor(
        private _fb: FormBuilder,
        private _router: Router,
        private _storeService: StoreService,
        private _authenticationService: AuthenticationService) {

    }

    ngOnInit() {
        this.form = this._fb.group({});
        this.form.addControl(this.userNameCtrlName, this.userNameCtrl);
        this.form.addControl(this.passWordCtrlName, this.passWordCtrl);

    }

    ngOnDestroy() {
        this.form.removeControl(this.userNameCtrlName);
        this.form.removeControl(this.passWordCtrlName);
    }

    login() {
        const userName = this.userNameCtrl.value;
        const passWord = this.passWordCtrl.value;
        //   this._router.navigate(['/landingpage']);
        this._authenticationService.authenticate(userName, passWord)
            .subscribe(result => {
                if (result) {
                    const user = new User(userName, '', '', '', '');
                    this._storeService.User = user;
                    this._router.navigate(['/landingpage']);
                } else {
                    {
                        this.showError = true;
                    }
                }
            },
                error => {
                    this.showError = true;
                });
    }
}
