import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromptService {
  // youAPIKey 
  private myAPIKey = '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';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: `Bearer ${this.myAPIKey}`
    })
  };

  constructor(private http : HttpClient) { }

  public generateImage(prompt : string) : Observable<any> {
    //send request to the Dall-E API : 
    return this.http.post('https://api.openai.com/v1/images/generations',{
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    }, this.httpOptions);
  }
}
