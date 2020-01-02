import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { HttpHeaders } from '@angular/common/http';

export class MiscUtilities {

    static getParameterByName(name: string, url?: string) {
        if (!url) {
            url = window.location.href;
        }

        name = name.replace(/[\[\]]/g, '\\$&');
        const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'), results = regex.exec(url);

        if (!results) {
            return null;
        }

        if (!results[2]) {
            return '';
        }

        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    static createHeadersJson(overrides = {}): HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            ...overrides
        });
    }

    static createHeadersText(overrides = {}): HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'text/html',
            ...overrides
        });
    }
    static formatPhone(value: string) {
        if (!value || value.length !== 10) {
            return value;
        }

        return value.substring(0, 3) + '-' + value.substring(3, 6) + '-' + value.substring(6, 10);
    }

    static padNumber(value: number): string {
        if (MiscUtilities.isNumber(value)) {
            return `0${value}`.slice(-2);
        } else {
            return '';
        }
    }

    static isNumber(value: any): boolean {
        return !isNaN(MiscUtilities.toInteger(value));
    }

    static toInteger(value: any): number {
        return parseInt(`${value}`, 10);
    }

    static isString(value: any): value is string {
        return typeof value === 'string';
    }

    static getDateFromNgbDate(value: NgbDateStruct): string {
        if (value === null || value === undefined || value.month === 0) {
            return '';
        }

        const result =
            this.padNumber(value.month) + '/' +
            this.padNumber(value.day) + '/' +
            value.year;

        return result;
    }

}
