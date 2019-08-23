import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private data$: BehaviorSubject<any>;
  private serverData$: BehaviorSubject<any>;
  private tokenData$: BehaviorSubject<any>;

  constructor() {
    this.data$ = new BehaviorSubject<any>("");
    this.serverData$ = new BehaviorSubject<any>("");
    this.tokenData$ = new BehaviorSubject<any>("");
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

  /**
   * get token data
   */
  public getToken(): Observable<any> {
    return this.tokenData$.asObservable();
  }

  /**
   * set server details
   * @param tokenData 
   */
  public setToken(tokenData: any): void {
    this.tokenData$.next(tokenData);
  }
}

