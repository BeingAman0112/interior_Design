import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { gsap } from 'gsap';
@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ButtonsModule, LayoutModule , CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements AfterViewInit {
  ngAfterViewInit(): void {

    var anime = gsap.timeline();
    anime.to(".firstBox",{
      x:1200,
      duration:3,
      repeat:-1,
      yoyo:true
    });
    anime.to(".secondBox",{
      x:1200,
      duration:3,
      repeat:-1,
      yoyo:true
    })
    anime.to(".thirdBox",{
      x:1200,
      duration:3,
      repeat:-1,
      yoyo:true
    })
}

}
