import { Directive,ElementRef,HostListener } from '@angular/core';
import { ShareDataService } from '../services/share-data.service';


@Directive({
  selector: '[appPrevButton]'
})
export class PrevButtonDirective {

  constructor(private el:ElementRef,private sharedData : ShareDataService) { 
    console.log(this.el.nativeElement)
  }
  @HostListener('click')
  btnPrev(){
    var ele = this.el.nativeElement.previousElementSibling.previousElementSibling;
    var slideTrack = ele.querySelector(".slide-track")
    const childrenTrackList = slideTrack.querySelectorAll('.slick-slide')
    this.sharedData.currentIndex--
    if(this.sharedData.currentIndex < 0){
      this.sharedData.currentIndex = (childrenTrackList.length - 2)/2
    }
    slideTrack.style.transform= `translateX(-${this.sharedData.currentIndex * 102}%)`
   
   
  }
}
