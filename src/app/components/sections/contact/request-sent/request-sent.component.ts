import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-request-sent',
  templateUrl: './request-sent.component.html',
  styleUrls: ['./request-sent.component.scss']
})
export class RequestSentComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RequestSentComponent>) { }

  ngOnInit(): void {
  }
  onClose() {
    this.dialogRef.close();
  }

}
