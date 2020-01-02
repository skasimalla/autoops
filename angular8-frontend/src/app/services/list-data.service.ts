
import {
    Observable
} from 'rxjs';

import {
    Injectable
} from '@angular/core';

import {
    HttpClient,
    HttpParams
} from '@angular/common/http';

import {
    IListData
} from '../models';

import { MiscUtilities } from '../utilities';

import { StoreService } from './store.service';

@Injectable()
export class ListDataService {

    constructor(
        private _storeService: StoreService,
        private _httpClient: HttpClient) {

    }

    getCommandList(): Observable<IListData[]> {

        const url = this._storeService.CoatUrl + 'getList';
        const params = new HttpParams().set('name', 'Action');
        const headers = MiscUtilities.createHeadersJson();

        return this._httpClient
            .get<IListData[]>(url, { headers: headers, params: params });
    }

    getFileCommandList(action: string): Observable<IListData[]> {

        const url = this._storeService.CoatUrl + 'form';
        const params = new HttpParams()
            .set('action', action) // 'SCP File from your server to destination')
           // .set('requestor', requestor)
        //    .set('team', 'Big')
        ;
        const headers = MiscUtilities.createHeadersJson();

        return this._httpClient
            .get<IListData[]>(url, { headers: headers, params: params });
    }

    getList(name: string): Observable<IListData[]> {

        const url = this._storeService.CoatUrl + 'getList';
        const params = new HttpParams().set('name', name) //'TeamNameMapping'
            ;
        const headers = MiscUtilities.createHeadersJson();

        return this._httpClient
            .get<IListData[]>(url, { headers: headers, params: params });
    }


}


