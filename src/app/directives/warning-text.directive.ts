import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[WarningText]',
})
export class WarningTextDirective implements OnInit {
  // elementref useRef hook karşılık gelir.

  @Input() textContent: string = '';

  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    console.log('textContext', this.textContent);

    this.element.nativeElement.style.backgroundColor = 'indianred';
    this.element.nativeElement.style.color = 'yellow';
    this.element.nativeElement.innerText = this.textContent;
  }

  @HostListener('mouseover') // varolan bir angular eventi method bağlamamızı sağlar.
  onMouseOver() {
    this.element.nativeElement.style.textDecoration = 'underline';
  }

  @HostListener('mouseout') // varolan bir angular eventi method bağlamamızı sağlar.
  onMouseOut() {
    this.element.nativeElement.style.textDecoration = 'none';
  }
}
