import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { CardComponent } from './formControls/card/card.component';
import { ChipsComponent } from './formControls/chips/chips.component';
import { MatChipsModule } from '@angular/material/chips';
import { TextGeneratorComponent } from './formControls/text-generator/text-generator.component';
import { OpenAIService } from '../core/services/openai.service';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { ErrorModalComponent } from './formControls/error-modal/error-modal.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    CardComponent,
    ChipsComponent,
    TextGeneratorComponent,
    DateFormatPipe,
    ErrorModalComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    MatInputModule,
    MatCardModule,
    MatChipsModule,
    MatDialogModule,

  ],
  exports: [
    MatIconModule, 
    MatButtonModule, 
    MatAutocompleteModule, 
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    MatInputModule,
    CardComponent,
    ChipsComponent,
    TextGeneratorComponent,
    DateFormatPipe,
    ErrorModalComponent
  ]
})
export class SharedModule { }
