import { Directive,ElementRef,HostListener } from '@angular/core';
import { ShareDataService } from '../services/share-data.service';
@Directive({
  selector: '[appChooseDot]'
})
export class ChooseDotDirective {

  constructor(private el:ElementRef,private sharedData : ShareDataService) { }

  @HostListener('click', ['$event.target'])
  onClick(dotElement: HTMLElement) {
    const dotIndex = Array.from(this.el.nativeElement.children).indexOf(dotElement);
    this.sharedData.setCurrentSlideIndex(dotIndex);
    var slideTrack = this.el.nativeElement.parentElement.querySelector('.slide-list').children[0];
    slideTrack.style.transform= `translateX(-${this.sharedData.currentIndex * 102.3}%)`
    
  }

}
