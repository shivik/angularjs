import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = 'https://eswdev.oii.oceaneering.com/';

  constructor(private httpClient: HttpClient) {
  }

  public getClient(url?: string) {
    return this.httpClient.get(`${this.apiURL}/info/`);
  }
}
