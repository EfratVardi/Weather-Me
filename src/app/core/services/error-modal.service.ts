import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ErrorModalComponent } from 'src/app/shared/formControls/error-modal/error-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ErrorModalService {
  constructor(private dialog: MatDialog) {}

  openErrorModal(title: string, message: string): void {
    this.dialog.open(ErrorModalComponent, {
      data: { title, message },
      width: '400px'
    });
  }
}
