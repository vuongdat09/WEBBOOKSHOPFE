import { Component,OnInit,ElementRef } from '@angular/core';
import { ShareDataService } from 'src/app/services/share-data.service';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {
  currentDot : number = 0;
  dots = [
    1,2,3,4
  ]
  constructor(private shareData : ShareDataService){

    // this.currentDot = this.shareData.currentIndex;
    
  }
  ngOnInit(): void {
    setInterval(() => {
      this.nextCurrentDot(); 
    }, 7000); 
  }
  nextCurrentDot(){
    this.currentDot++
    if(this.currentDot > 3){
      this.currentDot = 0 
    }
  }
  prevCurrentDot(){
    this.currentDot--
    if(this.currentDot < 0 ){
      this.currentDot = 3 
    }
  }
  setCurrentDot(index:number){
    this.currentDot = index
    console.log(this.currentDot)
  }
}
