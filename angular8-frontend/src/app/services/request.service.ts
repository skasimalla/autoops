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
    IListData, IResult
} from '../models';

import { StoreService } from './store.service';

import { MiscUtilities } from '../utilities';

@Injectable()
export class RequestService {

    private readonly coatApiUrl: string;

    constructor(
        private _storeService: StoreService,
        private _httpClient: HttpClient) {

        this.coatApiUrl = _storeService.CoatUrl;
    }

    requestAnOperation(fid: string, serverName: string, requestor: string, action: string, team: string,
        paramNames: IListData[], paramValues: string[]): Observable<any> {

        const url = this.coatApiUrl + 'RequestAnOperation';
        let params = new HttpParams();
        params = params
            .append('fid', fid)
            .append('server', serverName)
            .append('requestor', requestor)
            .append('action', action)
            .append('team', team);

        let idx = 0;
        paramNames.forEach(n => {
            params = params.append(n.value, paramValues[idx++]);
        });

        const headers = MiscUtilities.createHeadersJson();
        return this._httpClient
            .get<boolean>(url, { headers: headers, params: params });
    }

    performAnOperation(txnNumber: string, userName: string, password: string, type: string, token: string): Observable<IResult> {

        const url = this.coatApiUrl + 'PerformOperation';
        let params = new HttpParams();
        params = params
            .append('txnNumber', txnNumber)
            .append('userName', userName)
            .append('password', password)
            .append('type', type)
            .append('token', token);


        const headers = MiscUtilities.createHeadersJson();
        return this._httpClient
            .get<IResult>(url, { headers: headers, params: params });
    }

}


