import { Directive, HostListener, HostBinding, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[geoKBD]'
})
export class GeokbdDirective {
  constructor(private el: ElementRef, public renderer2: Renderer2) {}
  
  @HostListener('input', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    let text = this.translateToKA(this.el.nativeElement.value);
    this.el.nativeElement.value = text;
  } 

  translateToKA(english: String) {
    var index, chr, text = [], symbols = "abgdevzTiklmnopJrstufqRySCcZwWxjh";
    for (var i = 0; i < english.length; i++) {
      chr = english.substr(i, 1);
      if ((index = symbols.indexOf(chr)) >= 0) {
        text.push(String.fromCharCode(index + 4304));
      } else {
        text.push(chr);
      }
    } 
    return text.join('');
  };

}
