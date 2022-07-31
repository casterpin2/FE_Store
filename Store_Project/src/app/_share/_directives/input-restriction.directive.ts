import { Directive, ElementRef, HostListener, Input, Injectable } from '@angular/core';

@Directive({
    selector: '[appInputRestriction]'
})
@Injectable()
export class InputRestrictionDirective {

    isSelect = false;
    // Allow key codes for special events. Reflect :
    // Backspace, tab, end, home
    private specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight', 'Del', 'Delete'];
    constructor(public el: ElementRef) {
    }

    @HostListener('select', ['$event']) onSelect(event: any) {

        this.isSelect = true;
    }
    @HostListener('blur', ['$event']) onBlur(event: any) {

        this.isSelect = false;
    }

    integerOnly(event: any) {

        const e = <KeyboardEvent>event;
        if (e.key.toLowerCase() === 'tab') {
            return;
        }
        if ([46, 8, 9, 27, 13, 110].indexOf(e.keyCode) !== -1 ||
            (event.key.toLowerCase() === "c" && e.ctrlKey === true) ||
            (event.key.toLowerCase() === "v" && e.ctrlKey === true) ||
            (event.key.toLowerCase() === "x" && e.ctrlKey === true)) {
            return;
        }
        if (['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].indexOf(e.key) === -1) {
            e.preventDefault();
        }
    }

    @HostListener('paste', ['$event']) onPaste(event: any) {

        const e = <ClipboardEvent>event;
        let pasteData = e.clipboardData.getData('text/plain');
        let current: string = this.el.nativeElement.value;
        const position = this.el.nativeElement.selectionStart;
        let next: string;
        if (!this.isSelect) {
            next = [current.slice(0, position), pasteData, current.slice(position)].join('');
        } else {
            next = [current.slice(0, position), pasteData, current.slice(position + this.getSelectedText().length)].join('');
        }
        this.integerOnly(event)
        return;

    }

    @HostListener('keydown', ['$event'])
    onKeyDown(event: KeyboardEvent) {
          // Allow Backspace, tab, end, and home keys
        if (this.specialKeys.indexOf(event.key) !== -1) {
            return;
        }
        if ((event.key.toLowerCase() === "c" && event.ctrlKey === true) || (event.key.toLowerCase() === "v" && event.ctrlKey === true)
            || (event.key.toLowerCase() === "x" && event.ctrlKey === true)) {
            return;
        }

        let current: string = this.el.nativeElement.value;
        const position = this.el.nativeElement.selectionStart;
        let next: string;
        if (!this.isSelect) {
            next = [current.slice(0, position), event.key, current.slice(position)].join('');
        } else {
            next = [current.slice(0, position), event.key, current.slice(position + this.getSelectedText().length)].join('');
        }

        this.integerOnly(event)
        return;

    }

    public getSelectedText() {
        if (window.getSelection) {
            return window.getSelection().toString();
        }
        return '';
    }
    

 
}
