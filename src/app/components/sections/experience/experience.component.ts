import { Component, OnInit, Input } from '@angular/core';
import {ExperienceInfo} from "../../../model/experienceInfo.interface";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  @Input() info: ExperienceInfo;
  constructor() { }

  ngOnInit(): void {
  }

}
