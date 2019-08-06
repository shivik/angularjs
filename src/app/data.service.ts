import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private data$: BehaviorSubject<any>;
  private serverData$: BehaviorSubject<any>;

  constructor() {
    this.data$ = new BehaviorSubject<any>("");
    this.serverData$ = new BehaviorSubject<any>("");

  }

  /**
   * get service data
   */
  public getData(): Observable<any> {
    return this.data$.asObservable();
  }

  /**
   * set service data
   * @param data 
   */
  public setData(data: any): void {
    this.data$.next(data);
  }

  /**
   * get server details
   */
  public getServerDetails(): Observable<any> {
    return this.serverData$.asObservable();
  }

  /**
   * set server details
   * @param serverData 
   */
  public setServerDetails(serverData: any): void {
    this.serverData$.next(serverData);
  }
}
