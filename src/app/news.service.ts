import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

const API_URL = environment.apiUrl;
const API_KEY = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  one_article : any;
  
  constructor(private http:HttpClient) { }

  getData(url: any){
    return this.http.get(`${API_URL}/${url}&apiKey=${API_KEY}`);
  }
}
