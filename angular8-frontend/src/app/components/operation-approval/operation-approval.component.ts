import {
    Component,
    OnInit,
    OnDestroy,
    ViewChild,
    ElementRef
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
    StoreService,
    RequestService
} from '../../services';

import {
    NgbModal,
    NgbModalOptions,
    NgbModalRef
} from '@ng-bootstrap/ng-bootstrap';

import { MiscUtilities } from '../../utilities/misc-utilities';

@Component({
    selector: 'app-operation-approval',
    templateUrl: './operation-approval.component.html',
    styleUrls: ['./operation-approval.component.css']
})
export class OperationApprovalComponent implements OnInit, OnDestroy {

    @ViewChild('modalDialog') modalDlg: ElementRef;
    modalRef: NgbModalRef = null;
    modalOption: NgbModalOptions = { backdrop: 'static', 'keyboard': false, 'size': 'lg' };

    userNameCtrl = new FormControl();
    userNameCtrlName = 'userName';

    passwordCtrl = new FormControl();
    passwordCtrlName = 'passwordCtrlName';

    typeCtrl = new FormControl();
    typeCtrlName = 'typeCtrlName';

    tokenCtrl = new FormControl();
    tokenCtrlName = 'tokenCtrlName';

    modalMsg: string;
    headerMessage: string;
    form: FormGroup;

    showError = false;
    showSubmitButton = true;

    transactionId = '';

    constructor(
        private _fb: FormBuilder,
        private _router: Router,
        private _requestService: RequestService,
        private _modalService: NgbModal,
        private _storeService: StoreService,
        private _authenticationService: AuthenticationService) {

        this.transactionId = MiscUtilities.getParameterByName('txnNumber');
    }

    ngOnInit() {
        this.form = this._fb.group({});
        this.form.addControl(this.userNameCtrlName, this.userNameCtrl);
        this.form.addControl(this.passwordCtrlName, this.passwordCtrl);
        this.form.addControl(this.typeCtrlName, this.typeCtrl);
        this.form.addControl(this.tokenCtrlName, this.tokenCtrl);
    }

    ngOnDestroy() {
        this.form.removeControl(this.userNameCtrlName);
        this.form.removeControl(this.passwordCtrlName);
        this.form.removeControl(this.typeCtrlName);
        this.form.removeControl(this.tokenCtrlName);
    }

    submit() {
        const userName = this.userNameCtrl.value;
        const password = this.passwordCtrl.value;
        const type = this.typeCtrl.value;
        const token = this.tokenCtrl.value;

        this._requestService.performAnOperation(this.transactionId, userName, password, type, token)
            .subscribe(result => {
                console.log(result);
                this.modalMsg = '';
                this.headerMessage = 'Successful Operation';
                this.modalRef = this._modalService.open(this.modalDlg, this.modalOption);
            },
                error => {
                    console.log(error.msg);
                    this.headerMessage = 'Unsuccessful Operation';
                    this.modalMsg = 'Your request encountered an error';
                    this.modalRef = this._modalService.open(this.modalDlg, this.modalOption);
                }
            );

        this.showSubmitButton = false;
    }

    onOk() {
        this.modalRef.close();
        this._router.navigate(['/landingpage']);
    }
}
