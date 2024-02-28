import {Component, HostListener, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { animate, AUTO_STYLE, state, style, transition, trigger } from '@angular/animations';

import { ScrollSpyService } from "../../components/scroll-spy/scroll-spy.service";
import appConfig from "../../app_config.json";
import {MainService} from "../../services/main.service";
import {Language} from "../../model/language.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";
import {LoaderService} from "../../services/loader.service";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  providers: [NgbDropdownConfig],
  animations: [
    trigger('collapsedCard', [
      state('collapsed, void',
        style({
          overflow: 'hidden',
          height: '0px',
        })
      ),
      state('expanded',
        style({
          overflow: 'hidden',
          height: AUTO_STYLE,
        })
      ),
      transition('collapsed <=> expanded', [
        animate('400ms ease-in-out')
      ])
    ])
  ]
})
export class LayoutComponent implements OnInit {
  languages: Language[];
  languageMenuToggled: boolean = false;
  public currentSection;
  public themeConfig: any;
  public windowWidth: number;

  public openClass: string = '';
  public contentClass: string = 'content';

  public mobileHeaderClass: string = 'mobile-header-1';
  public desktopHeaderClass: string = 'desktop-header-1';
  public horizontalNavClass: string = 'navbar-dark';

  public desktopLogo = 'assets/images/logo.svg';

  public collapsedCard: string = 'collapsed';

  public selectedLanguage: string;

  constructor(public scrollSpy: ScrollSpyService,
              private loaderService: LoaderService,
              private translate: TranslateService,
              private mainService: MainService) {
    this.themeConfig = appConfig.theme_config;
    this.windowWidth = window.innerWidth;
  }

  ngOnInit(): void {
    this.selectedLanguage = localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en';
    this.loadLanguages();
    this.scrollSpy.count.subscribe(c => {
      this.currentSection = c;
    });
    document.querySelector('body').classList.add(this.themeConfig.themeType);
    switch (this.themeConfig.theme) {
      case 'vertical':
        this.mobileHeaderClass = 'mobile-header-1';
        this.desktopHeaderClass = 'desktop-header-1';
        switch (this.themeConfig.themeType) {
          case 'light':
              this.desktopLogo = 'assets/images/logo-dark.svg';
            break;
          default:
            this.desktopLogo = 'assets/images/logo.svg';
        }
        break;
      case 'collapsed':
        this.mobileHeaderClass = 'mobile-header-2';
        this.desktopHeaderClass = 'desktop-header-2';
        this.contentClass = 'content-2';
        switch (this.themeConfig.themeType) {
          case 'light':
            this.desktopLogo = 'assets/images/logo-b-dark.svg';
            break;
          default:
            this.desktopLogo = 'assets/images/logo-b-light.svg';
        }
        break;
      case 'horizontal':
        this.desktopHeaderClass = 'desktop-header-3 fixed-top';
        this.contentClass = 'content-3';
        switch (this.themeConfig.themeType) {
          case 'light':
            this.horizontalNavClass = 'navbar-light';
            this.desktopLogo = 'assets/images/logo-dark.svg';
            break;
          default:
            this.desktopLogo = 'assets/images/logo.svg';
        }
        break;
    }
    this.mobileHeaderClass = this.mobileHeaderClass + ' ' + this.themeConfig.themeType;
    this.desktopHeaderClass = this.desktopHeaderClass + ' ' + this.themeConfig.themeType;

    if (this.windowWidth > 991) {
      this.collapsedCard = 'false';
    }
  }

  onResize(e) {
    if (this.windowWidth > 991) {
      this.collapsedCard = 'false';
    } else {
      this.collapsedCard = 'collapsed';
    }
  }

  scrollTo(section) {
    this.currentSection = section;
    const sectionHtml = document.querySelector('#' + section);
    if (sectionHtml !== null) {
      sectionHtml.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
  }

  collapsedCardToggle() {
    this.collapsedCard = this.collapsedCard === 'collapsed' ? 'expanded' : 'collapsed';
  }

  toggleOpenClass() {
    this.openClass = (this.openClass === 'open') ? '' : 'open'
  }

  loadLanguages() {
    this.mainService.getLanguages().subscribe(res => {
      this.languages = res.result;
    });
  }

  changeLanguage(language: Language) {
    this.loaderService.isLoading.next(true);
    localStorage.setItem('lang', language.code);
    this.translate.use(language.code);
    window.location.reload();
  }

  closeOpenClass() {
    this.openClass = '';
  }
}
