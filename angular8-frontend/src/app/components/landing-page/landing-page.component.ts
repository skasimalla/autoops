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
    StoreService
} from '../../services';

import {
    Router
} from '@angular/router';

import {
    NgbModal,
    NgbModalOptions,
    NgbModalRef
} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit, OnDestroy {

    @ViewChild('modalDialog') modalDlg: ElementRef;
    modalRef: NgbModalRef = null;
    modalOption: NgbModalOptions = { backdrop: 'static', 'keyboard': false, 'size': 'lg' };

    form: FormGroup;

    constructor(
        private _modalService: NgbModal,
        private _router: Router
    ) {
    }

    routeToRequest() {
        this._router.navigate(['/requestpage']);
    }

    ngOnInit() {
    }

    ngOnDestroy() {

    }


    premiumVersionFeature() {
        this.modalRef = this._modalService.open(this.modalDlg, this.modalOption);
    }

    onOk() {
        this.modalRef.close();
    }
}
