import { Component, Input } from '@angular/core';
import { ErrorModalService } from 'src/app/core/services/error-modal.service';
import { OpenAIService } from 'src/app/core/services/openai.service';

@Component({
  selector: 'app-text-generator',
  templateUrl: './text-generator.component.html',
  styleUrls: ['./text-generator.component.scss']
})
export class TextGeneratorComponent {
  @Input() prompt: string;
  @Input() icon: string;

  generatedText: string = '';

  constructor(private openaiService: OpenAIService,private errorModalService: ErrorModalService) { }
  ngOnInit(): void {
    this.openaiService.generateText(this.prompt).subscribe(response => {
      this.generatedText = response.choices[0].message.content;
    }, error => {
      this.showError('Error generating text')
    });
  }

  showError(error:string) {
    this.errorModalService.openErrorModal('Error', error);
  }
}
