import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
} from '@angular/core';

import {
  RequestService,
  StoreService,
  ListDataService
} from '../../services';

import {
  IListData, IUser
} from '../../models';

import {
  FormControl,
  FormGroup,
  FormBuilder
} from '@angular/forms';

import {
  Router
} from '@angular/router';

import {
  NgbModal,
  NgbModalOptions,
  NgbModalRef
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-request-page',
  templateUrl: './request-page.component.html',
  styleUrls: ['./request-page.component.css']
})
export class RequestPageComponent implements OnInit {

  @ViewChild('modalDialog') modalDlg: ElementRef;
  modalRef: NgbModalRef = null;
  modalOption: NgbModalOptions = { backdrop: 'static', 'keyboard': false, 'size': 'lg' };

  teamNameCtrl = new FormControl();
  actionCtrl = new FormControl();
  fidCtrl = new FormControl();
  serverNameCtrl = new FormControl();

  teamNameCtrlName = 'teamNameCtrl';
  actionCtrlName = 'actionCtrl';
  fidCtrlName = 'fidCtrlCtrl';
  serverNameCtrlName = 'serverNameCtrl';

  teams = [{}];
  servers = [{}];

  part2Ctrls: FormControl[] = [];

  form: FormGroup;

  modalMsg: string;

  showError = false;
  showPart2 = false;

  user: IUser;
  fileCommandList: IListData[];
  actionList: IListData[];
  //teams: IListData[];

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _modalService: NgbModal,
    private _requestService: RequestService,
    private _storeService: StoreService,
    private _listDataService: ListDataService) {

  }

  ngOnInit() {
    this.form = this._fb.group({});
    this.form.addControl(this.teamNameCtrlName, this.teamNameCtrl);
    this.form.addControl(this.actionCtrlName, this.actionCtrl);

    this.user = this._storeService.User;
    if (this._storeService.ActionListData) {
      this.actionList = this._storeService.ActionListData;
    } else {
      this._listDataService.getCommandList()
        .subscribe(result => {

          this._storeService.ActionListData = result;
          this.actionList = this._storeService.ActionListData;
        },
          error => {
            console.log(error.msg);
          });
    }

    this._listDataService.getList('TeamNameMapping')
    .subscribe(result => {

      this.teams = result;
    },
      error => {
        console.log(error.msg);
      });


      this._listDataService.getList('Server')
    .subscribe(result => {

      this.servers = result;
    },
      error => {
        console.log(error.msg);
      });

    // this.teamNameCtrl.setValue('');
  }

  getPart2() {
    console.log('getPart2 called');
    const action = this.actionCtrl.value;
    if (!action) {
      return;
    }

    const selection = this.actionList.find(x => x.value === action);

    this._listDataService.getFileCommandList( selection.value)
      .subscribe(
        result => {
          this.fileCommandList = result;
          console.log(this.fileCommandList);
          this.part2Ctrls = [];
          this.fileCommandList.forEach(cmds => {
            const ctrl = new FormControl();
            this.part2Ctrls.push(ctrl);
            this.form.addControl(cmds.value, ctrl);
          });

          this.showPart2 = true;

        },
        error => {
          console.log(error.msg);
        }
      );
  }


  submitPart2() {
    console.log('submitPart2 called');
    const values: string[] = [];

    this.part2Ctrls.forEach(c => {
      values.push(c.value);
    });

    this._requestService.requestAnOperation(this.fidCtrl.value, this.serverNameCtrl.value,
      this.user.userName, this.actionCtrl.value, this.teamNameCtrl.value, this.fileCommandList, values)
      .subscribe(result => {
        console.log(result);
        this.modalMsg = 'Your request hase been sent, transaction number: ' + result.txnNumber;
        this.fileCommandList.forEach(c => {
          this.form.removeControl(c.value);
        });

        this.part2Ctrls = [];
        this.modalRef = this._modalService.open(this.modalDlg, this.modalOption);

      },
        error => {
          console.log(error.msg);
          this.modalMsg = 'Your request encountered an error';
          this.modalRef = this._modalService.open(this.modalDlg, this.modalOption);
        }
      );

    this.showPart2 = false;
  }

  onOk() {
    this.modalRef.close();
    this._router.navigate(['/landingpage']);
  }

  showBottomHalf() {
    if (this.actionCtrl.value) {
      return true;
    }
    return false;
  }

  clear() {
    this.teamNameCtrl.setValue('');
  }

  clearAction() {
    this.actionCtrl.setValue('');
  }
}
