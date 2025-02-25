import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ButtonsModule, LayoutModule , CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements AfterViewInit {
  ngAfterViewInit(): void {

    gsap.registerPlugin(ScrollTrigger);
    var anime = gsap.timeline();

    // First Box Animation
    gsap.to(".firstBox", {
      x: 1200,
      duration: 3,
      scrollTrigger: {
        trigger: ".firstBox",
        start: "top 95%", // Animation starts when `.firstBox` enters 80% of the viewport
        end: "top 5%", // Ends when it reaches 20% of the viewport
        scrub: true, // Smooth animation on scroll
        markers: false, // Enable markers (for debugging, remove later)
      }
    });

    // Second Box Animation
    gsap.to(".secondBox", {
      x: 1200,
      duration: 3,
      scrollTrigger: {
        trigger: ".secondBox",
        start: "top 63%",
        end: "top 5%",
        scrub: true,
        markers: false,
      }
    });

    // Third Box Animation
    gsap.to(".thirdBox", {
      x: 1200,
      duration: 3,
      scrollTrigger: {
        trigger: ".thirdBox",
        start: "top 70%",
        end: "top 5%",
        scrub: true,
        markers: false,
      }
    });

}

}
