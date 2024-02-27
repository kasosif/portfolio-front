import {Component, OnInit, OnDestroy, ChangeDetectorRef} from '@angular/core';
import {LoaderService} from "../../services/loader.service";
import appConfig from "../../app_config.json";

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit, OnDestroy {
  public loading = false;

  public themeConfig: any;

  constructor(private loaderService: LoaderService, private cdr: ChangeDetectorRef) {
    this.themeConfig = appConfig.theme_config;
  }

  ngOnDestroy(): void {
    this.loading = false;
  }

  ngOnInit(): void {
    this.loaderService.isLoading.subscribe((v) => {
      this.loading = v;
      this.cdr.detectChanges();
    });
  }

}
