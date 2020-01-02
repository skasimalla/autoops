export interface IUser {
    userName: string;
    firstName: string;
    middleName: string;
    lastName: string;
    emailAddress: string;
}

export class User implements IUser {

    constructor(_userName: string, _firstName: string, _middleName: string, _lastName: string, _emailAddress: string) {
        this.userName = _userName;
        this.firstName = _firstName;
        this.middleName = _middleName;
        this.lastName = _lastName;
        this.emailAddress = _emailAddress;
    }

    userName: string;
    firstName: string;
    middleName: string;
    lastName: string;
    emailAddress: string;
}



