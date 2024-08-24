import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class CustomValidationService {
  static emailValidator(): ValidatorFn {
    const emailRegex = /^[\w\d_]+@[\w\d_]+\.\w{2,7}$/;

    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null;
      }
      const isValid = emailRegex.test(control.value as string);
      return isValid ? null : { invalidEmail: true };
    };
  }

  static passwordMatch(formGroup: AbstractControl): ValidationErrors | null {
    const password = formGroup.get('password')?.value as string;
    const repeatedPassword = formGroup.get('repeatedPassword')?.value as string;

    if (!repeatedPassword) {
      return null;
    }

    const recommendations: string[] = [];
    const errors: ValidationErrors = { passwordsDonotMatch: false };
    if (repeatedPassword !== password) {
      recommendations.push('Passwords do not match');
      errors['passwordsDonotMatch'] = true;
    }

    if (errors['passwordsDonotMatch']) {
      formGroup.get('repeatedPassword')?.setErrors(errors);
      return { passwordsDonotMatch: true, recommendations };
    }
    formGroup.get('repeatedPassword')?.setErrors(null);

    return null;
  }
}
