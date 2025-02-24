import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  cards = [
    { image: '../../assets/Images/Administrator.png', title: 'Card Title 1', description: 'Short description for card 1.' },
    { image: '../../assets/Images/Calumo-07.png', title: 'Card Title 2', description: 'Short description for card 2.' },
    { image: '../../assets/Images/Controls.png', title: 'Card Title 3', description: 'Short description for card 3.' },
    { image: '../../assets/Images/Estimate-02.png', title: 'Card Title 4', description: 'Short description for card 4.' },
    { image: '../../assets/Images/eValuate-03.png', title: 'Card Title 5', description: 'Short description for card 5.' },
    { image: '../../assets/Images/Controls.png', title: 'Card Title ', description: 'Short description for card .' },
  ];

  @ViewChild('cardContainer', { static: false }) cardContainer!: ElementRef;

  ngAfterViewInit(): void {
    this.startAutoScroll();
  }

  startAutoScroll(): void {
    const container = this.cardContainer.nativeElement;
    const cardWidth = container.firstChild.offsetWidth;
    let scrollAmount = 0;

    setInterval(() => {
      scrollAmount += cardWidth;
      container.scrollLeft = scrollAmount;

      if (scrollAmount >= container.scrollWidth - container.offsetWidth) {
        scrollAmount = 0;
      }
    }, 3000);
  }
  }
