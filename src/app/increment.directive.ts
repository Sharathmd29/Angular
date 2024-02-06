import { Directive, ElementRef, HostListener, Input } from '@angular/core';Input
@Directive({
  selector: '[appIncrement]',
  standalone: true
})
export class IncrementDirective {
  @Input() count:any="0";

  constructor(private ele:ElementRef){

  }
 highlight(count:any ) {
    console.log('Counter value:', count);
  }
  @HostListener('click') onMouseClick(){
    this.highlight(this.count++);
  }

}
