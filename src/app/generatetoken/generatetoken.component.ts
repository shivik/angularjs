import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-generatetoken',
  templateUrl: './generatetoken.component.html',
  styleUrls: ['./generatetoken.component.css']
})
export class GeneratetokenComponent implements OnInit {

  constructor(public httpClient: HttpClient, public TryItModel: ApiService) { }

  ngOnInit() {
  }

}
