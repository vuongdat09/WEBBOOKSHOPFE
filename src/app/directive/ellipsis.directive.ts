import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';
import {  AfterViewInit, ViewChildren, QueryList} from '@angular/core';
@Directive({
  selector: '[appEllipsis]'
})
export class EllipsisDirective implements AfterViewInit   {
  @ViewChildren('itemRef') itemRefs!: QueryList<ElementRef> | [1,2,3] ;
  @Input() maxLength!: number;
  constructor(private el: ElementRef, private renderer: Renderer2) {}


  ngOnInit() {
   
  }
  ngAfterViewInit(): void {
    const element = this.el.nativeElement;
    const content = element.innerHTML;
    if (content.length > this.maxLength) {
      const truncatedContent = content.slice(0, this.maxLength) + '...';
      this.renderer.setProperty(element, 'textContent', truncatedContent);      
      this.renderer.setStyle(element, 'overflow', 'hidden');
      this.renderer.setStyle(element, 'text-overflow', 'ellipsis');
    }
  }
}
