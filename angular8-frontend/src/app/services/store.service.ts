import {
    IUser,
    IListData
} from '../models';

import {
    Injectable
} from '@angular/core';

@Injectable()
export class StoreService {

    // Store master data
    private user: IUser = null;
    private actionList: IListData[] = [];
    private coatUrl: string;

    get User(): IUser {
        return this.user;
    }

    set User(user: IUser) {
        this.user = user;
    }

    get ActionListData(): IListData[] {
        return this.actionList;
    }

    set ActionListData(commands: IListData[]) {
        this.actionList = commands;
    }

    get CoatUrl(): string {
        return this.coatUrl;
    }

    set CoatUrl(user: string) {
        this.coatUrl = user;
    }
}
