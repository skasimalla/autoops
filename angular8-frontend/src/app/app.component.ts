import {
  Component,
  OnInit
} from '@angular/core';

import {
  Router
} from '@angular/router';

import {
  ListDataService,
  StoreService
} from './services';
import config from '../config.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AutoOps';

  constructor(
    private _router: Router,
    private _storeService: StoreService,
    private _listDataService: ListDataService) {

  }

  ngOnInit() {

    // const coatApiUrl = (<any>config).coatApiUrl;
     let coatApiUrl = window.location.origin + '/';
    if (coatApiUrl.includes('4200') ) {
      console.log('The URL contains 4200, so reading config.json') ;
      coatApiUrl = (<any>config).coatApiUrl;
    }

    this._storeService.CoatUrl = coatApiUrl;

    console.log('App on init: ', coatApiUrl);
    this._listDataService.getCommandList()
      .subscribe(result => {
        this._storeService.ActionListData = result;
          this._router.navigate(['/login']);
      },
        error => {
          console.log(error.msg);
        });
  }
}
