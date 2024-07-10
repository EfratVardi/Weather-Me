import { Component, Input } from '@angular/core';
import { OpenAIService } from 'src/app/core/services/openai.service';

@Component({
  selector: 'app-text-generator',
  templateUrl: './text-generator.component.html',
  styleUrls: ['./text-generator.component.scss']
})
export class TextGeneratorComponent {
  @Input() prompt: string;
  generatedText: string = '';

  constructor(private openaiService: OpenAIService) { }
  ngOnInit(): void {
    this.openaiService.generateText(this.prompt).subscribe(response => {
      this.generatedText = response.choices[0].message.content;
    }, error => {
      console.error('Error generating text:', error);
    });
  }
}
