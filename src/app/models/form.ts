import { FormBuilder,Validators ,FormGroup, ValidatorFn, AsyncValidatorFn } from '@angular/forms';

export interface AbstractControlOptions {
    validators?: ValidatorFn | ValidatorFn[] | null
    asyncValidators?: AsyncValidatorFn | AsyncValidatorFn[] | null
    updateOn?: 'change' | 'blur' | 'submit'
  }