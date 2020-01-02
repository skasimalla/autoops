import {
    FormControl,
    FormGroup
} from '@angular/forms';

// import * as momentImported from 'moment';
// const moment = momentImported;

export class CustomValidators {

    private static badTelephoneNumbers: string[] = [
        '123-456-7890',
        '012-345-6789',
        '111-111-1111',
        '222-222-2222',
        '333-333-3333',
        '444-444-4444',
        '555-555-5555',
        '666-666-6666',
        '777-777-7777',
        '888-888-8888',
        '999-999-9999'
    ];

    static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
        const config: any = {
            'required': () => 'Field is required',
            'invalidCreditCard': () => 'Is invalid credit card number',
            'invalidEmailAddress': () => 'Invalid email address',
            'invalidPassword': () => 'Invalid password. Password must be at least 6 characters long, and contain a number.',
            'invalidPhoneNumber': () => 'Please enter phone in valid format xxx-xxx-xxxx',
            'invalidYear': () => 'Please enter year between 1920-2017',
            'invalidDate': () => 'Please enter a valid date',
            'invalidTime': () => 'Please enter a valid time',
            'invalidZipCode': () => 'Please enter a valid zipcode',
            'invalidSSN': () => 'Please enter valid Social Security Number with out any space or dash',
            'maxlength': () => `Maxmium length ${validatorValue.requiredLength}`,
            'invalidDropDown': () => `Make a selection`,
            'invalidRadioButton': () => 'Make a selection',
            'invalidNgbdDate': () => 'Enter Date',
            'invalidNgbdTime': () => 'Enter Time',
            'invalidRadio': () => 'Make a selection'
        };

        return config[validatorName];
    }

    static markAllControlsAsTouchedAndDirty(formGroup: FormGroup): void {
        Object.keys(formGroup.controls).forEach(key => {
            formGroup.get(key).markAsTouched();
            formGroup.get(key).markAsDirty();
        });
    }

    static validateAllControls(formGroup: FormGroup): void {
        Object.keys(formGroup.controls).forEach(key => {
            formGroup.get(key).updateValueAndValidity();
        });
    }

    static creditCardValidator(control: FormControl) {
        // Visa, MasterCard, American Express, Diners Club, Discover, JCB
        // tslint:disable-next-line:max-line-length
        if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
            return null;
        } else {
            return { 'invalidCreditCard': true };
        }
    }

    static emailValidator(control: FormControl) {

        if (control.pristine || control.value === null) {
            return null;
        }

        if (control.value.match('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')) {
            return null;
        }

        return { 'invalidEmailAddress': true };
    }

    static phoneValidator(control: FormControl) {
        if (control.pristine || control.value === null) {
            return null;
        }

        if (CustomValidators.badTelephoneNumbers.findIndex(y => y === control.value) >= 0) {
            return { 'invalidPhoneNumber': true };
        }

        if (control.value.match('^[0-9]{3}-[0-9]{3}-[0-9]{4}$')) {
            return null;
        }

        return { 'invalidPhoneNumber': true };
    }

    static phoneAllValidator(control: FormControl) {
        // RFC 2822 compliant regex
        if (control.value.match(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/)) {
            return null;
        } else {
            return { 'invalidPhoneNumber': true };
        }
    }

    static zipValidator(control: FormControl) {
        // RFC 2822 compliant regex
        let postalCode = '';
        if (control.value) {
            postalCode = control.value.replace(/[_\s]/g, '');
        }

        if (postalCode.match(/(^\d{5}-$)|(^\d{5}$)|(^\d{5}-\d{4}$)/)) {
            return null;
        } else {
            return { 'invalidZipCode': true };
        }
    }

    static yearValidator(control: FormControl) {
        // Check for dates between 1920-2039
        if (control.value.match(/^(19[2-9]\d|20[0-3][0-9])$/)) {
            return null;
        } else {
            return { 'invalidYear': true };
        }
    }

  /*  static dateValidator(control: FormControl) {
        if (typeof control.value !== 'string') {
            return null;
        }

        if (moment(control.value, 'MM/DD/YYYY', true).isValid()) {
            return null;
        } else {
            return { 'invalidDate': true };
        }
    }

    static timeValidator(control: FormControl) {

        if (moment(control.value, 'hh:mm').isValid()) {
            return null;
        } else {
            return { 'invalidTime': true };
        }
    } */


    static ssnValidator(control: FormControl) {
        // RFC 2822 compliant regex
        // Contain all zeroes in any specific group (ie 000-##-####, ###-00-####, or ###-##-0000)
        // Begin with ’666′.
        // Begin with any value from ’900-999′
        // Be ’078-05-1120′ (due to the Woolworth’s Wallet Fiasco)
        // tslint:disable-next-line:max-line-length
        if (control.value.match(/^(?!\b(\d)\1+-(\d)\1+-(\d)\1+\b)(?!123-45-6789|219-09-9999|078-05-1120)(?!666|000|9\d{2})\d{3}-(?!00)\d{2}-(?!0{4})\d{4}$/)) {
            return null;
        } else {
            return { 'invalidSSN': true };
        }
    }

    static passwordValidator(control: FormControl) {
        // {6,10}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{8,10}$/)) {
            return null;
        } else {
            return { 'invalidPassword': true };
        }
    }

    /* static matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
        return (group: FormGroup): { [key: string]: any } => {
            const password = group.controls[passwordKey];
            const confirmPassword = group.controls[confirmPasswordKey];
            if (password.value !== confirmPassword.value) {
                return { mismatchedPasswords: true };
            } else {
                return null;
            }
        };
    } */

    static requiredDropDownValidator(control: FormControl) {
        if (control.value === '-1' || control.value === '' || control.value === null) {
            return { 'invalidDropDown': true };
        } else {
            return null;
        }
    }

    static requiredNgbdDatePicker(control: FormControl) {
        if (control.value === null) {
            return { 'invalidNgbdDate': true };
        } else {
            return null;
        }
    }

    static requiredNgbdTimePicker(control: FormControl) {
        if (control.value === null) {
            return { 'invalidNgbdTime': true };
        } else {
            return null;
        }
    }

    static radioButtonValidator(control: FormControl) {
        if (control.value === null) {
            return { 'invalidRadio': true };
        } else {
            return null;
        }
    }
}
