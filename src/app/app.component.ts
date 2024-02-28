import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {Title} from "@angular/platform-browser";
import {MainService} from "./services/main.service";
import {ActivatedRoute, Router} from "@angular/router";
import appConfig from "./app_config.json"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }




}
