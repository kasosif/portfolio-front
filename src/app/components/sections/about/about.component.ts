import {Component, Input, OnInit} from '@angular/core';
import {AboutInfo} from "../../../model/aboutInfo.interface";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  @Input() info: AboutInfo;
  constructor() { }

  ngOnInit(): void {
  }

  getProgressBarType(percentage: number): string {
    switch (true) {
      case (percentage <= 49):
        return "secondary";
      case (percentage < 70):
        return "primary";
      case (percentage <= 100):
        return "success";
    }
    return "danger";
  }

}
