import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const customPassword: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const value = control.value as string

    if (value.length < 6 || value.length > 10) {
        return {
            length: {
                minlen: 6,
                maxlen: 10,
                len: value.length
            }
        }
    }

    let upper = false
    for (const char of value) {
        if (char >= 'A' && char <= 'Z') {
            upper = true
            break
        }
    }

    if (!upper)
        return {
            upper: true
        }
    
    let lower = false
    for (const char of value) {
        if (char >= 'a' && char <= 'z') {
            lower = true
            break
        }
    }

    if (!lower)
        return {
            lower: true
        }

    return null
}