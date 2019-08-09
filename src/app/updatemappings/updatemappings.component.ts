import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';
import { AppEnvironment } from '../../environments/AppEnvironment';

@Component({
  selector: 'app-updatemappings',
  templateUrl: './updatemappings.component.html',
  styleUrls: ['./updatemappings.component.css']
})
export class UpdatemappingsComponent implements OnInit {
  mappingDetails: Subscription;
  mappings: object;
  response: any;

  constructor(private updateMappings: DataService) {
  }

  ngOnInit() {
    this.updateMappings.setData(AppEnvironment.environment.endpoints.updatemappings);
    this.mappingDetails = this.updateMappings.getData().subscribe((map) => {
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
