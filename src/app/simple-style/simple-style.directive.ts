import {Directive, ElementRef, OnInit} from '@angular/core';

 @Directive( {
  selector: '[app-simple-style]'
})
export class SimpleStyleDirective implements OnInit {
  constructor(private elementRef: ElementRef) {
  }
  ngOnInit() {
    this.elementRef.nativeElement.style.color = 'red';
  }
}
