import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {MainService} from "../../../../services/main.service";
import {Resume} from "../../../../model/resume.interface";

@Component({
  selector: 'app-resumes-modal',
  templateUrl: './resumes-modal.component.html',
  styleUrls: ['./resumes-modal.component.scss']
})
export class ResumesModalComponent implements OnInit {
  resumes: Resume[];
  constructor(public dialogRef: MatDialogRef<ResumesModalComponent>, private mainService: MainService) { }

  ngOnInit(): void {
    this.mainService.getResumes().subscribe(res => {
      this.resumes = res.result;
    })
  }

  onClose() {
    this.dialogRef.close();
  }
}
