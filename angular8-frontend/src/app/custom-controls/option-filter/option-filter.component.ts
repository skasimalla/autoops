import {
    Component,
    Input,
    OnInit,
    OnDestroy,
    forwardRef,
    OnChanges,
    SimpleChange,
    SimpleChanges
} from '@angular/core';
import {
    FormControl,
    ControlValueAccessor,
    NG_VALUE_ACCESSOR
} from '@angular/forms';

import { Subscription } from 'rxjs';

import { CustomValidators } from '../../validators/custom-validators';
import { IListData} from '../../models/list-data.model';

@Component({
    selector: 'app-option-filter',
    templateUrl: './option-filter.component.html',
    styleUrls: ['./option-filter.component.css'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => OptionFilterComponent),
            multi: true,
        }]
})
export class OptionFilterComponent implements ControlValueAccessor, OnInit, OnDestroy, OnChanges {


    @Input() name: string;
    @Input() key = '';
    @Input() choices: IListData[];
    @Input() formControl: FormControl;
    @Input() readOnly = false;
    @Input() required = false;

    parentForm: any;
    searchCtrl = new FormControl();
    searchCtrlName: string;
    dropDownCtrl = new FormControl();
    dropDownCtrlName: string;

    filterSubscription: Subscription;
    filteredReasons: any;
    selection = '';

    propagateChange = (_: any) => { };

    constructor() {

    }

    ngOnInit() {
        if (this.name === undefined) {
            console.error('Name must must be specified in option filter');
        }

        this.searchCtrlName = this.name + 'Search';
        this.dropDownCtrlName = this.name + 'Option';
        this.parentForm = this.formControl.parent;

        this.parentForm.addControl(this.searchCtrlName, this.searchCtrl);
        this.parentForm.addControl(this.dropDownCtrlName, this.dropDownCtrl);

        if (this.key) {
            const select = this.choices.find(x => x.key === this.key);
            this.selection = select.value;
        }

        if (this.required) {
            this.formControl.setValidators([CustomValidators.requiredDropDownValidator]);
        }

        this.filteredReasons = this.choices;

        // subscribe to changes to filter value
        this.filterSubscription = this.searchCtrl.valueChanges.subscribe(value => {
            // filter reasons based on value
            if (!value) {
                this.filteredReasons = this.choices;
                return;
            }

            const valueRegex = new RegExp(value, 'i');
            this.filteredReasons = this.choices.filter(reason => {
                return valueRegex.test(reason.value);
            });
        });
    }

    ngOnDestroy() {
        this.filterSubscription.unsubscribe();
        this.parentForm.removeControl(this.searchCtrlName);
        this.parentForm.removeControl(this.dropDownCtrlName);
    }

    onChange(selection) {
        this.selection = selection.value;
        this.formControl.setValue(selection.value);
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.choices === undefined) {
          return;
        }

        const choices = changes.choices;
        if (choices.currentValue === undefined || choices.currentValue === undefined) {
            return;
        }

        this.choices = choices.currentValue;
        this.filteredReasons = this.choices;
      }

    // From ControlValueAccessor interface ------------------------------------

    writeValue(obj: any) {
        if (obj) {
            this.key = obj;
        }
    }

    registerOnChange(fn: any) {
        this.propagateChange = fn;
    }

    registerOnTouched() {
    }
}
