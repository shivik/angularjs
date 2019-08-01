import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-generatetoken',
  templateUrl: './generatetoken.component.html',
  styleUrls: ['./generatetoken.component.css']
})
export class GeneratetokenComponent implements OnInit {
  tokenReq: any = [{
    "app_name": "Demand Planning Tool",
    "username": "skashyap",
    "roles": [
      "user"
    ]
  }];
  tokenResp: any = [{
    "success": true,
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfbmFtZSHI6IkRIVIlbWFuZCBQbGFubmluZyBUb29sIiwidXNlcm5hbWUiOiJza2FzaHlhcCIsInJv",
    "expiry": 3600
}];
  invalidAppReq: any = [{
    "app_name": "Demand Planning Toolx",
    "username": "skashyap",
    "roles": [
      "user"
    ]
  }];
  invalidAppResp: any = [{
    "success": false,
    "errorMessage": "Invalid App Name",
    "errorCode": 104,
    "app": "Demand Planning Toolx"
  }];
  invalidRolesReq: any = [{
    "app_name": "Demand Planning Tool",
    "username": "skashyap",
    "roles": [
      "Xadmin"
    ]
  }];
  invalidRolesResp: any = [{
    "success": false,
    "errorMessage": "user roles are not valid.",
    "errorCode": 107,
    "app": "Demand Planning Tool"
  }];

  constructor(public httpClient: HttpClient, public TryItModel: ApiService) { }

  ngOnInit() {
  }

}
