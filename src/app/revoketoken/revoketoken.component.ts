import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';
import { AppEnvironment } from '../../environments/AppEnvironment';

@Component({
  selector: 'app-revoketoken',
  templateUrl: './revoketoken.component.html',
  styleUrls: ['./revoketoken.component.css']
})
export class RevoketokenComponent implements OnInit {
  tokenDetails: Subscription; 
  token: object;
  server: object;
  response: any;
  client: any;
  hidden: boolean = false;

  constructor(private revoke: DataService) {
  }

  ngOnInit() {
    this.revoke.setData(AppEnvironment.environment.endpoints.revoketoken);
    this.tokenDetails = this.revoke.getData().subscribe((token) => {
      this.token = token;
    });
  }


  revokeReq: any = [
    {
      "access_token": "eyJhbGciOiJIUzI1NiIsInSR5cdgfgsfghCI6iIvkipXVCJ9.eyJhcHBfbmFtZSI6IlBl"
    }
  ];
  revokeResp: any = [
    {
      "success": true,
      "message": "Token deleted successfully"
    }
  ];

  revokeError: any = [
    {
      "success": false,
      "errorMessage": "access_token is required in header(s)",
      "errorCode": 105,
      "app": "PeopleFinder"
    }
  ];

}
