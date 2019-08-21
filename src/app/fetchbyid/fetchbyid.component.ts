import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';
import { AppEnvironment } from '../../environments/AppEnvironment';

@Component({
  selector: 'app-fetchbyid',
  templateUrl: './fetchbyid.component.html',
  styleUrls: ['./fetchbyid.component.css']
})
export class FetchbyidComponent implements OnInit {
  fetchDetails: Subscription;
  fetchResp: object;
  constructor(private fetch: DataService) {
  }

  ngOnInit() {
    this.fetch.setData(AppEnvironment.environment.endpoints.fetchbyid);
    this.fetchDetails = this.fetch.getData().subscribe((data) => {
      this.fetchResp = data;
    });
  }

  fetchError: any = [
    {
      "success": false,
      "errorMessage": "The document with given id does not exist in the database. Please check id.",
      "errorCode": 148,
      "app": "PeopleFinder"
    }
  ];

  fetchResponse: any = [
    {
      "success": true,
      "data": {
        "_id": "02032665",
        "_source": {
          "empbusinesstitle": "Application Administrator, 2",
          "empcity": "Chandigarh",
          "empcountry": "IND",
          "empid": "02032665",
          "empjobfunction": "IT",
          "empjobsubfuncion": "Applications",
          "emplocation": "Chandigarh Office",
          "employeeemail": "skashyap@oceaneering.com",
          "employeename": "Shivi Kashyap",
          "empserviceline": "CORPORATE",
          "empstatus": "A",
          "empsubserviceline": "CORPORATE - IT",
          "emptradesassociation": [],
          "hiredate": "2016-08-11",
          "lastupdated": "1550547616000",
          "preffirstname": "Shivi",
          "supervisorid": "02012991",
        }
      }
    }
  ];


}
