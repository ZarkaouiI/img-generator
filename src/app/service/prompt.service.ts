import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromptService {
  private myAPIKey = 'PUT_YOUR_API_KEY_HERE';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: `Bearer ${this.myAPIKey}`
    })
  };

  constructor(private http : HttpClient) { }

  public generateImage(prompt : string) : Observable<any> {
    //send request to the OpenAI API : 
    return this.http.post('https://api.openai.com/v1/images/generations',{
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    }, this.httpOptions);
  }
}
