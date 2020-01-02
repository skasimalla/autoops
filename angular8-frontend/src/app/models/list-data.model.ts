
export interface IListData {
    key: string;
    value: string;
}

export class ListData implements IListData {

    constructor(_value: string, _key: string) {
        this.key = _key;
        this.value = _value;
    }

    key: string;
    value: string;
}

