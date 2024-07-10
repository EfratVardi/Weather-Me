import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
    selector: '[appEnglishOnly]'
})
export class EnglishOnlyDirective {

    private regex: RegExp = new RegExp(/^[a-zA-Z\s]*$/);

    constructor(private ngControl: NgControl) { }

    @HostListener('keydown', ['$event'])
    onKeyDown(event: KeyboardEvent) {
        if (!this.isAllowedKey(event)) {
            event.preventDefault();
            this.ngControl.control?.setErrors({ nonEnglish: true });
            this.ngControl.control?.markAsTouched();
        } else {
            this.ngControl.control?.setErrors(null);
        }
    }

    private isAllowedKey(event: KeyboardEvent): boolean {
        const key = event.key;
        return key === 'Backspace' || this.regex.test(key);
    }
}
