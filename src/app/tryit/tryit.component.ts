import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import Environment from '../../../environment.json';

@Component({
  selector: 'app-tryit',
  templateUrl: './tryit.component.html',
  styleUrls: ['./tryit.component.css']
})
export class TryitComponent implements OnInit {
  apiURL: string = null;
  method: string = null;
  endpoint: string = 'info';
  response: any;
  client: any;
  constructor(public httpClient: HttpClient, public abcd: ApiService) {
  }

  ngOnInit() {
  }
  fetchServerDetails() {
    this.apiURL = Environment.environment.server;
    this.method = Environment.environment.endpoints.info.method;
  }

  getInfo() {
    var url = `${this.apiURL + this.endpoint}`;
    console.log(url);
    this.httpClient.get(url).subscribe((data) => {
      this.response = data;
    });
    return this.response;
  }

}
