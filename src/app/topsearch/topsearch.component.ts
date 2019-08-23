import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';
import { AppEnvironment } from '../../environments/AppEnvironment';
@Component({
  selector: 'app-topsearch',
  templateUrl: './topsearch.component.html',
  styleUrls: ['./topsearch.component.css']
})
export class TopsearchComponent implements OnInit {

  recentData: Subscription;
  data: object;
  response: any;

  constructor(private recent: DataService) {
  }

  ngOnInit() {
    this.recent.setData(AppEnvironment.environment.endpoints.topsearches);
    this.recentData = this.recent.getData().subscribe((map) => {
      this.data = map;
    });
  }
  reqSample: any = [{
    "size": 4,
    "username": "skashyap",
    "appname": "Global Lesson Learnt"
  }];

  savedData: any = [{
    "username": "skashyap",
    "appname": "Global Lesson Learnt",
    "key": "assets",
    "timecreated": 1557509641,
    "ipaddress": ":10.110.27.154",
    "devicetype": "desktop"
  }];

  respSample: any = [{
    "success": true,
    "data": {
      "aggregations": {
        "top_searches": {
          "doc_count_error_upper_bound": 0,
          "sum_other_doc_count": 30,
          "buckets": [
            {
              "key": "a",
              "doc_count": 167
            },
            {
              "key": "OESLESSONSLEARNED_450",
              "doc_count": 59
            },
            {
              "key": "Cerenzie",
              "doc_count": 20
            },
            {
              "key": "pump",
              "doc_count": 17
            }
          ]
        }
      }
    }
  }];
}
