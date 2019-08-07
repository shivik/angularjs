
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppEnvironment } from '../../environments/AppEnvironment';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-tryit',
  templateUrl: './tryit.component.html',
  styleUrls: ['./tryit.component.css']
})
export class TryitComponent implements OnInit {

  reqForm = new FormGroup({

    jsonRequest: new FormControl()
  });

  // details: { "server": string, "endpoints": { [key: string]: any }, "method": { [key: string]: any } };
  headers: any;
  jsonReq: { "jsonRequest": { [key: string]: any } };
  apiDetails: Subscription;
  details: { "type": string, "route": string, "authentication": string };
  apiURL: any;
  method: any;
  endpoint: any;
  response: any;
  constructor(public httpClient: HttpClient, private apiService: DataService) {
  }

  ngOnInit() {
    this.headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.apiDetails = this.apiService.getData().subscribe((data) => {
      this.details = data;
    });
    this.fetchServerDetails();
  }

  fetchServerDetails() {
    this.apiURL = AppEnvironment.environment.server.scheme
      + '://'
      + AppEnvironment.environment.server.url;
    this.method = this.details.type;
    this.endpoint = this.details.route;
  }

  getInfo() {
    this.jsonReq = this.reqForm.value;
    var url = `${this.apiURL + this.endpoint}`;
    switch (this.method) {
      case 'GET':
        this.httpClient.get(url).subscribe((data) => {
          this.response = data;
        });
        break;
      case 'POST':
        this.httpClient.post<any>(`${url}`, `${this.jsonReq.jsonRequest}`, { headers: this.headers }).subscribe((resp) => {
          this.response = resp;
          if (this.response.hasOwnProperty('access_token')) {
            this.apiService.setToken(this.response.access_token);
          }
        });
        break;
    }
    return this.response;
  }


}
