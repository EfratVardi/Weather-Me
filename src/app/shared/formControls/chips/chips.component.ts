import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FavoritesService } from 'src/app/core/services/favorites.service';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})
export class ChipsComponent {
  @Input() chipsList:any [] = [];
  @Output() chipRemoved = new EventEmitter<string>();

  constructor() { }

  removeChip(locationKey: string) {
    this.chipRemoved.emit(locationKey);
  }
}
