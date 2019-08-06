
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { AppEnvironment } from '../../environments/AppEnvironment';
import { FormControl, FormGroup, Validators } from '@angular/forms';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Component({
  selector: 'app-tryit',
  templateUrl: './tryit.component.html',
  styleUrls: ['./tryit.component.css']
})
export class TryitComponent implements OnInit {

  reqForm = new FormGroup({

    reqbody: new FormControl()
  });

  // details: { "server": string, "endpoints": { [key: string]: any }, "method": { [key: string]: any } };
  apiDetails: Subscription;
  details: { "type": string, "route": string, "authentication": string };
  apiURL: any;
  method: any;
  endpoint: any;
  response: any;
  constructor(public httpClient: HttpClient, private apiService: DataService) {
  }

  ngOnInit() {
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
    console.log(this.reqForm.value)
    var url = `${this.apiURL + this.endpoint}`;
    console.log('url', url);
    switch (this.method) {
      case 'GET':
        this.httpClient.get(url).subscribe((data) => {
          this.response = data;
        });
        break;
      case 'POST':
        this.httpClient.post(url, this.reqForm.value, httpOptions).subscribe((resp) => {
          this.response = resp;
        });
        break;
    }
    return this.response;
  }


}
