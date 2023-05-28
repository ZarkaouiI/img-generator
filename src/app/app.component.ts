import { Component, OnInit } from '@angular/core';
import { PromptService } from './service/prompt.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public prompt : string = '';
  public statusMessage : string = '';
  public imgUrl : string = '../assets/img.png';

  constructor(private promptService : PromptService) {

  }

  public ngOnInit(): void {
  }

  // TODO : we have to make some loading thing until the image gets uploaded

  public promptHandler() {
    this.statusMessage = 'Generating image .. please wait !';
    this.promptService.generateImage(this.prompt).subscribe({
      next : response => {
        this.imgUrl = response.data[0].url;
        this.statusMessage = '';
        console.log(response.data[0].url);
      },
      error : err => {
        console.log(err);
      }
    });
  }

  //TODO : change color if not valid 
  public checkFormValidity() : boolean {
    return this.prompt === '';
  }
}
