import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WordPipe } from './word.pipe';
import { IncrementDirective } from './increment.directive';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,WordPipe,IncrementDirective,ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assignment-5';
  inputData:string="";
  Name:string="";

  sData(input: string){
    console.log("yes");
    this.Name=input;
  }
}