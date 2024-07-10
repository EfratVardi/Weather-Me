import { Component, Input } from '@angular/core';
import { CurrentWeather } from '../../models/currentWeather.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() icon: string;
  @Input() content: string;


  constructor() { }
}
