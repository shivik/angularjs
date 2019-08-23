import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';
import { AppEnvironment } from '../../environments/AppEnvironment';

@Component({
  selector: 'app-recentsearch',
  templateUrl: './recentsearch.component.html',
  styleUrls: ['./recentsearch.component.css']
})
export class RecentsearchComponent implements OnInit {
  recentData: Subscription;
  data: object;
  response: any;

  constructor(private recent: DataService) {
  }

  ngOnInit() {
    this.recent.setData(AppEnvironment.environment.endpoints.recentsearches);
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
    "aggregations": {
      "recent_searches": {
        "doc_count_error_upper_bound": -1,
        "sum_other_doc_count": 25,
        "buckets": [
          {
            "key": "permission",
            "doc_count": 1,
            "max_score": {
              "value": 1561713078761
            }
          },
          {
            "key": "improvement",
            "doc_count": 4,
            "max_score": {
              "value": 1561712782370
            }
          },
          {
            "key": "Cerenzie",
            "doc_count": 7,
            "max_score": {
              "value": 1561712578223
            }
          },
          {
            "key": "damaged",
            "doc_count": 2,
            "max_score": {
              "value": 1561635897550
            }
          }
        ]
      }
    }
  }];
}
