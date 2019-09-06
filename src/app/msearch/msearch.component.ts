import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';
import { AppEnvironment } from '../../environments/AppEnvironment';

@Component({
  selector: 'app-msearch',
  templateUrl: './msearch.component.html',
  styleUrls: ['./msearch.component.css']
})

export class MsearchComponent implements OnInit {
  mappingDetails: Subscription;
  mappings: object;
  response: any;

  constructor(private mainSearch: DataService) {
  }

  ngOnInit() {
    this.mainSearch.setData(AppEnvironment.environment.endpoints.msearch);
    this.mappingDetails = this.mainSearch.getData().subscribe((map) => {
      this.mappings = map;
    });
  }
  updateMappingReq: any = [
    {
      "refresh": true,
      "add_data": true,
      "index": "app_name",
      "collection": "collection_name"
    }
  ];

  updateMappingResp: any = [
    {
      "success": true,
      "data": {
        "SchemaMappingFound": true,
        "IndexExists": true,
        "DeletedIndex": true,
        "CreateIndex": true,
        "PushDataInProgress": true
      }
    }
  ];

  mappingerror: any = [
    {
      "success": false,
      "errorMessage": "Schema mapping file not found.",
      "errorCode": "137",
      "app": "Demand Planning Tool"
    }
  ];
}
