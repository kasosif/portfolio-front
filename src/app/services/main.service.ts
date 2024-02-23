import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import appConfig from "../app_config.json";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {PortfolioApiResponse} from "../model/portfolioApiResponse.interface";
import {ContactRequest} from "../model/contactRequest.interface";
@Injectable({
  providedIn: 'root'
})
export class MainService {
  portfolioCoreUrl = environment.portfolioCoreUrl;
  mainApi = appConfig.mainApi;
  constructor(private http: HttpClient) { }

  getProfile(): Observable<PortfolioApiResponse> {
    return this.http.get<PortfolioApiResponse>(`${this.portfolioCoreUrl}${this.mainApi}/profile`);
  }

  sendContactRequest(contactRequest: ContactRequest): Observable<PortfolioApiResponse> {
    return this.http.post<PortfolioApiResponse>(`${this.portfolioCoreUrl}${this.mainApi}/contact-request`, contactRequest);
  }

}
