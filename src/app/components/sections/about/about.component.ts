import {Component, Input, OnInit} from '@angular/core';
import {AboutInfo} from "../../../model/aboutInfo.interface";
import {MatDialog} from "@angular/material/dialog";
import {ResumesModalComponent} from "./resumes-modal/resumes-modal.component";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  @Input() info: AboutInfo;
  constructor(public dialog: MatDialog) { }

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

  openResumesModal() {
    const modalConfig = {
      closeOnNavigation: false,
      autoFocus: false,
      disableClose: true,
      panelClass: [],
      width: '700px',
      position: {
        top: '20px'
      },
      data: {},
    }
    const dialog = this.dialog.open(ResumesModalComponent, modalConfig);

  }

}
