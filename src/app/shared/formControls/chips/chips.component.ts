import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FavoritesService } from 'src/app/core/services/favorites.service';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html'})
export class ChipsComponent {
  @Input() chipsList: { key: string, value: any }[] = [];
  @Output() chipRemoved = new EventEmitter<string>();
  @Output() chipClicked = new EventEmitter<string>();

  constructor() { }

  removeChip(locationKey: string) {
    this.chipRemoved.emit(locationKey);
  }

  onChipClick(locationKey: string) {
    this.chipClicked.emit(locationKey);
  }
}
