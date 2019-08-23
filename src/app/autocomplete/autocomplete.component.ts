import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';
import { AppEnvironment } from '../../environments/AppEnvironment';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {
  autocompleteSub: Subscription;
  data: object;
  response: any;

  constructor(private autocomplete: DataService) {
  }

  ngOnInit() {
    this.autocomplete.setData(AppEnvironment.environment.endpoints.autocomplete);
    this.autocompleteSub = this.autocomplete.getData().subscribe((map) => {
      this.data = map;
    });
  }
  autocompleteResp: any = [
    {
      "success": true,
      "data": {
        "took": 3,
        "suggest": {
          "suggestions": [
            {
              "text": "hari",
              "offset": 0,
              "length": 4,
              "options": [
                {
                  "text": "Harikumar Thankappan Pillai",
                  "_index": "employeesearch",
                  "_type": "doc",
                  "_id": "02001829",
                  "_score": 1
                },
                {
                  "text": "Haris Sirayev",
                  "_index": "employeesearch",
                  "_type": "doc",
                  "_id": "02032545",
                  "_score": 1
                },
                {
                  "text": "Harichandra Kumar Yadav",
                  "_index": "employeesearch",
                  "_type": "doc",
                  "_id": "02034528",
                  "_score": 1
                },
                {
                  "text": "Harinder Jeet Singh",
                  "_index": "employeesearch",
                  "_type": "doc",
                  "_id": "02034629",
                  "_score": 1
                }
              ]
            }
          ]
        }
      }
    }
  ];

  autoError: any = [
    {
      "success": false,
      "errorMessage": "Requested body is not valid. :[illegal_argument_exception] The required text option is missing",
      "errorCode": 101,
      "app": "PeopleFinder"
    }
  ];

  autoMappings: any = [
    {
      "autocomplete": {
        "properties": {
          "all": {
            "type": "completion"
          },
          "employeename": {
            "type": "completion"
          },
          "emptype": {
            "type": "completion"
          },
          "businessunit": {
            "type": "completion"
          },
          "department": {
            "type": "completion"
          },
          "empsuffix": {
            "type": "completion"
          },
          "region": {
            "type": "completion"
          },
          "totalexperience": {
            "type": "completion"
          }
        }
      }
    }
  ];

  autocompletReq: any = [{
    "index": "employeesearch",
    "prefix": "hari",
    "field": "employeename"
  }];

}