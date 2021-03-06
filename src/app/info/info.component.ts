import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';
import { AppEnvironment } from '../../environments/AppEnvironment';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  infoDetails: Subscription;
  info: object;
  server: object;
  response: any;
  client: any;
  hidden: boolean = false;
  constructor(private infoData: DataService) {
  }
  infoSuccess: any = [{
    "success": true,
    "data": {
      "name": "4R6KJ-m",
      "cluster_name": "elasticsearch",
      "cluster_uuid": "zJcDDrneQdGbhaaAb1T5ew",
      "version": {
        "number": "6.2.4",
        "build_hash": "ccec39f",
        "build_date": "2018-04-12T20:37:28.497551Z",
        "build_snapshot": false,
        "lucene_version": "7.2.1",
        "minimum_wire_compatibility_version": "5.6.0",
        "minimum_index_compatibility_version": "5.0.0"
      },
      "tagline": "You Know, for Search"
    }
  }];

  infoError: any = [{
    "success": false,
    "error_message": "/imfo Page does not exist!"
  }];

  ngOnInit() {
    this.infoData.setData(AppEnvironment.environment.endpoints.info);
    this.infoDetails = this.infoData.getData().subscribe((data) => {
      this.info = data;
    });
  }

}
