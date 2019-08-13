import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';
import { AppEnvironment } from '../../environments/AppEnvironment';

@Component({
  selector: 'app-params',
  templateUrl: './params.component.html',
  styleUrls: ['./params.component.css']
})
export class ParamsComponent implements OnInit {
  mappingDetails: Subscription;
  mappings: object;
  response: any;

  constructor(private mainSearch: DataService) {
  }

  ngOnInit() {
    this.mainSearch.setData(AppEnvironment.environment.endpoints.search);
    this.mappingDetails = this.mainSearch.getData().subscribe((map) => {
      this.mappings = map;
    });
  }
  page_size: any = [
    {
      "from": 10,
      "page_size": 100,
    }
  ];

  pageSizeQuery: any = [
    {
      "from": 10,
      "size": 100,
      "query": {
        "bool": {
          "must": [],
          "should": [],
          "must_not": []
        }
      },
      "_source": {
        "includes": [
          "field1",
          "field2",
          "field...n"
        ],
        "excludes": [
          "autocomplete",
          "suggesters"
        ]
      }
    }
  ];
}
