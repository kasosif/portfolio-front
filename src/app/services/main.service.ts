import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import appConfig from "../app_config.json";
import {Observable} from "rxjs";
import {PortfolioApiResponse} from "../model/portfolioApiResponse.interface";
import {ContactRequest} from "../model/contactRequest.interface";
@Injectable({
  providedIn: 'root'
})
export class MainService {
  mainApi = appConfig.mainApi;
  constructor(private http: HttpClient) { }

  getMetaData(): Observable<PortfolioApiResponse> {
    return this.http.get<PortfolioApiResponse>(`${this.mainApi}/metadata`);
  }

  getProfile(): Observable<PortfolioApiResponse> {
    return this.http.get<PortfolioApiResponse>(`${this.mainApi}/profile`);
  }

  sendContactRequest(contactRequest: ContactRequest): Observable<PortfolioApiResponse> {
    return this.http.post<PortfolioApiResponse>(`${this.mainApi}/contact-request`, contactRequest);
  }

  getResumes(): Observable<PortfolioApiResponse> {
    return this.http.get<PortfolioApiResponse>(`${this.mainApi}/resumes`);
  }
}
