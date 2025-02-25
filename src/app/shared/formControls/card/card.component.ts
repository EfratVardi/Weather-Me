import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() url: string;
  @Input() content: string;

  constructor() {
  }

  
}
