import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';
import { AppEnvironment } from '../../environments/AppEnvironment';

@Component({
  selector: 'app-generatetoken',
  templateUrl: './generatetoken.component.html',
  styleUrls: ['./generatetoken.component.css']
})
export class GeneratetokenComponent implements OnInit {
  infoDetails: Subscription;
  info: object;
  server: object;
  response: any;
  client: any;
  hidden: boolean = false;
  constructor(private genToken: DataService) {
  }

  ngOnInit() {
    this.genToken.setData(AppEnvironment.environment.endpoints.generateAuthenticationToken);
    this.infoDetails = this.genToken.getData().subscribe((data) => {
      this.info = data;
    });
  }

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
    "app_name": "Demand Planning ToolX",
    "username": "skashyap",
    "roles": [
      "user"
    ]
  }];
  invalidAppResp: any = [{
    "success": false,
    "errorMessage": "Invalid App Name",
    "errorCode": 104,
    "app": "Demand Planning ToolX"
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

}
