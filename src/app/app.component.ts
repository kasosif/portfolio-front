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
  private title: string;

  constructor(private translate: TranslateService,
              private titleService: Title,
              private mainService: MainService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.changeLanguageByQueryParam();
  }


  changeLanguageByQueryParam() {
    this.route.queryParams.subscribe({
      next: (params) => {
        if ('lang' in params) {
          console.log(params['lang']);
          const urlLang = params['lang'];
          localStorage.setItem('lang', urlLang);
          this.translate.use(urlLang);
          this.router.navigate([], {
            relativeTo: this.route,
            queryParams: {lang: null},
            queryParamsHandling: 'merge',
          }).then(r => true);
        } else {
          if (!localStorage.getItem('lang')) {
            localStorage.setItem('lang', appConfig.defaultLanguage);
          }
          let lang = localStorage.getItem('lang');
          this.translate.setDefaultLang(lang);
          this.translate.use(lang);
        }
        this.mainService.getTitle().subscribe(res => {
          this.titleService.setTitle(res.result.title);
        })
      },
    });
  }

}
