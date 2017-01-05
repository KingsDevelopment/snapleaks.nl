import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

// dependencies
import { Observable } from 'rxjs/Rx';

// sdk
import { UserApi, PasswordResetApi } from '../sdk/services';

@Injectable()
/*custom validators*/
export class ValidationService {
    private data:any;

    constructor(private _user:UserApi, private _pw:PasswordResetApi){}


    email(c: FormControl) {
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

        if (c.value != "" && !EMAIL_REGEXP.test(c.value)) {
            return { incorrectMailFormat: true };
        }

        return null;
    }


    usernameUnique() {
        return (c: FormControl) => {
            let promise = new Promise((resolve, reject) => {
                this._user
                .count({
                    username: c.value
                })
                .subscribe(result => {
                    if(result.count) {
                        return resolve({ usernameUnique : true });
                    }

                    resolve(null);
                }, err => resolve({ usernameUnique : true }));
            });

            return Observable.fromPromise(promise);
        };
    }


    emailUnique() {
        return (c: FormControl) => {
            let promise = new Promise((resolve, reject) => {
                this._user
                .count({
                    email: c.value
                })
                .subscribe(result => {
                    if(result.count) {
                        return resolve({ emailUnique : true });
                    }

                    resolve(null);
                }, err => resolve({ emailUnique : true }));
            });

            return Observable.fromPromise(promise);
        };
    }

    token() {
        return (c: FormControl) => {
            let promise = new Promise((resolve, reject) => {
                if((c.value + "").length === 5)
                {
                    this._pw
                    .checkToken(c.value)
                    .subscribe(response => {
                        if(response.used) {
                            return resolve({ tokenUsed: true });
                        }
                        if(response.expired) {
                            return resolve({ tokenExpired: true });
                        }

                        return resolve(null);
                    }, err => reject({ check: false }));
                }
            });

            return Observable.fromPromise(promise);
        }
    }

    onlyLetters(c: FormControl) {
        var ONLY_NUMBERS_REGEX = /^[A-z]*$/;

        if (c.value != "" && !ONLY_NUMBERS_REGEX.test(c.value)) {
            return { "onlyLetters" : true };
        }

        return null;

    }

    onlyLettersWithSpace(c: FormControl) {
        var ONLY_NUMBERS_REGEX = /^[ a-zA-Z\u00C0-\u00ff]+$/;

        if (c.value != "" && !ONLY_NUMBERS_REGEX.test(c.value)) {
            return { "onlyLettersWithSpace" : true };
        }

        return null;
    }

    mobileNumber(c: FormControl){
        //miss beter regex (nog checken):
        ///[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
        var MOBILE_NUMBER_REGEX = /^(?=^.{10,11}$)0\d*-?\d*$/;

        if(c.value != "") {
        	return null;
        }

        if (!MOBILE_NUMBER_REGEX.test(c.value)) {
            return { "incorrectMobileNumber" : true}
        }
        return null;
    }

    numeric(c: FormControl) {
        return (isNaN(parseInt(c.value)) ? { incorrectNumberFormat: true } : null);
    }

    equal(g: FormGroup) {
        var val;
        var valid = true;

        console.log(g);

        for (let name in g.controls) {
            if (val === undefined) {
                val = g.controls[name].value
            } else {
                if (val !== g.controls[name].value) {
                    valid = false;
                    break;
                }
            }
        }

        return valid ? null : { areEqual: true };
    }

    validPassword(c: FormControl) {
        var val = c.value;
        var error = null;

        if(!/\d/.test(val)) {
            error = { noNumber: true };
        }

        if(!/[a-z]/.test(val)) {
            error = { noLowerCase: true };
        }

        if (!/[A-Z]/.test(val)) {
            error = { noUpperCase: true };
        }

        if (!/[`!%$&^*()]/.test(val)) {
            error = { noSpecialChar: true };
        }

        return error;
    }

    date(c: FormControl){

        let datePattern = /^(19|20)\d\d([- /.])(0[1-9]|1[012])\2(0[1-9]|[12][0-9]|3[01])$/;
        if (!datePattern.test(c.value)) {

            return {incorrectDate: true};
        }
    }

    birthDate(c: FormControl){
        var date_regex = /^\d{4}-\d{2}-\d{2}$/;

        return date_regex.test(c.value) ? null : { incorrectBirthDate: true };
    }

    minSize(size: number) {
        return (control: FormControl) => {
            return control.value >= size ? null : {
                biggerThan: true,
                currentSize: control.value,
                requiredSize: size
            };
        };
    }

    multipleOf(size:number) {
        return (control: FormControl) => {
            return control.value % size == 0 ? null : {
                multipleOf: true,
                currentSize: control.value,
                size: size
            };
        };
    }
}
