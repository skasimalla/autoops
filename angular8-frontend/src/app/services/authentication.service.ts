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

import { MiscUtilities } from '../utilities';

import { StoreService } from './store.service';

@Injectable()
export class AuthenticationService {

    private readonly coatApiUrl: string;

    constructor(
        private _storeService: StoreService,
        private _httpClient: HttpClient) {

        this.coatApiUrl = _storeService.CoatUrl;
    }

    authenticate(userId: string, password: string): Observable<boolean> {

        const url = this.coatApiUrl + 'authenticate';
        const params = new HttpParams().set('password', password).set('userid', userId);
        const headers = MiscUtilities.createHeadersJson();
        return this._httpClient
            .get<boolean>(url, { headers: headers, params: params });
    }

    register(userName: string, email: string): Observable<boolean> {

        const url = this.coatApiUrl + 'register';
        const params = new HttpParams().set('name', userName).set('email', email);
        const headers = MiscUtilities.createHeadersJson();
        return this._httpClient
            .get<boolean>(url, { headers: headers, params: params });
    }

}


