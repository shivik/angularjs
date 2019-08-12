import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';
import { AppEnvironment } from '../../environments/AppEnvironment';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent implements OnInit {
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
  emptySearch: any = [
    {

    }
  ];

  searchConst: any = [
    {
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
          "field3",
          "field...n",

        ],
        "excludes": [
          "feature1",
          "feature2",
          "feature...n",
        ]
      }
    }
  ];
  search_keyword: any = [
    {
      "search_keyword": "hpillai"
    }
  ];
  srchKeyResp: any = [
    {
      "success": true,
      "data": {
        "took": 23,
        "hits": {
          "total": 1,
          "hits": [
            {
              "_id": "02001829",
              "_source": {
                "empjobfunction": "IT",
                "empsubserviceline": "CORPORATE - IT",
                "empjobsubfuncion": "Applications",
                "empcity": "Houston",
                "empstatus": "A",
                "preffirstname": "Harikumar",
                "empid": "02001829",
                "empbusinesstitle": "Sr Manager, Application Development",
                "empeducation": [],
                "empcertification": [],
                "empcountry": "USA",
                "emptradesassociation": [],
                "empserviceline": "CORPORATE",
                "employeename": "Harikumar Thankappan Pillai"
              }
            }
          ]
        },
        "suggest": {
          "suggestions": [
            {
              "text": "hpillai",
              "offset": 0,
              "length": 7,
              "options": []
            }
          ]
        }
      }
    }
  ];

  search_term: any = [
    {
      "search_term": "kashyap"
    }
  ];
  srchTrmResp: any = [
    {
      "success": true,
      "data": {
        "took": 2,
        "hits": {
          "total": 1,
          "hits": [
            {
              "_id": "02032665",
              "_source": {
                "empid": "02032665",
                "emplocation": "Chandigarh Office",
                "empjobfunction": "IT",
                "empsubserviceline": "CORPORATE - IT",
                "empjobsubfuncion": "Applications",
                "empcountry": "IND",
                "empcity": "Chandigarh",
                "preffirstname": "Shivi",
                "empserviceline": "CORPORATE",
                "employeename": "Shivi Kashyap"
              }
            }
          ]
        },
        "suggest": {
          "suggestions": [
            {
              "text": "kashyap",
              "offset": 0,
              "length": 7
            }
          ]
        }
      }
    }
  ];

  refined_by: any = [
    {
      "refined_by": {
        "empcountry": ["USA"],
        "empjobfunction": ["IT"]
      }
    }
  ];
  refinedResp: any = [
    {
      "success": true,
      "data": {
        "took": 2,
        "hits": {
          "total": 197,
          "hits": [
            {
              "_id": "02010171",
              "_source": {
                "emplocation": "Houston 11925 FM 529",
                "empjobfunction": "IT",
                "empsubserviceline": "CORPORATE - IT",
                "empjobsubfuncion": "Applications",
                "empcity": "Houston",
                "preffirstname": "Jonathan",
                "empid": "02010171",
                "empbusinesstitle": "Sr Manager, Database & Application Administration",
                "empcountry": "USA",
                "empserviceline": "CORPORATE",
                "employeename": "Jonathan Jia Jonq Chern"
              }
            }
          ]
        }
      }
    }
  ];

  advance_search: any = [
    {
      "advance_search": {
        "operator": "or",
        "department": {
          "value": "3596 SCM Aberdeen",
          "type": "exact_match"
        },
        "empbusinesstitle": {
          "value": "store",
          "type": "partial_match"
        }
      }
    }
  ];
  advcsrchresp: any = [
    {
      "success": true,
      "data": {
        "took": 2,
        "hits": {
          "total": 26,
          "hits": [
            {
              "_source": {
                "empid": "02018090",
                "emplocation": "Sonils Base",
                "empbusinesstitle": "Store Keeper",
                "empjobfunction": "Supply Chain Management",
                "empsubserviceline": "SS SCM ANGOLA",
                "empjobsubfuncion": "Warehouse Management",
                "empcountry": "AGO",
                "empcity": "Luanda",
                "empstatus": "A",
                "preffirstname": "Mateus",
                "empserviceline": "SS SCM",
                "employeename": "Mateus Jose Silva"
              }
            }
          ]
        }
      }
    }
  ];
}
