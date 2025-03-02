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
    { image: '../../assets/Images/1.jpeg', title: 'Card Title 1', description: 'Short description for card 1.' },
    { image: '../../assets/Images/3.jpeg', title: 'Card Title 2', description: 'Short description for card 2.' },
    { image: '../../assets/Images/5.jpeg', title: 'Card Title 3', description: 'Short description for card 3.' },
    { image: '../../assets/Images/7.jpeg', title: 'Card Title 4', description: 'Short description for card 4.' },
    { image: '../../assets/Images/9.jpeg', title: 'Card Title 5', description: 'Short description for card 5.' },
    { image: '../../assets/Images/10.jpeg', title: 'Card Title ', description: 'Short description for card .' },
    { image: '../../assets/Images/12.jpeg', title: 'Card Title ', description: 'Short description for card .' },
    { image: '../../assets/Images/14.jpeg', title: 'Card Title ', description: 'Short description for card .' },
    { image: '../../assets/Images/16.jpeg', title: 'Card Title ', description: 'Short description for card .' },
    { image: '../../assets/Images/17.jpeg', title: 'Card Title ', description: 'Short description for card .' },
    { image: '../../assets/Images/18.jpeg', title: 'Card Title ', description: 'Short description for card .' },
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
